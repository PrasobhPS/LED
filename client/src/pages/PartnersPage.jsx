import React from 'react';
import { Link } from 'react-router-dom';

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

const BRANDS = [
  {
    id: 'novastar',
    name: 'NovaStar',
    content: (
      <svg className="h-6 sm:h-7 w-auto max-w-[130px]" viewBox="0 0 170 36" fill="none">
        <path d="M4 28V6h5.4l9.8 14.2V6h4.8v22h-5L9.2 13.6V28H4z" fill="#0066CC" />
        <path d="M37 5.8c6.6 0 11.5 4.8 11.5 11.2s-4.9 11.2-11.5 11.2-11.5-4.8-11.5-11.2S30.4 5.8 37 5.8zm0 4.2c-4 0-6.8 3.2-6.8 7s2.8 7 6.8 7 6.8-3.2 6.8-7-2.8-7-6.8-7z" fill="#0066CC" />
        <path d="M37 13.5l1.2 3.2 3.3.3-2.5 2.1.8 3.2-2.8-1.7-2.8 1.7.8-3.2-2.5-2.1 3.3-.3L37 13.5z" fill="#00A3E0" />
        <path d="M51 6h5.2l5.6 15.5L67.4 6h5.2L64.8 28h-4.8L51 6z" fill="#0066CC" />
        <path d="M79 6h5l7.5 22h-4.8l-1.8-5.2h-7.2l-1.8 5.2h-4.4L79 6zm4.8 13l-2.4-7.2-2.4 7.2h4.8z" fill="#0066CC" />
        <path d="M96 23.5c1.4.9 3 1.4 4.8 1.4 2.2 0 3.6-1 3.6-2.4 0-3.6-8.8-1.5-8.8-7.8 0-3 2.6-5.2 6.8-5.2 2 0 3.8.5 5.2 1.4l-1.2 3.2c-1.2-.7-2.6-1.1-4-1.1-1.8 0-3 .8-3 2 0 3.4 8.8 1.4 8.8 7.7 0 3.3-2.6 5.5-7.2 5.5-2.4 0-4.6-.6-6.2-1.7l1.4-3z" fill="#0066CC" />
        <path d="M109 9.6V6h13.8v3.6h-4.6V28h-4.6V9.6H109z" fill="#0066CC" />
        <path d="M127 6h5l7.5 22h-4.8l-1.8-5.2h-7.2l-1.8 5.2h-4.4L127 6zm4.8 13l-2.4-7.2-2.4 7.2h4.8z" fill="#0066CC" />
        <path d="M142 6h7.8c4.2 0 7 2.2 7 5.8 0 2.8-1.6 4.5-3.8 5.3l4.6 10.9h-4.9l-4.1-9.6h-2V28h-4.6V6zm7.2 8.6c1.8 0 3-1 3-2.6 0-1.6-1.2-2.6-3-2.6h-2.6v5.2h2.6z" fill="#0066CC" />
      </svg>
    ),
  },
  {
    id: 'hikvision',
    name: 'Hikvision',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', fontWeight: 900, fontStyle: 'italic', fontFamily: 'sans-serif', letterSpacing: '-0.02em' }}>
        <span style={{ color: '#231F20' }}>HIK</span>
        <span style={{ color: '#D71920' }}>VISION</span>
      </div>
    ),
  },
  {
    id: 'unilumin',
    name: 'Unilumin',
    content: (
      <span style={{ color: '#0065B3', fontWeight: 900, fontStyle: 'italic', fontSize: '23px', letterSpacing: '-0.02em', fontFamily: 'sans-serif' }}>
        Unilumin
      </span>
    ),
  },
  {
    id: 'linsn',
    name: 'Linsn',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 5px)', gap: '2px', width: '19px', height: '19px' }}>
          <div style={{ background: '#00A3E0', borderRadius: '1px' }} />
          <div style={{ background: '#10B981', borderRadius: '1px' }} />
          <div style={{ background: '#0072CE', borderRadius: '1px' }} />
          <div style={{ background: '#00A3E0', borderRadius: '1px' }} />
          <div />
          <div />
          <div style={{ background: '#10B981', borderRadius: '1px' }} />
          <div style={{ background: '#00A3E0', borderRadius: '1px' }} />
          <div style={{ background: '#0072CE', borderRadius: '1px' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ color: '#1E293B', fontWeight: 800, fontSize: '16px', letterSpacing: '0.02em' }}>
            linsn
          </span>
          <span style={{ color: '#64748B', fontWeight: 600, fontSize: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            LED Technology
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'dahua',
    name: 'Dahua',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        <svg style={{ width: '22px', height: '22px', flexShrink: 0 }} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="#D71920" strokeWidth="3" strokeDasharray="55 25" />
          <circle cx="16" cy="16" r="5.5" fill="#D71920" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ color: '#D71920', fontWeight: 900, fontSize: '17px', letterSpacing: '-0.02em' }}>
            alhua
          </span>
          <span style={{ color: '#475569', fontWeight: 700, fontSize: '7.5px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Technology
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'compunet',
    name: 'Compunet Digital',
    content: (
      <img
        src="/images/partners/compunet.png"
        alt="Compunet Digital"
        className="partners-client-logo"
      />
    ),
  },
  {
    id: 'absen',
    name: 'Absen',
    content: (
      <span style={{ color: '#E60012', fontWeight: 900, fontStyle: 'italic', fontSize: '23px', letterSpacing: '-0.02em', fontFamily: 'sans-serif' }}>
        Absen
      </span>
    ),
  },
  {
    id: 'colorlight',
    name: 'Colorlight',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
        <div style={{ width: '15px', height: '15px', borderRadius: '3px', background: '#0085CA' }} />
        <span style={{ color: '#002B49', fontWeight: 900, fontSize: '18px', letterSpacing: '-0.02em', fontFamily: 'sans-serif' }}>
          Colorlight
        </span>
      </div>
    ),
  },
];

