import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createDeal, createEnquiry } from '../api/client';

gsap.registerPlugin(ScrollTrigger);

const JQUERY_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';
const OWL_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';

function loadScript(src) {
  const existing = document.querySelector(`script[data-src="${src}"]`);
  if (existing?.dataset.loaded === 'true') return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = existing || document.createElement('script');
    const finish = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.addEventListener('load', finish, { once: true });
    script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
    if (!existing) {
      script.src = src;
      script.dataset.src = src;
      script.async = true;
      document.body.appendChild(script);
    } else if (script.dataset.loaded === 'true') {
      resolve();
    }
  });
}

function fieldValue(form, name) {
  const fields = [...form.querySelectorAll(`[name="${name}"]`)];
  if (fields.length === 0) return '';
  if (fields[0].type === 'radio') {
    return fields.find((field) => field.checked)?.value || '';
  }
  return fields[0].value.trim();
}

function setButtonLabel(button, label) {
  const span = button.querySelector('span');
  if (span) {
    span.textContent = label;
    return;
  }
  const textNode = [...button.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = ` ${label} `;
    return;
  }
  button.textContent = label;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILES = 5;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const FILE_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'pdf', 'mp4']);
const INTENT_FIELDS = {
  led_wall: [
    ['company', 'Company', 160],
    ['projectDescription', 'Project description', 4000],
  ],
  advertise: [
    ['brandName', 'Brand or agency name', 160],
    ['campaignGoals', 'Campaign goals', 4000],
  ],
  property: [['propertyAddress', 'Property address', 300]],
  agency: [['agencyDetails', 'Agency details', 4000]],
  digitize: [['billboardDetails', 'Billboard details', 4000]],
};

function textIssue(value, label, maxLength) {
  const text = value.trim();
  if (!text) {
    const plural = label.includes(' ') && label.endsWith('s');
    return `${label} ${plural ? 'are' : 'is'} required`;
  }
  if (text.length > maxLength) return `${label} must be ${maxLength} characters or fewer`;
  return '';
}

function showFieldError(form, name, message) {
  const field = [...form.querySelectorAll(`[name="${name}"]`)].find((item) => item.type !== 'radio');
  if (!field) return;
  const host = field.parentElement;
  let error = host.querySelector(':scope > .field-error');
  if (!error) {
    error = document.createElement('p');
    error.className = 'field-error';
    host.appendChild(error);
  }
  error.hidden = !message;
  error.textContent = message || '';
  field.classList.toggle('is-invalid', Boolean(message));
  if (message) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
}

function showAttachmentError(form, message) {
  const host = form.querySelector('.dynamic-group.shared-photo');
  if (!host || host.classList.contains('hidden')) return false;
  let error = host.querySelector(':scope > .field-error');
  if (!error) {
    error = document.createElement('p');
    error.className = 'field-error';
    host.appendChild(error);
  }
  error.hidden = !message;
  error.textContent = message || '';
  return true;
}

function clearEnquiryErrors(form) {
  form.querySelectorAll('.field-error').forEach((node) => {
    if (node.id === 'intent-error') return;
    node.hidden = true;
    node.textContent = '';
  });
  form.querySelectorAll('.is-invalid').forEach((node) => {
    node.classList.remove('is-invalid');
    node.removeAttribute('aria-invalid');
  });
  const intentError = form.querySelector('#intent-error');
  if (intentError) {
    intentError.hidden = true;
    intentError.textContent = '';
  }
  form.querySelector('#intent-options')?.classList.remove('is-invalid');
}

function setEnquiryStatus(form, message, kind) {
  const status = form.querySelector('#enquiry-status');
  if (!status) return;
  status.hidden = !message;
  status.textContent = message || '';
  status.classList.toggle('is-error', kind === 'error');
  status.classList.toggle('is-success', kind === 'success');
}

