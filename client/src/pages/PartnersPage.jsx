import { Link } from 'react-router-dom';
import { useSiteEffects } from '../hooks/useSiteEffects';

export default function PartnersPage() {
  useSiteEffects("Partnerships | SANS GLOWMETRIC");
  return (
<div>
  {/* Navbar */}
  <nav className="w-full bg-white border-b border-gray-100 py-4 fixed top-0 z-[100]">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img src="/images/sanspng-bluetheme.png" alt="SANS GLOWMETRIC" className="h-8 w-auto object-contain shrink-0" style={{height: 32, maxHeight: 32, width: 'auto'}} />
      </Link>
      {/* Center Links */}
      <div className="hidden lg:flex gap-8 text-[13px] font-medium text-gray-500">
        <Link to="/about" className="hover:text-[#071521] transition-colors pb-1">About</Link>
        <Link to="/advertise" className="hover:text-[#071521] transition-colors pb-1">Advertise</Link>
        <Link to="/network" className="hover:text-[#071521] transition-colors pb-1">Our Screens</Link>
        <Link to="/projects" className="hover:text-[#071521] transition-colors pb-1">Projects</Link>
        <Link to="/partners" className="text-[#071521] border-b-2 border-[#168BEB] pb-1">Partners</Link>
        <Link to="/contact" className="hover:text-[#071521] transition-colors pb-1">Contact</Link>
      </div>
      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/contact" className="px-5 py-2 rounded-lg text-[13px] font-semibold text-[#071521] border border-gray-300 hover:border-[#071521] transition-colors">
          Get an LED Wall
        </Link>
        <Link to="/advertise" className="px-6 py-2 rounded-lg text-[13px] font-semibold text-white bg-[#071521] hover:bg-[#0D2942] transition-colors">
          Advertise
        </Link>
      </div>
      {/* Mobile & Tablet Controls (lg:hidden) */}
      <div className="flex items-center gap-2.5 lg:hidden shrink-0">
        <Link to="/contact" className="whitespace-nowrap px-5 py-2.5 rounded-lg text-[12px] font-semibold text-[#071521] border border-gray-200 hover:border-[#071521] transition-colors bg-gray-50 shrink-0">
          Get Quote
        </Link>
        <button id="mobile-menu-open" className="p-2 rounded-md text-[#071521] hover:text-[#168BEB] hover:bg-gray-100 transition-colors focus:outline-none shrink-0" aria-label="Open Navigation Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  {/* Mobile Menu Drawer */}
  <div id="mobile-menu" className="fixed inset-0 hidden" style={{display: 'none', zIndex: 9999}}>
    <div id="mobile-menu-overlay" className="absolute inset-0 bg-[#071521]/80 backdrop-blur-md opacity-0 transition-opacity duration-300" />
    <div id="mobile-menu-panel" className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 flex flex-col" style={{transform: 'translateX(100%)', zIndex: 10000}}>
      {/* Header */}
      <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/60">
        <img src="/images/sanspng-bluetheme.png" alt="Logo" className="h-6 object-contain" style={{height: 26, maxHeight: 26, width: 'auto'}} />
        <button id="mobile-menu-close" className="p-2 rounded-full text-gray-500 hover:text-[#071521] hover:bg-gray-200/50 transition-colors" aria-label="Close Navigation Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* City / Status Pill */}
      <div className="px-5 pt-4 pb-1">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#071521]/5 rounded-lg text-[11px] font-semibold text-[#071521]">
          <span className="w-2 h-2 rounded-full bg-[#168BEB] animate-pulse" />
          <span>Columbus, OH • Nationwide Network</span>
        </div>
      </div>
      {/* Nav Links */}
      <div className="flex-grow overflow-y-auto px-5 py-4 flex flex-col gap-2 text-[15px] font-medium text-[#071521]">
        <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">About</Link>
        <Link to="/advertise" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Advertise</Link>
        <Link to="/network" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Our Screens</Link>
        <Link to="/projects" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Projects</Link>
        <Link to="/partners" className="mobile-nav-current flex items-center justify-between font-bold rounded-lg">
          <span>Partners</span>
          <span className="mobile-nav-current-badge">Current</span>
        </Link>
        <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Contact</Link>
      </div>
      {/* CTAs */}
      <div className="p-5 border-t border-gray-100 bg-gray-50/80 flex flex-col gap-2.5">
        <Link to="/contact" className="w-full py-3 text-center bg-[#168BEB] hover:bg-[#0D2942] text-white font-bold text-[13px] rounded-lg transition-colors shadow-sm">
          Get an LED Wall
        </Link>
        <Link to="/advertise" className="w-full py-3 text-center bg-[#071521] hover:bg-[#0D2942] text-white font-semibold text-[13px] rounded-lg transition-colors">
          Advertise With Us
        </Link>
        <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 font-medium">
          <a href="tel:+919746021869" className="hover:text-[#071521] flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +91 97460 21869
          </a>
          <a href="mailto:contact@sansglowmetric.com" className="hover:text-[#071521] flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            contact@sansglowmetric.com
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section */}
  <section className="relative w-full overflow-hidden flex mt-[72px] bg-[#071521] py-16 md:py-24 lg:py-32">
    <div className="relative z-50 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">Partnerships</span>
      </div>
      <h1 className="font-bold text-white leading-[1.2] mb-6 tracking-tight text-4xl md:text-5xl lg:text-[56px] max-w-[800px]">
        Stronger Together. <br /> Greater Impact.
      </h1>
      <p className="text-gray-300 text-[15px] md:text-base mb-10 max-w-[600px] leading-relaxed">
        We believe in the power of collaboration. Our partner network helps us bring innovative LED solutions to more brands, events and communities.
      </p>
    </div>
  </section>
  {/* Why Partner With Us Section */}
  <section className="py-24 bg-gray-50 border-b border-gray-100" style={{paddingTop: '6rem', paddingBottom: '6rem'}}>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16" style={{marginBottom: '4rem'}}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#071521] mb-4">
          Why Partner With SANS GLOWMETRIC?
        </h2>
        <p className="text-gray-500">
          When you partner with us, you get more than just a product — you get a long-term collaboration built on trust, innovation, and shared success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 flex items-center justify-center bg-[#071521]/5 rounded-full mb-6 text-[#168BEB]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-[#071521] mb-3">Trusted Technology</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Industry-leading LED solutions with proven reliability. We build displays that perform in any environment.
          </p>
        </div>
        {/* Benefit 2 */}
        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 flex items-center justify-center bg-[#071521]/5 rounded-full mb-6 text-[#168BEB]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <h3 className="text-xl font-bold text-[#071521] mb-3">Shared Growth</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Whether expanding your agency offerings or monetizing real estate, our models are designed to maximize your revenue.
          </p>
        </div>
        {/* Benefit 3 */}
        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 flex items-center justify-center bg-[#071521]/5 rounded-full mb-6 text-[#168BEB]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-[#071521] mb-3">Dedicated Support</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            From initial planning and permitting to execution and long-term maintenance, we're with you at every step.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Platinum Partner Program Banner Section (Luxury Callout) */}
  <section id="platinum-program" className="relative bg-[#071521] text-white overflow-hidden border-y border-white/10" style={{paddingTop: '6rem', paddingBottom: '7.5rem'}}>
    {/* Subtle Ambient Background Glow & Tech Texture */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#168BEB] rounded-full filter blur-[128px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0D2942] rounded-full filter blur-[128px]" />
      <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
    </div>
    <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
      {/* Eyebrow Tag */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
        <span className="w-2 h-2 rounded-full bg-[#168BEB] animate-pulse" />
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Exclusive Alliance</span>
      </div>
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.22] mb-6">
        What is the <span className="text-[#168BEB]">Platinum Partner Program?</span>
      </h2>
      {/* Description */}
      <p className="text-gray-300 text-[15px] md:text-[17px] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
        The SANS GLOWMETRIC Platinum Partner Program is an exclusive network of select commercial developers, media agencies, AV integrators, and venue operators across North America to drive, engineer, and expand cutting-edge LED display installations.
      </p>
      {/* Key Program Badges */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12 text-[13px] text-gray-300">
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <svg className="w-4 h-4 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          <span>90-Day Deal Exclusivity</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <svg className="w-4 h-4 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Tier-1 Factory Pricing</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <svg className="w-4 h-4 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span>Dedicated Engineering Lead</span>
        </div>
      </div>
      {/* CTA Button: Opens Modal */}
      <div className="pt-2">
        <button type="button" id="open-deal-modal-btn" className="deal-cta-btn inline-flex items-center justify-center gap-3.5 rounded-full bg-white text-[#071521] font-bold text-[15px] shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group" style={{minWidth: 280, padding: '1.15rem 3rem', backgroundColor: '#ffffff', color: '#071521', border: 'none', boxShadow: '0 14px 35px -5px rgba(0, 0, 0, 0.4)'}}>
          <span style={{fontWeight: 700, letterSpacing: '0.02em'}}>Register a deal</span>
          <svg className="w-4 h-4 text-[#071521] transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  </section>
  {/* Agency Partners Section */}
  <section className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#168BEB] font-bold text-sm tracking-wider uppercase mb-4 block">For Agencies</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#071521] mb-6 leading-tight">
            Advertising &amp; Marketing Agencies
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Present multi-client, multi-location campaign support and agency partnership opportunities. Access our agency dashboard to streamline your client campaigns and expand your digital out-of-home offerings.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-[#071521] text-white font-semibold rounded-lg hover:bg-[#0D2942] transition-colors">
            Become an Agency Partner
          </Link>
        </div>
        <div className="relative">
          <img src="/images/screen-1.webp" alt="Agency Dashboard Montage" className="w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3] bg-gray-200" />
        </div>
      </div>
    </div>
  </section>
  {/* Property Owners Section */}
  <section className="py-24 bg-gray-50 border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row">
        <div className="order-2 md:order-1 relative">
          <img src="/images/sr-3.png" alt="Property LED Mockup" className="w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3] bg-gray-200" />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-[#168BEB] font-bold text-sm tracking-wider uppercase mb-4 block">For Property Owners</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#071521] mb-6 leading-tight">
            Monetize Your Prime Location
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Generate new revenue streams from your high-visibility commercial or roadside locations. We provide end-to-end LED screen installation and manage advertising sales to maximize your property's value.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-[#071521] text-white font-semibold rounded-lg hover:bg-[#0D2942] transition-colors">
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-[#071521] text-white py-12 border-t border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        <Link to="/" className="flex items-center">
          <img src="/images/sanspng.png" alt="Logo" className="h-6 object-contain" />
        </Link>
        <div className="flex flex-wrap justify-center gap-6 text-[12px] text-gray-400 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/advertise" className="hover:text-white transition-colors">Advertise</Link>
          <Link to="/network" className="hover:text-white transition-colors">Our Screens</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/partners" className="hover:text-white transition-colors">Partners</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z">
              </path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Columbus, Ohio, USA
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 border-t border-white/10 pt-6">
        <p>© 2026 SANS GLOWMETRIC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
  {/* Deal Registration Modal */}
  <div id="deal-modal" className="deal-modal-container" role="dialog" aria-modal="true">
    {/* Backdrop */}
    <div id="deal-modal-backdrop" className="deal-modal-backdrop-bg" />
    {/* Modal Dialog Panel */}
    <div id="deal-modal-panel" className="deal-modal-dialog">
      {/* Modal Header (Pinned at Top) */}
      <div className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#071521] text-white flex items-center justify-between border-b border-white/10 shrink-0" style={{backgroundColor: '#071521', color: '#ffffff'}}>
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#168BEB] shrink-0" />
          <div>
            <h3 className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug">Partner Deal Registration</h3>
            <p className="text-[11px] sm:text-[12px] text-gray-300 leading-normal">Lock in 90-day project exclusivity and Tier-1 factory margins</p>
          </div>
        </div>
        <button type="button" id="deal-modal-close-btn" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer shrink-0 ml-3" aria-label="Close Modal">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      {/* Form with Scrollable Body and Pinned Sticky Footer */}
      <form id="deal-registration-form" className="flex flex-col flex-grow overflow-hidden m-0">
        {/* Scrollable Body with Adjusted Tight Padding */}
        <div className="overflow-y-auto p-4 sm:p-5 flex-grow space-y-3.5" style={{backgroundColor: '#ffffff'}}>
          {/* Section 1: Partner Information */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#071521]/80 block mb-2 pb-1 border-b border-gray-100">1. Partner Information</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Company / Agency Name <span className="text-rose-500">*</span></label>
                <input type="text" required name="partnerCompany" placeholder="e.g. Apex Media Group" className="deal-input" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Representative Name <span className="text-rose-500">*</span></label>
                <input type="text" required name="partnerRep" placeholder="Full name" className="deal-input" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Work Email <span className="text-rose-500">*</span></label>
                <input type="email" required name="partnerEmail" placeholder="name@company.com" className="deal-input" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Phone / WhatsApp <span className="text-rose-500">*</span></label>
                <input type="tel" required name="partnerPhone" placeholder="+1 (555) 000-0000" className="deal-input" />
              </div>
            </div>
          </div>
          {/* Section 2: Opportunity & Client Details */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#071521]/80 block mb-2 pb-1 border-b border-gray-100">2. Client Opportunity Details</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">End Client / Project Name <span className="text-rose-500">*</span></label>
                <input type="text" required name="clientProject" placeholder="e.g. Metro Tower Facade" className="deal-input" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Project City &amp; State <span className="text-rose-500">*</span></label>
                <input type="text" required name="projectLocation" placeholder="e.g. Columbus, OH" className="deal-input" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Display Solution Type <span className="text-rose-500">*</span></label>
                <select required name="displayType" className="deal-input">
                  <option value disabled selected>Select Display Type</option>
                  <option value="outdoor-billboard">Outdoor Digital Billboard (P6 - P10)</option>
                  <option value="indoor-videowall">Indoor Fine-Pitch Video Wall (P1.2 - P2.5)</option>
                  <option value="transparent-led">Architectural Transparent Glass LED</option>
                  <option value="curved-3d">Curved / Corner-Wrap 3D LED Display</option>
                  <option value="stadium-perimeter">Arena &amp; Stadium Perimeter Display</option>
                  <option value="other">Custom Architectural Installation</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Estimated Screen Size <span className="text-rose-500">*</span></label>
                <select required name="estimatedSize" className="deal-input">
                  <option value disabled selected>Select Area</option>
                  <option value="small">Under 500 sq ft</option>
                  <option value="medium">500 - 1,500 sq ft</option>
                  <option value="large">1,500 - 5,000 sq ft</option>
                  <option value="flagship">5,000+ sq ft (Flagship)</option>
                </select>
              </div>
            </div>
          </div>
          {/* Section 3: Timeline & Notes */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Target Timeline / Deployment</label>
                <select name="targetTimeline" className="deal-input">
                  <option value="immediate">Immediate (1 - 3 months)</option>
                  <option value="q1-2">3 - 6 months</option>
                  <option value="future">6 - 12 months</option>
                  <option value="budgetary">Budgetary / RFP Phase</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-[#071521] mb-1">Estimated Project Budget</label>
                <select name="projectBudget" className="deal-input">
                  <option value="50k-150k">$50,000 - $150,000</option>
                  <option value="150k-350k">$150,000 - $350,000</option>
                  <option value="350k-750k">$350,000 - $750,000</option>
                  <option value="750k+">$750,000+</option>
                </select>
              </div>
            </div>
            <div className="mt-2.5">
              <label className="block text-[11px] font-semibold text-[#071521] mb-1">Technical Notes / Project Overview</label>
              <textarea name="notes" rows={2} placeholder="Provide any architectural constraints, viewing distance, or custom requirements..." className="deal-input" style={{height: 50, resize: 'vertical'}} defaultValue={""} />
            </div>
          </div>
          {/* Exclusivity Assurance Box */}
          <div className="p-2.5 bg-amber-50/90 border border-[#168BEB]/50 rounded-lg flex items-start gap-2.5 text-[11px] text-amber-900">
            <svg className="w-4 h-4 text-[#168BEB] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span><strong>90-Day Exclusive Deal Lock:</strong> Once registered, your project is protected against direct bids or competing quotes with Tier-1 wholesale margins.</span>
          </div>
        </div>
        {/* Sticky Modal Footer (Pinned at Bottom, Single Row with Space Between) */}
        <div className="px-5 py-3 sm:px-6 sm:py-3.5 bg-gray-50/95 border-t border-gray-200 shrink-0 flex items-center justify-between gap-4" style={{backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-gray-500 font-medium">
            <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <span>Guaranteed 24-hour review &amp; margin lock</span>
          </div>
          <button type="submit" id="deal-submit-btn">
            <span>Lock In Deal Registration</span>
            <svg className="w-4 h-4 text-[#168BEB] transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </form>
      {/* Success Message Container (Initially Hidden) */}
      <div id="deal-modal-success" className="hidden py-10 px-6 text-center">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h4 className="text-2xl font-bold text-[#071521] mb-2">Deal Registration Submitted!</h4>
        <p className="text-[13px] text-gray-500 max-w-md mx-auto mb-6 leading-relaxed">
          Your deal registration has been received and locked under our 90-day exclusivity policy. Our Partner Relations Director will review your specifications and issue your certified Tier-1 pricing within 24 hours.
        </p>
        <button type="button" id="deal-success-close-btn" className="px-8 py-2.5 bg-[#071521] hover:bg-[#0D2942] text-white font-bold text-[13px] rounded-lg transition-colors cursor-pointer" style={{backgroundColor: '#071521', color: '#ffffff'}}>
          Done &amp; Close
        </button>
      </div>
    </div>
  </div>
  {/* Mobile Sticky Quick Action Bar (Luxury Touch & High Conversion) */}
  <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(7, 21, 33,0.12)] flex items-center justify-between" style={{zIndex: 90, padding: '0.65rem 1.25rem', gap: '0.75rem'}}>
    <a href="tel:+919746021869" className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gray-50 border border-gray-200 text-[#071521] text-[12px] font-semibold hover:bg-gray-100 transition-colors" style={{flex: '1 1 0%', minWidth: 0}}>
      <svg className="w-4 h-4 text-[#168BEB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      <span className="truncate">Call</span>
    </a>
    <a href="https://wa.me/919746021869" target="_blank" className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-semibold hover:bg-emerald-100 transition-colors" style={{flex: '1 1 0%', minWidth: 0}}>
      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.777.879 2.796.879 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.495 10-10 10-1.748 0-3.385-.45-4.823-1.24l-7.177 1.88 1.909-6.983c-.933-1.499-1.469-3.267-1.469-5.157 0-5.505 4.495-10 10-10s10 4.495 10 10z" /></svg>
      <span className="truncate">WhatsApp</span>
    </a>
    <Link to="/contact" className="flex items-center justify-center gap-1 py-2.5 px-2 rounded-lg bg-[#168BEB] text-white text-[12px] font-bold shadow-sm hover:bg-[#0D2942] transition-colors" style={{flex: '1 1 0%', minWidth: 0}}>
      <span className="truncate">Get Quote</span>
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </Link>
  </div>
  {/* Back to Top Button */}
  <button id="backToTopBtn" aria-label="Back to top" style={{position: 'fixed', bottom: '5rem', right: '1.5rem', zIndex: 9999, padding: '0.75rem', background: '#168BEB', color: '#ffffff', border: 'none', borderRadius: 8, boxShadow: '0 10px 25px rgba(22, 139, 235, 0.35)', cursor: 'pointer', opacity: 0, transform: 'translateY(1rem)', pointerEvents: 'none', transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'}}>
    <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</div>

  );
}
