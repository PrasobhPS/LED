import { Link } from 'react-router-dom';
import { useSiteEffects } from '../hooks/useSiteEffects';

export default function HomePage() {
  useSiteEffects("SANS GLOWMETRIC | LED Displays & Digital Media");
  return (
<div>
  {/* Page Loader (Simple & Brand-Suitable for index.html only) */}
  <div id="page-loader" aria-hidden="false">
    <div className="loader-content">
      <img src="/images/sanspng_white.png" alt="SANS GLOWMETRIC" className="loader-logo" />
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  </div>
  {/* Navbar */}
  <nav className="w-full bg-white border-b border-gray-100 py-4 fixed top-0 z-[100]">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img src="/images/sanspng-bluetheme.png" alt="SANS GLOWMETRIC" className="h-8 w-auto object-contain shrink-0 navbar-brand-logo" />
      </Link>
      {/* Center Links (Desktop lg: and above) */}
      <div className="hidden lg:flex gap-8 text-[13px] font-medium text-gray-500">
        <Link to="/about" className="hover:text-[#071521] transition-colors pb-1">About</Link>
        <Link to="/advertise" className="hover:text-[#071521] transition-colors pb-1">Advertise</Link>
        <Link to="/network" className="hover:text-[#071521] transition-colors pb-1">Our Screens</Link>
        <Link to="/projects" className="hover:text-[#071521] transition-colors pb-1">Projects</Link>
        <Link to="/partners" className="hover:text-[#071521] transition-colors pb-1">Partners</Link>
        <Link to="/contact" className="hover:text-[#071521] transition-colors pb-1">Contact</Link>
      </div>
      {/* Right Buttons (Desktop: md & above) */}
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
        <Link to="/contact" className="whitespace-nowrap px-3.5 py-1.5 rounded-lg text-[12px] font-semibold text-[#071521] border border-gray-200 hover:border-[#071521] transition-colors bg-gray-50 shrink-0">
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
  <div id="mobile-menu" className="fixed inset-0 hidden">
    <div id="mobile-menu-overlay" className="absolute inset-0 bg-[#071521]/80 backdrop-blur-md opacity-0 transition-opacity duration-300" />
    <div id="mobile-menu-panel" className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/60">
        <Link to="/" className="flex items-center">
          <img src="/images/sanspng-bluetheme.png" alt="Logo" className="h-6 object-contain mobile-menu-logo" />
        </Link>
        <button id="mobile-menu-close" className="p-2 rounded-full text-gray-500 hover:text-[#071521] hover:bg-gray-200/50 transition-colors" aria-label="Close Navigation Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
            </path>
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
        <Link to="/partners" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors flex items-center justify-between">
          <span>Partners</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#071521] text-white font-normal">Join
            Us</span>
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
          <a href="tel:+16145550199" className="hover:text-[#071521] flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
              </path>
            </svg>
            Call Us
          </a>
          <a href="mailto:hello@sansglowmetric.com" className="hover:text-[#071521] flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
              </path>
            </svg>
            Email Support
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Section: Exact Mirror Layout */}
  <section id="hero-section" className="relative w-full h-[calc(100vh-72px)] overflow-hidden flex mt-[72px] bg-[#071521]">
    {/* Right Side Slider Container (With Feathered Left Edge to prevent hard seams under the glass) */}
    <div className="hero-slider-wrap absolute top-0 right-0 w-full md:w-[45%] lg:w-[60vw] h-full overflow-hidden z-10" style={{WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%)'}}>
      {/* Slider Track Container */}
      <div id="hero-slider" className="absolute inset-0 w-full h-full z-0 flex transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
        {/* Slide 1 */}
        <div className="relative w-full h-full flex-shrink-0">
          <img src="/images/screens/sr-9.png" className="w-full h-full object-cover" alt="Premium LED Billboard 1" />
          <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
        </div>
        {/* Slide 2 */}
        <div className="relative w-full h-full flex-shrink-0">
          <img src="/images/screens/sr-10.png" className="w-full h-full object-cover" alt="Premium LED Billboard 2" />
          <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
        </div>
        {/* Slide 3 */}
        <div className="relative w-full h-full flex-shrink-0">
          <img src="/images/screens/sr-3.jpeg" className="w-full h-full object-cover" alt="Premium LED Billboard 3" />
          <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
        </div>
        {/* Slide 4 */}
        <div className="relative w-full h-full flex-shrink-0">
          <img src="/images/screens/sr-4.jpeg" className="w-full h-full object-cover" alt="Premium LED Billboard 4" />
          <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
        </div>
        {/* Slide 5 */}
        <div className="relative w-full h-full flex-shrink-0">
          <img src="/images/screens/sr-5.jpeg" className="w-full h-full object-cover" alt="Premium LED Billboard 5" />
          <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
        </div>
        {/* Slide 6 */}
        <div className="relative w-full h-full flex-shrink-0">
          <img src="/images/screens/sr-7.jpeg" className="w-full h-full object-cover" alt="Premium LED Billboard 6" />
          <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
        </div>
      </div>
    </div>
    {/* The True Glass Background (Left panel) */}
    <div className="absolute top-0 left-0 w-full md:w-[68%] lg:w-[calc(50vw+70px)] h-full z-40 hidden md:block filter drop-shadow-[15px_0_35px_rgba(0,0,0,0.35)]">
      {/* Premium Dark Frosted Glass Effect */}
      <div className="w-full h-full hero-chevron-glass" style={{clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)', background: 'linear-gradient(135deg, rgba(7, 21, 33, 0.82) 0%, rgba(7, 21, 33, 0.62) 45%, rgba(7, 21, 33, 0.35) 75%, rgba(7, 21, 33, 0.18) 100%)', backdropFilter: 'blur(52px) saturate(190%) brightness(1.04)', WebkitBackdropFilter: 'blur(52px) saturate(190%) brightness(1.04)', boxShadow: 'inset 0 0 60px rgba(255, 255, 255, 0.04)'}}>
      </div>
    </div>
    {/* Container for Content */}
    <div id="hero-content-container" className="relative z-50 w-full max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-start md:items-center pt-12 md:pt-0 pointer-events-none">
      {/* Increased lg:pr-24 to keep text safely away from the chevron edge */}
      <div id="hero-card" className="w-full md:w-[60%] lg:w-[45%] pr-0 md:pr-8 lg:pr-24 xl:pr-28 pointer-events-auto bg-transparent p-0 rounded-none shadow-none border-none">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">LED Displays &amp; Digital
            Media</span>
        </div>
        {/* Headline (slightly reduced max-width to respect the slant) */}
        <h1 className="font-bold text-white leading-[1.2] mb-6 tracking-tight text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] max-w-[500px]">
          Make Your Location<br />Impossible to Miss.
        </h1>
        {/* Description */}
        <p className="text-gray-300 text-[15px] md:text-base mb-10 max-w-[400px] leading-relaxed">
          Custom LED displays and digital advertising solutions that help your brand stand out, attract more
          people and create real impact — in the places that matter.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link to="/contact" className="flex items-center justify-center gap-3 px-6 py-3.5 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg shadow-sm group">
            Get an LED Wall
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link to="/advertise" className="flex items-center justify-center gap-3 px-6 py-3.5 bg-transparent text-white border border-white/20 text-[13px] font-semibold hover:border-white transition-colors rounded-lg shadow-sm group">
            Advertise With Us
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        {/* Location */}
        <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z">
            </path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Headquartered in Columbus, Ohio, USA
        </div>
      </div>
    </div>
    {/* Slider Controls */}
    <div id="hero-controls" className="absolute bottom-6 right-8 md:right-12 z-50 flex items-center gap-4 text-white text-[12px] font-semibold tracking-widest drop-shadow-md">
      <button id="hero-prev" className="hover:text-[#168BEB] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg></button>
      <span id="hero-counter">01 / 06</span>
      <button id="hero-next" className="hover:text-[#168BEB] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
          </path>
        </svg></button>
    </div>
  </section>
  {/* Our Business Models */}
  <section className="pt-24 pb-12 md:pb-16 bg-slate-50">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Our Business
            Models</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
          Two Ways to Grow Your Presence.</h2>
        <p className="text-gray-500 max-w-lg leading-relaxed text-[15px]">
          Whether you want a custom display for your property or to reach your audience through our network,
          we have the right solution for you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-[45%] h-[250px] md:h-auto overflow-hidden">
            <img src="/images/corporate.jpg" className="w-full h-full object-cover" alt="Custom LED Displays" />
          </div>
          <div className="p-8 md:p-10 w-full md:w-[55%] flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#168BEB]/10 border border-[#168BEB]/20 flex items-center justify-center text-[#168BEB] mb-5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x={2} y={3} width={20} height={15} rx={2} />
                <line x1={2} y1="10.5" x2={22} y2="10.5" />
                <line x1="8.5" y1={3} x2="8.5" y2={18} />
                <line x1="15.5" y1={3} x2="15.5" y2={18} />
                <path d="M7 21h10" />
                <path d="M12 18v3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#071521] mb-3">Custom LED Displays</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-6">From storefronts to building facades,
              get a display designed around your location, viewing distance and business goals.</p>
            <Link to="/network" className="flex items-center gap-2 text-[#071521] text-[12px] font-semibold hover:text-[#168BEB] transition-colors mt-auto">
              Explore LED Solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-[45%] h-[250px] md:h-auto overflow-hidden">
            <img src="/images/city_ny.jpg" className="w-full h-full object-cover" alt="Digital Advertising" />
          </div>
          <div className="p-8 md:p-10 w-full md:w-[55%] flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-[#168BEB]/10 border border-[#168BEB]/20 flex items-center justify-center text-[#168BEB] mb-5">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x={3} y={4} width={18} height={11} rx="1.5" />
                <path d="M8 15v6" />
                <path d="M16 15v6" />
                <path d="M5 21h14" />
                <circle cx={12} cy="9.5" r={2} />
                <path d="M8.5 7a4.5 4.5 0 0 0 0 5" />
                <path d="M15.5 7a4.5 4.5 0 0 1 0 5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#071521] mb-3">Digital Advertising</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-6">Connect your brand with local
              audiences through our managed network of premium LED screens in high-traffic areas.</p>
            <Link to="/advertise" className="flex items-center gap-2 text-[#071521] text-[12px] font-semibold hover:text-[#168BEB] transition-colors mt-auto">
              Find Advertising Space
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* LED Solutions (Simple Grid Layout) */}
  <section id="led-solutions" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-slate-50 relative">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start lg:items-center">
        {/* Left Side: Title */}
        <div className="lg:w-[35%] shrink-0 lg:pr-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#071521] uppercase">LED
              Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            LED Solutions for Real-World Spaces
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-8">
            We create immersive, high-quality LED displays for a wide range of industries and environments.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#071521] text-white text-[13px] font-medium hover:bg-[#0D2942] transition-colors rounded-lg">
            Request a Site Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        {/* Right Side: Features */}
        <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:border-l border-gray-200">
          {/* Feature 1 */}
          <div className="px-6 py-6 lg:py-2 border-b sm:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#071521]/5 border border-gray-200/80 flex items-center justify-center text-[#168BEB]" style={{width: 40, height: 40, minWidth: 40, maxWidth: 40}}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 21V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17" />
                <path d="M2 21h20" />
                <line x1={9} y1={3} x2={9} y2={21} />
                <line x1={15} y1={3} x2={15} y2={21} />
                <line x1={4} y1={9} x2={20} y2={9} />
                <line x1={4} y1={15} x2={20} y2={15} />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521]">Building Facades</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Make a bold statement with large-scale LED displays on building exteriors.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="px-6 py-6 lg:py-2 border-b sm:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#071521]/5 border border-gray-200/80 flex items-center justify-center text-[#168BEB]" style={{width: 40, height: 40, minWidth: 40, maxWidth: 40}}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x={3} y={4} width={18} height={12} rx={2} />
                <path d="M8 16v4" />
                <path d="M16 16v4" />
                <path d="M4 20h16" />
                <path d="M7 8h10" />
                <circle cx={12} cy="11.5" r="1.5" />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521]">Retail &amp; Hospitality</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Engage shoppers and guests with dynamic, high-visibility displays.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="px-6 py-6 lg:py-2 border-b sm:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#071521]/5 border border-gray-200/80 flex items-center justify-center text-[#168BEB]" style={{width: 40, height: 40, minWidth: 40, maxWidth: 40}}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y={4} width={19} height={11} rx="1.5" />
                <line x1="8.5" y1={4} x2="8.5" y2={15} />
                <line x1="15.5" y1={4} x2="15.5" y2={15} />
                <path d="M8 18.5l4-3.5 4 3.5" />
                <path d="M6 21h12" />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521]">Offices &amp; Campuses</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Enhance your space with sleek, professional LED solutions.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="px-6 py-6 lg:py-2 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#071521]/5 border border-gray-200/80 flex items-center justify-center text-[#168BEB]" style={{width: 40, height: 40, minWidth: 40, maxWidth: 40}}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 16C5 12.5 8 11 12 11s7 1.5 9.5 5" />
                <path d="M2.5 10C5 6.5 8 5 12 5s7 1.5 9.5 5" />
                <path d="M2.5 10v6" />
                <path d="M21.5 10v6" />
                <path d="M8 19.5l4-2.5 4 2.5" />
                <path d="M6 21.5h12" />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521]">Venues &amp; Outdoor Spaces</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Deliver unforgettable experiences in high-traffic locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="relative py-24 md:py-32 overflow-hidden bg-[#071521]">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img src="/images/city_ny.jpg" className="w-full h-full object-cover opacity-20 filter grayscale" alt="Global Cityscape" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-[#071521]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071521] to-transparent" />
    </div>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-24">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Global Scale</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.22] tracking-tight">
          Powering the World's<br />Most Iconic Locations.
        </h2>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        <div className="flex flex-col items-center text-center pt-8 lg:pt-0 lg:px-8 first:pt-0 first:lg:pl-0 last:lg:pr-0">
          <div className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-3 tracking-tighter drop-shadow-lg">
            <span className="stat-counter" data-target={50}>0</span><span className="text-[#168BEB]">+</span>
          </div>
          <span className="text-[12px] md:text-[13px] text-gray-400 font-medium tracking-widest uppercase">Global
            Cities</span>
        </div>
        <div className="flex flex-col items-center text-center pt-8 lg:pt-0 lg:px-8">
          <div className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-3 tracking-tighter drop-shadow-lg">
            <span className="stat-counter" data-target={12}>0</span>K<span className="text-[#168BEB]">+</span>
          </div>
          <span className="text-[12px] md:text-[13px] text-gray-400 font-medium tracking-widest uppercase">Screens
            Deployed</span>
        </div>
        <div className="flex flex-col items-center text-center pt-8 lg:pt-0 lg:px-8">
          <div className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-3 tracking-tighter drop-shadow-lg">
            <span className="stat-counter" data-target={15}>0</span>M<span className="text-[#168BEB]">+</span>
          </div>
          <span className="text-[12px] md:text-[13px] text-gray-400 font-medium tracking-widest uppercase">Daily
            Impressions</span>
        </div>
        <div className="flex flex-col items-center text-center pt-8 lg:pt-0 lg:px-8">
          <div className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-3 tracking-tighter drop-shadow-lg">
            <span className="stat-counter" data-target={99}>0</span><span className="text-[#168BEB]">.9%</span>
          </div>
          <span className="text-[12px] md:text-[13px] text-gray-400 font-medium tracking-widest uppercase">Network
            Uptime</span>
        </div>
      </div>
    </div>
  </section>
  {/* Billboard Conversion */}
  <section id="billboard-conversion" className="bg-slate-50">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Billboard
              Conversion</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            Turn Existing Signage Into a Digital
            Opportunity.</h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
            Convert your static billboard to a dynamic LED display and reach more people with flexible,
            real-time content.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#071521] text-white text-[13px] font-medium hover:bg-[#0D2942] transition-colors rounded-lg">
            Digitize My Billboard
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <div className="lg:col-span-8 w-full">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl group cursor-ew-resize select-none" data-reveal="true">
            {/* After Image (Base Layer) */}
            <img src="/images/led_billboard.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Digital Billboard" />
            {/* After Label */}
            <div className="absolute bottom-6 right-6 bg-[#071521]/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-[11px] font-bold tracking-[0.15em] uppercase z-10 border border-white/10 shadow-lg">
              After
            </div>
            {/* Before Image (Clipped Overlay - slides left on hover) */}
            <div className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] [clip-path:inset(0_0_0_0)] group-hover:[clip-path:inset(0_100%_0_0)] z-20">
              <img src="/images/led_billboard.jpg" className="absolute inset-0 w-full h-full object-cover grayscale" alt="Static Billboard" />
              {/* Overlay divider line */}
              <div className="absolute top-0 right-0 w-[2px] h-full bg-[#168BEB] shadow-[0_0_20px_rgba(22, 139, 235, 0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
              {/* Before Label */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[#071521] text-[11px] font-bold tracking-[0.15em] uppercase z-30 border border-gray-200 shadow-lg">
                Before
              </div>
            </div>
            {/* Hover Instruction Overlay */}
            <div className="absolute inset-0 z-40 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-[12px] font-semibold flex items-center gap-2.5 shadow-2xl border border-white/20 tracking-wide">
                <svg className="w-4 h-4 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                  </path>
                </svg>
                Hover to Reveal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Recent Installations Slider Section */}
  <section id="recent-installations" className="bg-slate-50/60 border-t border-gray-200/80 overflow-hidden relative">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      {/* Section Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Flagship
              Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#071521] leading-[1.22] tracking-tight">
            Recent Installations.
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed mt-1.5 max-w-xl">
            A curated showcase of our latest custom-engineered LED walls and digital display deployments
            across high-profile spaces.
          </p>
        </div>
        {/* Slider Controls & View All */}
        <div className="flex items-center gap-4 shrink-0">
          <Link to="/projects" className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-[#071521] hover:text-[#168BEB] transition-colors mr-2">
            <span>View All Projects</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <div className="flex items-center gap-3">
            <button id="installations-prev" aria-label="Previous Installation" className="installations-btn group">
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button id="installations-next" aria-label="Next Installation" className="installations-btn group">
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Slider Container */}
      <div id="installations-slider-wrap" className="relative">
        {/* Track */}
        <div id="installations-track" className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-3 pt-1">
          {/* Card 1 */}
          <div className="installation-card group flex flex-col">
            <div className="installation-img-wrap">
              <img src="/images/screen-1.webp" alt="Times Square Curved Mega LED" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent">
              </div>
              <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">Outdoor
                3D Wrap</span>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">10,000
                Nits</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Times Square, NY
                </span>
                <span className="text-gray-300">8,200 sq ft</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">
                Times Square Landmark 3D Display</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">Continuous corner-wrap LED
                structure supporting naked-eye 3D visual content and high-frequency digital out-of-home
                advertising.</p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gray-700">Pitch: <strong className="text-[#071521]">P6.67
                    Outdoor</strong></span>
                <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details
                  →</Link>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="installation-card group flex flex-col">
            <div className="installation-img-wrap">
              <img src="/images/sr-2.png" alt="Luxury Retail Curved Ribbon Wall" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent">
              </div>
              <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">Luxury
                Retail</span>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">3,840Hz
                Refresh</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  5th Avenue, NY
                </span>
                <span className="text-gray-300">1,450 sq ft</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">
                Flagship Store Ribbon LED Installation</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">Ultra-fine pixel pitch curved
                architectural display wrapping two levels of a high-fashion boutique for brand story
                immersion.</p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gray-700">Pitch: <strong className="text-[#071521]">P1.56
                    COB</strong></span>
                <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details
                  →</Link>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="installation-card group flex flex-col">
            <div className="installation-img-wrap">
              <img src="/images/corporate.jpg" alt="Corporate Headquarters Atrium" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent">
              </div>
              <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">Corporate
                Atrium</span>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">8K
                Native</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Columbus, OH
                </span>
                <span className="text-gray-300">2,600 sq ft</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">
                Tech Hub Headquarters Video Wall</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">Floor-to-ceiling fine-pitch LED
                centerpiece displaying live company dashboards, investor broadcasts, and custom
                generative artwork.</p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gray-700">Pitch: <strong className="text-[#071521]">P1.8
                    Indoor</strong></span>
                <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details
                  →</Link>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="installation-card group flex flex-col">
            <div className="installation-img-wrap">
              <img src="/images/led_billboard.jpg" alt="Highway Spectacular Digital Billboard" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent">
              </div>
              <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">DOOH
                Billboard</span>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">IP68
                Rated</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Interstate 71 Hub, OH
                </span>
                <span className="text-gray-300">1,200 sq ft</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">
                I-71 High-Frequency Digital Monolith</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">Complete conversion of legacy
                static billboard to ultra-bright digital advertising billboard generating high annual
                advertising yield.</p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gray-700">Pitch: <strong className="text-[#071521]">P10
                    Outdoor</strong></span>
                <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details
                  →</Link>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="installation-card group flex flex-col">
            <div className="installation-img-wrap">
              <img src="/images/city_dubai.jpg" alt="Marina Waterfront Spectacular" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent">
              </div>
              <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">Waterfront
                Facade</span>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">12,500
                sq ft</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Marina District, UAE
                </span>
                <span className="text-gray-300">Custom Arch</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">
                Marina Waterfront Architectural Display</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">Iconic architectural LED
                installation integrated into high-profile waterfront commercial development with smart
                automated light sensors.</p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gray-700">Pitch: <strong className="text-[#071521]">P8
                    Facade</strong></span>
                <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details
                  →</Link>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="installation-card group flex flex-col">
            <div className="installation-img-wrap">
              <img src="/images/retail.jpg" alt="Transparent Retail Window Screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent">
              </div>
              <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">Transparent
                LED</span>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">75%
                Transparency</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
                <span className="flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Downtown Chicago, IL
                </span>
                <span className="text-gray-300">950 sq ft</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">
                Downtown Showcase Transparent Glass Wall</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-4">High-transparency window video
                wall that delivers vivid visuals while maintaining full natural daylight into the
                interior showroom.</p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
                <span className="font-semibold text-gray-700">Pitch: <strong className="text-[#071521]">P3.9 /
                    P7.8 Glass</strong></span>
                <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details
                  →</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Progress Bar & Mobile Touch Indicator */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span id="installations-counter" className="text-[12px] font-bold tracking-wider text-[#071521]">01
              / 06</span>
            <div className="w-28 sm:w-44 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div id="installations-progress" className="h-full bg-[#168BEB] transition-all duration-300">
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">Swipe to explore
              →</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Process */}
  <section className="py-24 md:py-32 bg-white border-t border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start lg:items-stretch">
        {/* Left Side: Title */}
        <div className="lg:w-[35%] shrink-0 lg:pr-12 py-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#071521] uppercase">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            From First Conversation to Installation.
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-8">
            We handle every detail of your LED project in-house. Our proven 6-step framework ensures a
            seamless experience and a brilliant final display.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#071521] text-white text-[13px] font-medium hover:bg-[#0D2942] transition-colors rounded-lg">
            Get a Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        {/* Right Side: Minimal Matrix Grid */}
        <div className="lg:w-[65%] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {/* Step 1 */}
          <div className="p-6 lg:p-8 border-b border-r border-gray-200 flex flex-col bg-white hover:bg-slate-50 transition-colors group cursor-default">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#168BEB]">01</span>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#168BEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={11} cy={11} r={7} />
                <line x1={21} y1={21} x2="16.5" y2="16.5" />
                <line x1={11} y1={8} x2={11} y2={14} />
                <line x1={8} y1={11} x2={14} y2={11} />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521] mb-3">Discover</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mt-auto">
              We thoroughly understand your unique vision, location dynamics, and specific business goals.
            </p>
          </div>
          {/* Step 2 */}
          <div className="p-6 lg:p-8 border-b border-r border-gray-200 flex flex-col bg-white hover:bg-slate-50 transition-colors group cursor-default">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#168BEB]">02</span>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#168BEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 6H3" />
                <line x1={7} y1={6} x2={7} y2={10} />
                <line x1={12} y1={6} x2={12} y2={9} />
                <line x1={17} y1={6} x2={17} y2={10} />
                <rect x={3} y={10} width={18} height={9} rx="1.5" />
                <circle cx={12} cy="14.5" r="1.5" />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521] mb-3">Site Assessment</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mt-auto">
              Detailed on-site evaluation of structural integrity and environmental conditions.
            </p>
          </div>
          {/* Step 3 */}
          <div className="p-6 lg:p-8 border-b border-r border-gray-200 flex flex-col bg-white hover:bg-slate-50 transition-colors group cursor-default">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#168BEB]">03</span>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#168BEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l9 5-9 5-9-5 9-5z" />
                <path d="M3 7v10l9 5 9-5V7" />
                <line x1={12} y1={12} x2={12} y2={22} />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521] mb-3">Design &amp; Proposal</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mt-auto">
              Custom design layouts, 3D visual renders, and a transparent project proposal.
            </p>
          </div>
          {/* Step 4 */}
          <div className="p-6 lg:p-8 border-b border-r border-gray-200 flex flex-col bg-white hover:bg-slate-50 transition-colors group cursor-default">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#168BEB]">04</span>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#168BEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={5} r={2} />
                <path d="M12 7l-7 14" />
                <path d="M12 7l7 14" />
                <line x1={7} y1={16} x2={17} y2={16} />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521] mb-3">Engineering &amp; Planning</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mt-auto">
              Technical engineering, securing municipal permits, and schedule alignment.
            </p>
          </div>
          {/* Step 5 */}
          <div className="p-6 lg:p-8 border-b border-r border-gray-200 flex flex-col bg-white hover:bg-slate-50 transition-colors group cursor-default">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#168BEB]">05</span>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#168BEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x={3} y={3} width="7.5" height="7.5" rx={1} />
                <rect x="13.5" y={3} width="7.5" height="7.5" rx={1} />
                <rect x={3} y="13.5" width="7.5" height="7.5" rx={1} />
                <rect x="13.5" y="13.5" width="7.5" height="7.5" rx={1} />
                <line x1="10.5" y1="6.75" x2="13.5" y2="6.75" strokeDasharray="1 1" />
                <line x1="10.5" y1="17.25" x2="13.5" y2="17.25" strokeDasharray="1 1" />
                <line x1="6.75" y1="10.5" x2="6.75" y2="13.5" strokeDasharray="1 1" />
                <line x1="17.25" y1="10.5" x2="17.25" y2="13.5" strokeDasharray="1 1" />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521] mb-3">Installation</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mt-auto">
              Flawless deployment executed strictly by our certified in-house teams.
            </p>
          </div>
          {/* Step 6 */}
          <div className="p-6 lg:p-8 border-b border-r border-gray-200 flex flex-col bg-white hover:bg-slate-50 transition-colors group cursor-default">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#168BEB]">06</span>
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#168BEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x={2} y={4} width={20} height={13} rx={2} />
                <path d="M6 11l3 3 6-6" />
                <line x1={12} y1={17} x2={12} y2={21} />
                <line x1={8} y1={21} x2={16} y2={21} />
              </svg>
            </div>
            <h3 className="text-[15px] font-bold text-[#071521] mb-3">Launch &amp; Support</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mt-auto">
              Activation of your display and comprehensive ongoing proactive support.
            </p>
          </div>
        </div>
      </div>
      {/* Why Choose SANS GLOWMETRIC (Bento Architecture) */}
      <div className="mt-24 pt-24 border-t border-gray-100">
        {/* Section Header (Balanced Horizontal Architecture) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#071521] uppercase">Why Choose SANS GLOWMETRIC</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.2] tracking-tight">
              Built Around Your Goals.
            </h2>
          </div>
          <div className="max-w-md lg:text-left flex flex-col items-start gap-4">
            <p className="text-gray-500 text-[15px] leading-relaxed">
              We don't just provide screens. We act as your dedicated partner, ensuring flawless execution, long-term reliability, and continuous proactive support every step of the way.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#071521] text-white text-[13px] font-semibold hover:bg-[#168BEB] transition-colors rounded-lg group">
              <span>Talk to Us</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Bento Grid: Top Row (3 Equal Feature Cards) */}
        <div className="why-choose-grid-top">
          {/* Card 1: Your Growth Partner */}
          <div className="why-card group">
            <div className="flex items-center justify-between mb-5">
              <div className="why-icon-box">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 19h16" />
                  <path d="M7 15l5-6 4 4 5-7" />
                  <circle cx={21} cy={6} r={2} fill="currentColor" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">01 / Growth</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#071521] mb-2.5 group-hover:text-[#168BEB] transition-colors">Your Growth Partner</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                We're more than a display company — we're your long-term partner in visibility, engagement, and business growth.
              </p>
            </div>
          </div>
          {/* Card 2: Trusted Reliability */}
          <div className="why-card group">
            <div className="flex items-center justify-between mb-5">
              <div className="why-icon-box">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2l8 4.5v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11v-6L12 2z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">02 / Reliability</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#071521] mb-2.5 group-hover:text-[#168BEB] transition-colors">Trusted Reliability</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Proven industry experience and reliable execution, ensuring your display operates flawlessly from day one.
              </p>
            </div>
          </div>
          {/* Card 3: Dedicated Support */}
          <div className="why-card group">
            <div className="flex items-center justify-between mb-5">
              <div className="why-icon-box">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 11a9 9 0 0 1 18 0v4a3 3 0 0 1-3 3h-1" />
                  <path d="M3 14a3 3 0 0 1 3-3h1v6H6a3 3 0 0 1-3-3z" />
                  <path d="M17 11h1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1v-6z" />
                  <path d="M10 19h4" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">03 / Support</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#071521] mb-2.5 group-hover:text-[#168BEB] transition-colors">Dedicated Support</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                A dedicated local team that is responsive, proactive, and incredibly easy to work with on any technical issue.
              </p>
            </div>
          </div>
        </div>
        {/* Bento Grid: Bottom Row (2 Equal Feature Cards) */}
        <div className="why-choose-grid-bottom">
          {/* Card 4: Ongoing Partnership */}
          <div className="why-card group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="why-icon-box">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.083-8-12.356-8-5.096 0-5.096 8 0 8 5.273 0 7.261-8 12.356-8z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">04 / Lifecycle</span>
              </div>
              <h3 className="text-[19px] font-bold text-[#071521] mb-2.5 group-hover:text-[#168BEB] transition-colors">Ongoing Partnership</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
                We're always here when you need us, providing continuous optimization, hardware upgrades, and preventive maintenance.
              </p>
            </div>
            <div className="why-card-footer">
              <span className="why-pill-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
                Preventative Audits
              </span>
              <span className="why-pill-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
                On-Site Spares
              </span>
              <span className="why-pill-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
                Firmware Sync
              </span>
            </div>
          </div>
          {/* Card 5: Scalable Capabilities */}
          <div className="why-card group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="why-icon-box">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x={2} y={3} width={8} height={8} rx="1.5" />
                    <rect x={14} y={3} width={8} height={8} rx="1.5" />
                    <rect x={2} y={13} width={8} height={8} rx="1.5" />
                    <rect x={14} y={13} width={8} height={8} rx="1.5" />
                    <circle cx={10} cy={7} r={1} fill="currentColor" />
                    <circle cx={10} cy={17} r={1} fill="currentColor" />
                    <circle cx={14} cy={7} r={1} fill="currentColor" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">05 / Scalability</span>
              </div>
              <h3 className="text-[19px] font-bold text-[#071521] mb-2.5 group-hover:text-[#168BEB] transition-colors">Scalable Capabilities</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
                Whether you need one screen or a nationwide network, our platform is built to scale seamlessly with your ambitions.
              </p>
            </div>
            <div className="why-card-footer">
              <span className="why-pill-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
                Single Flagship Wall
              </span>
              <span className="why-pill-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
                Multi-Site Networks
              </span>
              <span className="why-pill-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]" />
                DOOH Fleets
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Next Steps Section (3 Cards) */}
  <section id="next-steps-section" className="bg-slate-50 py-24 border-t border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Next Steps</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-12 tracking-tight">
        Let's Work Together.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Choice 1 */}
        <div className="bg-white p-10 rounded-md shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-[#071521] mb-4">Custom Display</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
            Get a custom LED display designed, engineered, and installed for your specific location and
            business goals.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#071521] text-white text-[13px] font-medium hover:bg-[#0D2942] transition-colors rounded-lg w-full">
            I Need an LED Wall
          </Link>
        </div>
        {/* Choice 2 */}
        <div className="bg-white p-10 rounded-md shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-[#071521] mb-4">Advertising</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
            Reach your audience through our managed network of premium LED screens in high-traffic areas.
          </p>
          <Link to="/advertise" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#071521] text-[#071521] text-[13px] font-semibold hover:bg-[#071521] hover:text-white transition-colors rounded-lg w-full">
            I Want to Advertise
          </Link>
        </div>
        {/* Choice 3 */}
        <div className="bg-white p-10 rounded-md shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-[#071521] mb-4">Property Partnership</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
            Partner with us to monetize your highly visible commercial property or roadside location.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#071521] text-[#071521] text-[13px] font-semibold hover:bg-[#071521] hover:text-white transition-colors rounded-lg w-full">
            I Have a Location
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="bg-[#071521] text-white flex flex-col md:flex-row items-stretch">
    {/* Image (Bleeds Left, Top, Bottom) */}
    <div className="w-full md:w-[40%] lg:w-[45%] shrink-0 relative min-h-[300px]">
      <img src="/images/city_dubai.jpg" className="absolute inset-0 w-full h-full object-cover" />
    </div>
    {/* Text Content */}
    <div className="w-full md:w-[60%] lg:w-[55%] p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center">
      <div className="max-w-[800px]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Let's Work
            Together</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 leading-[1.22] tracking-tight">Have a
          Project in Mind?</h2>
        <p className="text-gray-300 max-w-md mb-8 text-[13px] leading-relaxed">
          Whether you need an LED wall, want to advertise, or have a unique space, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#168BEB] text-white text-[13px] font-semibold hover:bg-[#0D2942] transition-colors rounded-lg">
            Get an LED Wall
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link to="/advertise" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-gray-500 text-white text-[13px] font-semibold hover:border-white transition-colors rounded-lg">
            Advertise With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-[#071521] text-white py-12 border-t border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/sanspng.png" alt="Logo" className="h-6 object-contain footer-brand-logo" />
        </Link>
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[12px] text-gray-400 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/advertise" className="hover:text-white transition-colors">Advertise</Link>
          <Link to="/network" className="hover:text-white transition-colors">Our Screens</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link to="/partners" className="hover:text-white transition-colors">Partners</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        {/* Location & Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z">
              </path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Columbus, Ohio, USA
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg></a>
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
  {/* Mobile Sticky Quick Action Bar (Luxury Touch & High Conversion) */}
  <div id="mobile-quick-actions" className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(7, 21, 33,0.12)] flex items-center justify-between">
    <a href="tel:+16145550199" className="mobile-quick-action-btn flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gray-50 border border-gray-200 text-[#071521] text-[12px] font-semibold hover:bg-gray-100 transition-colors">
      <svg className="w-4 h-4 text-[#168BEB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
        </path>
      </svg>
      <span className="truncate">Call</span>
    </a>
    <a href="https://wa.me/16145550199" target="_blank" className="mobile-quick-action-btn flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-semibold hover:bg-emerald-100 transition-colors">
      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.777.879 2.796.879 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.495 10-10 10-1.748 0-3.385-.45-4.823-1.24l-7.177 1.88 1.909-6.983c-.933-1.499-1.469-3.267-1.469-5.157 0-5.505 4.495-10 10-10s10 4.495 10 10z" />
      </svg>
      <span className="truncate">WhatsApp</span>
    </a>
    <Link to="/contact" className="mobile-quick-action-btn flex items-center justify-center gap-1 py-2.5 px-2 rounded-lg bg-[#168BEB] text-white text-[12px] font-bold shadow-sm hover:bg-[#0D2942] transition-colors">
      <span className="truncate">Get Quote</span>
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
        </path>
      </svg>
    </Link>
  </div>
  {/* Back to Top Button */}
  <button id="backToTopBtn" aria-label="Back to top">
    <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
    </svg>
  </button>
  {/* Page Loader Controller (index.html only) */}
</div>

  );
}