function validateEnquiry(form, files) {
  const errors = {};
  const intent = fieldValue(form, 'intent');
  if (!INTENT_FIELDS[intent]) {
    errors.intent = 'Choose what you are looking for';
    return errors;
  }

  [['firstName', 'First name', 80], ['lastName', 'Last name', 80]].forEach(([name, label, maxLength]) => {
    const issue = textIssue(fieldValue(form, name), label, maxLength);
    if (issue) errors[name] = issue;
  });

  const email = fieldValue(form, 'email');
  if (!email) errors.email = 'Email is required';
  else if (email.length > 180) errors.email = 'Email must be 180 characters or fewer';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address';

  (INTENT_FIELDS[intent] || []).forEach(([name, label, maxLength]) => {
    const issue = textIssue(fieldValue(form, name), label, maxLength);
    if (issue) errors[name] = issue;
  });

  const list = [...(files || [])];
  if (list.length > MAX_FILES) {
    errors.attachments = 'You can upload up to 5 files';
  } else {
    list.some((file) => {
      const extension = file.name.split('.').pop()?.toLowerCase() || '';
      if (!FILE_EXTENSIONS.has(extension)) {
        errors.attachments = 'Use images, PDF, or MP4 files';
        return true;
      }
      if (file.size > MAX_FILE_BYTES) {
        errors.attachments = 'Each file must be 8 MB or smaller';
        return true;
      }
      return false;
    });
  }

  return errors;
}

