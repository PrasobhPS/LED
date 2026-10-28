import React from 'react';
import { Link } from 'react-router-dom';
import { clientLogos } from '../data/clients';

const CAPABILITIES = [
  {
    title: 'Fine-pitch modules',
    text: 'Indoor walls for spaces where people stand close to the screen.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth={1.8} />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="16" cy="12" r="1" fill="currentColor" />
        <circle cx="8" cy="16" r="1" fill="currentColor" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Cabinet hardware',
    text: 'Frames, locks and the metal that holds a wall together.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Video processors',
    text: 'Processing that holds a wall together as one picture.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Power supplies',
    text: 'Power sized for the wall, the brightness and the site.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Calibration systems',
    text: 'Color and brightness matched from cabinet to cabinet.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Mounting steel',
    text: 'Structure for walls, building façades and billboard conversions.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16M8 4v16m8-16v16" />
      </svg>
    ),
  },
  {
    title: 'Outdoor cabinets',
    text: 'Weather-ready cabinets for façades, roadsides and open sites.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 15a4 4 0 004 4h10a5 5 0 001.5-9.8A6.5 6.5 0 007 10.5 4 4 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Signal cable',
    text: 'Cabling between the cabinets, the processor and the source.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

function PartnerCardSlider({ title, subtitle, linkText, linkTo, items, renderItem }) {
  const trackRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const getScrollAmount = () => {
    const track = trackRef.current;
    if (!track) return 260;
    const card = track.firstElementChild;
    return card ? card.offsetWidth + 18 : 260;
  };

  const scrollNext = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 12) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft <= 12) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  // Gentle auto-slide every 4 seconds when user is not hovering
  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="partners-slider-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="partners-subrow-head">
        <div className="partners-subrow-info">
          <h3 className="partners-subrow-title">{title}</h3>
          {subtitle && <p className="partners-subrow-subtitle">{subtitle}</p>}
          {linkTo && (
            <Link to={linkTo} className="partners-view-link partners-view-link-mobile">
              <span>{linkText}</span>
              <svg style={{ width: '15px', height: '15px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          )}
        </div>
        <div className="partners-subrow-controls">
          {/* Navigation Arrows */}
          <div className="partners-slider-arrows">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={`Previous ${title}`}
              className="partners-arrow-btn"
            >
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label={`Next ${title}`}
              className="partners-arrow-btn"
            >
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {linkTo && (
            <Link to={linkTo} className="partners-view-link partners-view-link-desktop">
              <span>{linkText}</span>
              <svg style={{ width: '15px', height: '15px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Slider Track */}
      <div ref={trackRef} className="partners-slider-track">
        {items.map((item, index) => (
          <div key={item.id || item.name || index} className="partners-slider-item">
            <div className="partners-logo-box">
              {renderItem(item, index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <div className="partners-page-root">
      {/* 1. HERO SECTION */}
      <section className="partners-hero">
        <div className="partners-hero-media">
          <img
            src="/images/work/susi-fragrances.png"
            alt="SUSI Fragrances storefront, a client installation"
            className="partners-hero-img"
            style={{ objectPosition: 'center 32%' }}
          />
        </div>
        <div className="partners-hero-overlay" />
        <div className="partners-hero-container">
          <div className="partners-eyebrow">Our Partners</div>
          <h1 className="partners-hero-title">
            Technology, supply<br />
            and the people we <span className="accent-build">build for.</span>
          </h1>
          <p className="partners-hero-desc">
            The display technology, the supply behind an installation, and the brands and clients on the walls we deliver.
          </p>
        </div>
      </section>

      {/* 2. HOW A WALL IS BUILT SECTION */}
      <section className="partners-build-sec">
        <div className="partners-build-container">
          <div>
            <div className="partners-eyebrow">How a wall is built</div>
            <h2 className="partners-section-title">
              Technology partners and suppliers.
            </h2>
            <p className="partners-section-intro">
              We work with trusted technology partners and suppliers who help us deliver world-class LED wall solutions.
            </p>
            <div className="partners-capabilities-grid">
              {CAPABILITIES.map((item) => (
                <div key={item.title} className="partner-cap-card">
                  <div className="partner-cap-icon-box">{item.icon}</div>
                  <div>
                    <h3 className="partner-cap-name">{item.title}</h3>
                    <p className="partner-cap-desc">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="partners-visual-col">
            <div className="partners-pill-badge">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017a2 2 0 01-1.789-1.106l-3.5-7A2 2 0 017.746 10H10m4 0V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v6m5 0H9" />
              </svg>
              <span>Trusted technology. Lasting partnerships.</span>
            </div>
            <div className="partners-stacked-wrap">
              <div className="partners-stacked-backdrop" />
              <div className="partners-main-card">
                <img
                  src="/images/work/vara-alath-tower.png"
                  alt="Nila Advertising outdoor LED screen"
                  className="partners-main-img"
                  style={{ objectPosition: 'center 22%' }}
                />
              </div>
              <div className="partners-overlap-card">
                <img
                  src="/images/work/kanju-hut.png"
                  alt="Kanji Hut illuminated storefront"
                  className="partners-overlap-img"
                  style={{ objectPosition: 'center 28%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ON THE WALL SECTION */}
      <section className="partners-wall-sec">
        <div className="partners-wall-container">
          <div style={{ maxWidth: '640px', marginBottom: '3.25rem' }}>
            <div className="partners-eyebrow">On the wall</div>
            <h2 className="partners-section-title">
              Brands we work with,<br />
              and the clientele behind them.
            </h2>
            <p className="partners-section-intro" style={{ marginBottom: 0 }}>
              Logos from clients whose screens we have supplied and installed.
            </p>
          </div>

          <PartnerCardSlider
            title="Brands and clientele"
            subtitle="Organizations where screens from our work are already installed."
            linkText="Get an LED Wall"
            linkTo="/contact"
            items={clientLogos}
            renderItem={(client) => (
              <img
                src={client.src}
                alt={client.name}
                className="partners-client-logo"
              />
            )}
          />
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="partners-cta-sec">
        <div className="partners-cta-media">
          <img
            src="/images/work/aakash-edappally.png"
            alt="Moulavi Books Stationery billboard"
            className="partners-cta-img"
          />
          <div className="partners-cta-vignette" />
        </div>
        <div className="partners-cta-content">
          <div className="partners-eyebrow">Next Step</div>
          <h2 className="partners-cta-title">Have a project in mind?</h2>
          <p className="partners-cta-desc">
            Share the location, size and how you want the display to be used. Every enquiry uses the same LED wall form.
          </p>
          <div className="partners-cta-features-list">
            {/* 1. Consultation */}
            <div className="partners-cta-feat-row">
              <div className="partners-cta-feat-icon">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span>Consultation</span>
            </div>

            {/* 2. Design */}
            <div className="partners-cta-feat-row">
              <div className="partners-cta-feat-icon">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <span>Design</span>
            </div>

            {/* 3. Installation */}
            <div className="partners-cta-feat-row">
              <div className="partners-cta-feat-icon">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx="12" cy="12" r="3" strokeWidth={2} />
                </svg>
              </div>
              <span>Installation</span>
            </div>

            {/* 4. Support */}
            <div className="partners-cta-feat-row">
              <div className="partners-cta-feat-icon">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span>Support</span>
            </div>
          </div>

          <div className="partners-cta-actions">
            <Link to="/contact" className="partners-pill-btn">
              <span>Get an LED Wall</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