const CLIENTELE = [
  {
    name: 'Alpha Academy',
    src: '/images/partners/alpha.png',
  },
  {
    name: 'Indian Overseas Bank',
    src: '/images/partners/indian-overseas-bank.png',
  },
  {
    name: 'Thalassery Co-operative Rural Bank Ltd.',
    src: '/images/partners/rural-cooperative-bank.svg',
  },
  {
    name: 'susi PERFUME LAB',
    src: '/images/partners/susi-perfume.png',
  },
  {
    name: 'Moon Hut',
    src: '/images/partners/meen-hut.jpg',
  },
  {
    name: 'Compunet Digital',
    src: '/images/partners/compunet.png',
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
            src="/images/work/vara-alath-tower.png"
            alt="Vara Alath Tower LED screen in Alathur"
            className="partners-hero-img"
            style={{ objectPosition: 'center 22%' }}
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
                  src="/images/work/susi-fragrances.png"
                  alt="SUSI Fragrances storefront"
                  className="partners-main-img"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              <div className="partners-overlap-card">
                <img
                  src="/images/work/thx-mobiles.png"
                  alt="THX Premium Mobiles storefront"
                  className="partners-overlap-img"
                  style={{ objectPosition: 'center 40%' }}
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
              We partner with leading brands and trusted clients to deliver reliable and high-performance LED solutions across industries.
            </p>
          </div>

          {/* Sub-block 1: Brands we work with Slider */}
          <div style={{ marginBottom: '3.5rem' }}>
            <PartnerCardSlider
              title="Brands we work with"
              linkText="View all brands"
              linkTo="/contact"
              items={BRANDS}
              renderItem={(brand) => brand.content}
            />
          </div>

          {/* Sub-block 2: Clientele Slider */}
          <div>
            <PartnerCardSlider
              title="Clientele"
              subtitle="Organizations where screens from our work are already installed."
              linkText="View all clients"
              linkTo="/contact"
              items={CLIENTELE}
              renderItem={(client) => (
                <img
                  src={client.src}
                  alt={client.name}
                  className="partners-client-logo"
                />
              )}
            />
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="partners-cta-sec">
        <div className="partners-cta-media">
          <img
            src="/images/work/brighter-tomorrow.png"
            alt="Architectural LED wall, A Brighter Tomorrow"
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