function applyEnquiryErrors(form, errors) {
  clearEnquiryErrors(form);
  const intentError = form.querySelector('#intent-error');
  if (errors.intent && intentError) {
    intentError.hidden = false;
    intentError.textContent = errors.intent;
    form.querySelector('#intent-options')?.classList.add('is-invalid');
  }
  Object.entries(errors).forEach(([name, message]) => {
    if (name === 'intent' || name === 'attachments') return;
    showFieldError(form, name, message);
  });
  const attachmentShown = errors.attachments ? showAttachmentError(form, errors.attachments) : false;
  const summary = errors.attachments && !attachmentShown
    ? errors.attachments
    : 'Please correct the highlighted fields.';
  setEnquiryStatus(form, summary, 'error');
  const firstInvalid = form.querySelector('.is-invalid, #intent-error:not([hidden]), .field-error:not([hidden])');
  firstInvalid?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export function useSiteEffects(title) {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);

    let cancelled = false;
    const cleanups = [];
    const track = (fn) => cleanups.push(fn);

    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
      const hideLoader = () => {
        if (!pageLoader.classList.contains('loaded')) {
          pageLoader.classList.add('loaded');
          pageLoader.setAttribute('aria-hidden', 'true');
        }
      };
      const loaderTimer = window.setTimeout(hideLoader, 200);
      const loaderFallback = window.setTimeout(hideLoader, 2000);
      track(() => {
        window.clearTimeout(loaderTimer);
        window.clearTimeout(loaderFallback);
      });
    }

    document.querySelectorAll('img[data-fallback]').forEach((img) => {
      const onError = () => {
        if (img.dataset.fallbackApplied === 'true') return;
        img.dataset.fallbackApplied = 'true';
        img.src = img.dataset.fallback;
      };
      img.addEventListener('error', onError);
      track(() => img.removeEventListener('error', onError));
    });

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      const onClick = () => element.classList.toggle('revealed');
      element.addEventListener('click', onClick);
      track(() => element.removeEventListener('click', onClick));
    });

    const mobileMenuEl = document.getElementById('mobile-menu');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuOpenBtn = document.getElementById('mobile-menu-open');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

    if (mobileMenuEl && mobileMenuOpenBtn && mobileMenuPanel && mobileMenuOverlay) {
      let closeTimer;
      const openMobileMenu = () => {
        window.clearTimeout(closeTimer);
        mobileMenuEl.classList.remove('hidden');
        mobileMenuEl.style.display = 'block';
        requestAnimationFrame(() => {
          mobileMenuOverlay.style.opacity = '1';
          mobileMenuPanel.style.transform = 'translateX(0)';
        });
        document.body.style.overflow = 'hidden';
      };
      const closeMobileMenu = () => {
        mobileMenuOverlay.style.opacity = '0';
        mobileMenuPanel.style.transform = 'translateX(100%)';
        closeTimer = window.setTimeout(() => {
          mobileMenuEl.classList.add('hidden');
          mobileMenuEl.style.display = 'none';
        }, 350);
        document.body.style.overflow = '';
      };
      mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
      mobileMenuCloseBtn?.addEventListener('click', closeMobileMenu);
      mobileMenuOverlay.addEventListener('click', closeMobileMenu);
      const menuLinks = [...mobileMenuPanel.querySelectorAll('a')];
      menuLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
      track(() => {
        window.clearTimeout(closeTimer);
        mobileMenuOpenBtn.removeEventListener('click', openMobileMenu);
        mobileMenuCloseBtn?.removeEventListener('click', closeMobileMenu);
        mobileMenuOverlay.removeEventListener('click', closeMobileMenu);
        menuLinks.forEach((link) => link.removeEventListener('click', closeMobileMenu));
        document.body.style.overflow = '';
      });
    }

    const heroSlider = document.getElementById('hero-slider');
    const heroPrev = document.getElementById('hero-prev');
    const heroNext = document.getElementById('hero-next');
    const heroCounter = document.getElementById('hero-counter');
    if (heroSlider && heroPrev && heroNext && heroCounter) {
      const totalSlides = heroSlider.children.length;
      let currentSlide = 0;
      const updateSlider = () => {
        heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        heroCounter.textContent = `0${currentSlide + 1} / 0${totalSlides}`;
      };
      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      };
      const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      };
      const onNext = () => {
        nextSlide();
        resetInterval();
      };
      const onPrev = () => {
        prevSlide();
        resetInterval();
      };
      let slideInterval;
      const resetInterval = () => {
        window.clearInterval(slideInterval);
        slideInterval = window.setInterval(nextSlide, 6000);
      };
      heroNext.addEventListener('click', onNext);
      heroPrev.addEventListener('click', onPrev);
      resetInterval();
      track(() => {
        window.clearInterval(slideInterval);
        heroNext.removeEventListener('click', onNext);
        heroPrev.removeEventListener('click', onPrev);
      });
    }

    const counters = [...document.querySelectorAll('.stat-counter')];
    if (counters.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const counter = entry.target;
          const target = Number(counter.getAttribute('data-target'));
          const increment = target / (2000 / 16);
          let current = 0;
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = String(Math.ceil(current));
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = String(target);
            }
          };
          updateCounter();
          observer.unobserve(counter);
        });
      }, { threshold: 0.1 });
      counters.forEach((counter) => observer.observe(counter));
      track(() => observer.disconnect());
    }

    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      const onScroll = () => {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        const visible = scrollPos > 400;
        backToTopBtn.style.opacity = visible ? '1' : '0';
        backToTopBtn.style.transform = visible ? 'translateY(0)' : 'translateY(1rem)';
        backToTopBtn.style.pointerEvents = visible ? 'auto' : 'none';
      };
      const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
      window.addEventListener('scroll', onScroll, { passive: true });
      backToTopBtn.addEventListener('click', onClick);
      track(() => {
        window.removeEventListener('scroll', onScroll);
        backToTopBtn.removeEventListener('click', onClick);
      });
    }

    document.querySelectorAll('.gsap-fade-up').forEach((element) => {
      gsap.fromTo(element, { y: 50, opacity: 0 }, {
        scrollTrigger: { trigger: element, start: 'top 85%' },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    document.querySelectorAll('.stagger-section').forEach((section) => {
      const cards = section.querySelectorAll('.stagger-card');
      if (cards.length === 0) return;
      gsap.fromTo(cards, { y: 50, opacity: 0 }, {
        scrollTrigger: { trigger: section, start: 'top 80%' },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    });

    const pinnedSection = document.getElementById('gsap-pinned-stack');
    const stackItems = gsap.utils.toArray('.stack-item');
    if (pinnedSection && stackItems.length >= 5) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinnedSection,
          pin: true,
          start: 'center center',
          end: '+=2500',
          scrub: 1,
        },
      });
      timeline
        .to(stackItems[1], { y: 0, duration: 1 })
        .to(stackItems[0], { scale: 0.95, opacity: 0.5, duration: 1 }, '<')
        .to(stackItems[2], { y: 0, duration: 1 })
        .to(stackItems[1], { scale: 0.95, opacity: 0.5, duration: 1 }, '<')
        .to(stackItems[3], { y: 0, duration: 1 })
        .to(stackItems[2], { scale: 0.95, opacity: 0.5, duration: 1 }, '<')
        .to(stackItems[4], { y: 0, duration: 1 })
        .to(stackItems[3], { scale: 0.95, opacity: 0.5, duration: 1 }, '<')
        .to({}, { duration: 0.5 });
    }

    const nextStepsSection = document.getElementById('next-steps-section');
    if (nextStepsSection) {
      const cards = nextStepsSection.querySelectorAll('.grid > div');
      gsap.set(cards, { y: 60, opacity: 0 });
      ScrollTrigger.create({
        trigger: nextStepsSection,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(cards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' });
        },
      });
    }

    const filterButtons = [...document.querySelectorAll('.filter-btn')];
    const portfolioItems = [...document.querySelectorAll('.portfolio-item')];
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
      const onFilter = (event) => {
        const button = event.currentTarget;
        filterButtons.forEach((item) => {
          item.classList.remove('bg-[#0B1E36]', 'text-white');
          item.classList.add('text-gray-500', 'hover:text-[#071521]', 'hover:bg-gray-100');
        });
        button.classList.add('bg-[#0B1E36]', 'text-white');
        button.classList.remove('text-gray-500', 'hover:text-[#071521]', 'hover:bg-gray-100');
        const filterValue = button.getAttribute('data-filter');
        portfolioItems.forEach((item) => {
          const matches = filterValue === 'all' || item.getAttribute('data-category') === filterValue;
          item.style.display = matches ? 'block' : 'none';
        });
        if (window.innerWidth < 768) {
          button.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      };
      filterButtons.forEach((button) => button.addEventListener('click', onFilter));
      track(() => filterButtons.forEach((button) => button.removeEventListener('click', onFilter)));
    }

    const testiSlider = document.getElementById('testimonial-slider');
    const testiPrev = document.getElementById('testi-prev');
    const testiNext = document.getElementById('testi-next');
    if (testiSlider && testiPrev && testiNext) {
      let currentTestiSlide = 0;
      const slides = testiSlider.children;
      const maxSlides = () => {
        if (window.innerWidth >= 1024) return slides.length - 3;
        if (window.innerWidth >= 768) return slides.length - 2;
        return slides.length - 1;
      };
      const updateTestiSlider = () => {
        const limit = maxSlides();
        if (currentTestiSlide > limit) currentTestiSlide = limit;
        if (currentTestiSlide < 0) currentTestiSlide = 0;
        let slidePercentage = 100;
        if (window.innerWidth >= 1024) slidePercentage = 33.333333;
        else if (window.innerWidth >= 768) slidePercentage = 50;
        testiSlider.style.transform = `translateX(-${currentTestiSlide * slidePercentage}%)`;
      };
      const onNext = () => {
        if (currentTestiSlide < maxSlides()) {
          currentTestiSlide += 1;
          updateTestiSlider();
        }
      };
      const onPrev = () => {
        if (currentTestiSlide > 0) {
          currentTestiSlide -= 1;
          updateTestiSlider();
        }
      };
      testiNext.addEventListener('click', onNext);
      testiPrev.addEventListener('click', onPrev);
      window.addEventListener('resize', updateTestiSlider);
      track(() => {
        testiNext.removeEventListener('click', onNext);
        testiPrev.removeEventListener('click', onPrev);
        window.removeEventListener('resize', updateTestiSlider);
      });
    }

    const citySlider = document.getElementById('city-slider');
    const cityPrev = document.getElementById('city-prev');
    const cityNext = document.getElementById('city-next');
    if (citySlider && cityPrev && cityNext) {
      let currentCitySlide = 0;
      const citySlides = citySlider.children;
      const maxSlides = () => {
        if (window.innerWidth >= 1024) return citySlides.length - 4;
        if (window.innerWidth >= 768) return citySlides.length - 2;
        return citySlides.length - 1;
      };
      const updateCitySlider = () => {
        const limit = maxSlides();
        if (currentCitySlide > limit) currentCitySlide = limit;
        if (currentCitySlide < 0) currentCitySlide = 0;
        let slidePercentage = 100;
        if (window.innerWidth >= 1024) slidePercentage = 25;
        else if (window.innerWidth >= 768) slidePercentage = 50;
        for (let index = 0; index < citySlides.length; index += 1) {
          citySlides[index].style.flex = `0 0 ${slidePercentage}%`;
          citySlides[index].style.maxWidth = `${slidePercentage}%`;
          citySlides[index].style.paddingLeft = '12px';
          citySlides[index].style.paddingRight = '12px';
        }
        citySlider.style.transform = `translateX(-${currentCitySlide * slidePercentage}%)`;
      };
      const onNext = () => {
        if (currentCitySlide < maxSlides()) {
          currentCitySlide += 1;
          updateCitySlider();
        }
      };
      const onPrev = () => {
        if (currentCitySlide > 0) {
          currentCitySlide -= 1;
          updateCitySlider();
        }
      };
      updateCitySlider();
      cityNext.addEventListener('click', onNext);
      cityPrev.addEventListener('click', onPrev);
      window.addEventListener('resize', updateCitySlider);
      track(() => {
        cityNext.removeEventListener('click', onNext);
        cityPrev.removeEventListener('click', onPrev);
        window.removeEventListener('resize', updateCitySlider);
      });
    }

    const installTrack = document.getElementById('installations-track');
    const installPrev = document.getElementById('installations-prev');
    const installNext = document.getElementById('installations-next');
    const installCounter = document.getElementById('installations-counter');
    const installProgress = document.getElementById('installations-progress');
    if (installTrack && installPrev && installNext) {
      const scrollAmount = () => {
        const card = installTrack.querySelector('.installation-card');
        return card ? card.offsetWidth + 24 : 400;
      };
      const onNext = () => {
        const maxScroll = installTrack.scrollWidth - installTrack.clientWidth;
        if (installTrack.scrollLeft >= maxScroll - 10) {
          installTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          installTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        }
      };
      const onPrev = () => {
        const maxScroll = installTrack.scrollWidth - installTrack.clientWidth;
        if (installTrack.scrollLeft <= 10) {
          installTrack.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          installTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        }
      };
      const onScroll = () => {
        const maxScroll = installTrack.scrollWidth - installTrack.clientWidth;
        if (maxScroll <= 0) return;
        const progress = Math.min(Math.max(installTrack.scrollLeft / maxScroll, 0), 1);
        if (installProgress) {
          installProgress.style.width = `${16.66 + (progress * (100 - 16.66))}%`;
        }
        if (installCounter) {
          const total = installTrack.querySelectorAll('.installation-card').length;
          const current = Math.min(Math.round(progress * (total - 1)) + 1, total);
          installCounter.textContent = `0${current} / 0${total}`;
        }
      };
      installNext.addEventListener('click', onNext);
      installPrev.addEventListener('click', onPrev);
      installTrack.addEventListener('scroll', onScroll, { passive: true });
      track(() => {
        installNext.removeEventListener('click', onNext);
        installPrev.removeEventListener('click', onPrev);
        installTrack.removeEventListener('scroll', onScroll);
      });
    }

    document.querySelectorAll('.screen-search-input').forEach((input) => {
      const onInput = (event) => {
        const query = event.target.value.toLowerCase().trim();
        let parent = input.parentElement;
        while (parent && !parent.querySelector('.screens-directory-scroll')) {
          parent = parent.parentElement;
        }
        const cards = parent?.querySelectorAll('.screen-item') || [];
        cards.forEach((card) => {
          const location = (card.getAttribute('data-location') || card.textContent).toLowerCase();
          card.style.display = !query || location.includes(query) ? 'flex' : 'none';
        });
      };
      input.addEventListener('input', onInput);
      track(() => input.removeEventListener('input', onInput));
    });

    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
      const radios = [...leadForm.querySelectorAll('input[name="intent"]')];
      const step2 = document.getElementById('step-2');
      const dynamicGroups = [...leadForm.querySelectorAll('.dynamic-group')];
      const onIntent = (event) => {
        if (!event.target.checked || !step2) return;
        step2.classList.remove('hidden');
        step2.classList.add('grid');
        dynamicGroups.forEach((group) => {
          group.classList.remove('grid', 'block');
          group.classList.add('hidden');
        });
        const selected = event.target.value;
        const targetGroup = leadForm.querySelector(`.dynamic-group.${selected}`);
        if (targetGroup) {
          targetGroup.classList.remove('hidden');
          targetGroup.classList.add('grid');
        }
        if (['led_wall', 'property', 'digitize', 'advertise'].includes(selected)) {
          const sharedPhoto = leadForm.querySelector('.dynamic-group.shared-photo');
          sharedPhoto?.classList.remove('hidden');
          sharedPhoto?.classList.add('block');
        }
        const intentError = leadForm.querySelector('#intent-error');
        if (intentError) {
          intentError.hidden = true;
          intentError.textContent = '';
        }
        leadForm.querySelector('#intent-options')?.classList.remove('is-invalid');
        dynamicGroups.forEach((group) => {
          if (!group.classList.contains('hidden')) return;
          group.querySelectorAll('input, textarea').forEach((field) => {
            field.value = '';
          });
          const uploadLabel = group.querySelector('.cursor-pointer p');
          if (uploadLabel) uploadLabel.textContent = 'Drag & drop files or browse';
          group.querySelectorAll('.field-error, .is-invalid').forEach((node) => {
            node.classList.remove('is-invalid');
            node.removeAttribute('aria-invalid');
            if (node.classList.contains('field-error')) {
              node.hidden = true;
              node.textContent = '';
            }
          });
        });
      };
      radios.forEach((radio) => radio.addEventListener('change', onIntent));

      const dropzone = leadForm.querySelector('.dynamic-group.shared-photo .cursor-pointer');
      let fileInput;
      if (dropzone) {
        fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = 'attachments';
        fileInput.multiple = true;
        fileInput.accept = 'image/jpeg,image/png,image/webp,image/gif,.pdf,.mp4';
        fileInput.className = 'hidden';
        fileInput.id = 'lead-attachments';
        dropzone.appendChild(fileInput);
        const openPicker = () => fileInput.click();
        const stopBubble = (event) => event.stopPropagation();
        const onFiles = () => {
          const label = dropzone.querySelector('p');
          if (label) {
            const count = fileInput.files?.length || 0;
            label.textContent = count > 0 ? `${count} file${count === 1 ? '' : 's'} selected` : 'Drag & drop files or browse';
          }
          showAttachmentError(leadForm, '');
        };
        dropzone.addEventListener('click', openPicker);
        fileInput.addEventListener('click', stopBubble);
        fileInput.addEventListener('change', onFiles);
        track(() => {
          dropzone.removeEventListener('click', openPicker);
          fileInput.removeEventListener('click', stopBubble);
          fileInput.removeEventListener('change', onFiles);
          fileInput.remove();
        });
      }

      const submitButton = document.getElementById('enquiry-submit');
      const originalLabel = submitButton?.querySelector('span')?.textContent || 'Submit Enquiry';
      const onFieldInput = (event) => {
        const name = event.target?.name;
        if (!name || name === 'attachments') return;
        showFieldError(leadForm, name, '');
      };
      const onSubmit = async (event) => {
        event.preventDefault();
        if (!submitButton) return;
        const errors = validateEnquiry(leadForm, fileInput?.files);
        if (Object.keys(errors).length > 0) {
          applyEnquiryErrors(leadForm, errors);
          setButtonLabel(submitButton, originalLabel);
          return;
        }

        const formData = new FormData();
        ['intent', 'firstName', 'lastName', 'email', 'company', 'projectDescription', 'brandName', 'campaignGoals', 'propertyAddress', 'agencyDetails', 'billboardDetails']
          .forEach((name) => formData.append(name, fieldValue(leadForm, name)));
        if (fileInput?.files) {
          [...fileInput.files].forEach((file) => formData.append('attachments', file));
        }

        clearEnquiryErrors(leadForm);
        setEnquiryStatus(leadForm, '', '');
        submitButton.disabled = true;
        setButtonLabel(submitButton, 'Submitting...');
        try {
          await createEnquiry(formData);
          setButtonLabel(submitButton, 'Enquiry received');
          setEnquiryStatus(leadForm, 'Enquiry received. We will reply by email.', 'success');
          leadForm.reset();
          const fileLabel = dropzone?.querySelector('p');
          if (fileLabel) fileLabel.textContent = 'Drag & drop files or browse';
          if (step2) {
            step2.classList.add('hidden');
            step2.classList.remove('grid');
          }
          dynamicGroups.forEach((group) => {
            group.classList.add('hidden');
            group.classList.remove('grid', 'block');
          });
        } catch (error) {
          if (error.fields) applyEnquiryErrors(leadForm, error.fields);
          else setEnquiryStatus(leadForm, error.message || 'Unable to submit', 'error');
          setButtonLabel(submitButton, originalLabel);
        } finally {
          submitButton.disabled = false;
        }
      };
      leadForm.addEventListener('input', onFieldInput);
      leadForm.addEventListener('submit', onSubmit);
      track(() => {
        radios.forEach((radio) => radio.removeEventListener('change', onIntent));
        leadForm.removeEventListener('input', onFieldInput);
        leadForm.removeEventListener('submit', onSubmit);
      });
    }

    const openDealModalBtn = document.getElementById('open-deal-modal-btn');
    const dealModal = document.getElementById('deal-modal');
    const dealModalBackdrop = document.getElementById('deal-modal-backdrop');
    const dealModalCloseBtn = document.getElementById('deal-modal-close-btn');
    const dealSuccessCloseBtn = document.getElementById('deal-success-close-btn');
    const dealForm = document.getElementById('deal-registration-form');
    const dealSuccess = document.getElementById('deal-modal-success');
    if (dealModal) {
      let closeTimer;
      const openDealModal = () => {
        window.clearTimeout(closeTimer);
        dealModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => dealModal.classList.add('is-active'));
      };
      const closeDealModal = () => {
        dealModal.classList.remove('is-active');
        closeTimer = window.setTimeout(() => {
          dealModal.style.display = 'none';
          document.body.style.overflow = '';
        }, 300);
      };
      const onKeyDown = (event) => {
        if (event.key === 'Escape' && dealModal.style.display === 'flex') closeDealModal();
      };
      openDealModalBtn?.addEventListener('click', openDealModal);
      dealModalCloseBtn?.addEventListener('click', closeDealModal);
      dealModalBackdrop?.addEventListener('click', closeDealModal);
      document.addEventListener('keydown', onKeyDown);

      const submitBtn = document.getElementById('deal-submit-btn');
      const originalHtml = submitBtn?.innerHTML || '';
      const onDealSubmit = async (event) => {
        event.preventDefault();
        if (!dealForm || !submitBtn) return;
        const deal = Object.fromEntries(new FormData(dealForm).entries());
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Submitting Registration...';
        try {
          await createDeal(deal);
          dealForm.style.display = 'none';
          dealSuccess?.classList.remove('hidden');
        } catch (error) {
          submitBtn.innerHTML = `<span>${error.message || 'Unable to submit'}</span>`;
          window.setTimeout(() => {
            submitBtn.innerHTML = originalHtml;
          }, 2600);
        } finally {
          submitBtn.disabled = false;
          if (dealSuccess && !dealSuccess.classList.contains('hidden')) {
            submitBtn.innerHTML = originalHtml;
          }
        }
      };
      dealForm?.addEventListener('submit', onDealSubmit);
      const onSuccessClose = () => {
        closeDealModal();
        window.setTimeout(() => {
          dealForm?.reset();
          if (dealForm) dealForm.style.display = 'flex';
          dealSuccess?.classList.add('hidden');
          if (submitBtn) submitBtn.innerHTML = originalHtml;
        }, 350);
      };
      dealSuccessCloseBtn?.addEventListener('click', onSuccessClose);
      track(() => {
        window.clearTimeout(closeTimer);
        openDealModalBtn?.removeEventListener('click', openDealModal);
        dealModalCloseBtn?.removeEventListener('click', closeDealModal);
        dealModalBackdrop?.removeEventListener('click', closeDealModal);
        document.removeEventListener('keydown', onKeyDown);
        dealForm?.removeEventListener('submit', onDealSubmit);
        dealSuccessCloseBtn?.removeEventListener('click', onSuccessClose);
        document.body.style.overflow = '';
      });
    }

    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
      loadScript(JQUERY_SRC)
        .then(() => loadScript(OWL_SRC))
        .then(() => {
          if (cancelled || !window.jQuery?.fn?.owlCarousel) return;
          const $ = window.jQuery;
          const $carousel = $('.testimonials-carousel');
          $carousel.owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 2 },
            },
          });
          const prev = document.querySelector('.testi-prev');
          const next = document.querySelector('.testi-next');
          const onPrev = () => $carousel.trigger('prev.owl.carousel');
          const onNext = () => $carousel.trigger('next.owl.carousel');
          prev?.addEventListener('click', onPrev);
          next?.addEventListener('click', onNext);
          track(() => {
            prev?.removeEventListener('click', onPrev);
            next?.removeEventListener('click', onNext);
            $carousel.trigger('destroy.owl.carousel');
          });
        })
        .catch(() => {});
    }

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
      gsap.killTweensOf('*');
    };
  }, [title]);
}
