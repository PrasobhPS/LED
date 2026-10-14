import { Link } from 'react-router-dom';
import { useSiteEffects } from '../hooks/useSiteEffects';

export default function NetworkPage() {
  useSiteEffects("SANS GLOWMETRIC | Our Screens & Network");
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
        <Link to="/network" className="text-[#071521] border-b-2 border-[#168BEB] pb-1">Our Screens</Link>
        <Link to="/projects" className="hover:text-[#071521] transition-colors pb-1">Projects</Link>
        <Link to="/partners" className="hover:text-[#071521] transition-colors pb-1">Partners</Link>
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
        <Link to="/network" className="flex items-center justify-between font-bold text-white bg-[#168BEB]/10 px-3 py-2.5 rounded-lg border-l-4 border-[#168BEB]">
          <span>Our Screens</span>
          <span className="text-[10px] uppercase font-bold text-[#168BEB] tracking-wider">Current</span>
        </Link>
        <Link to="/projects" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Projects</Link>
        <Link to="/partners" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors flex items-center justify-between">
          <span>Partners</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#071521] text-white font-normal">Join Us</span>
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
  <section className="relative w-full flex items-center mt-[72px] overflow-hidden" style={{backgroundColor: '#071521'}}>
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0 w-full h-full">
      <img src="/images/world_map_network.jpg" data-fallback="/images/city_ny.jpg" className="w-full h-full object-cover" alt="Global Network" />
      <div className="absolute inset-0 w-full h-full" style={{background: 'linear-gradient(to right, rgba(7, 21, 33, 0.98) 0%, rgba(7, 21, 33, 0.72) 45%, rgba(7, 21, 33, 0.18) 100%), linear-gradient(to top, rgba(7, 21, 33, 0.9) 0%, transparent 40%)'}} />
    </div>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Our Global Reach</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.2] mb-6 tracking-tight">
          Connecting Brands.<br />Everywhere You Look.
        </h1>
        <p className="text-gray-300 text-[15px] md:text-lg leading-relaxed mb-10 max-w-[500px]">
          Discover our rapidly expanding network of 150+ premium digital displays across major metropolitan hubs. Unleash the power of high-impact advertising globally.
        </p>
        <div className="flex gap-4">
          <a href="#locations" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg shadow-sm group">
            Explore Screens
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Global Footprint Stats */}
  <section className="py-16 bg-white border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
        <div className="flex flex-col">
          <h3 className="text-4xl md:text-5xl font-bold text-[#071521] mb-2">150+</h3>
          <p className="text-[13px] font-semibold text-gray-800 uppercase tracking-widest mb-2">Premium Screens</p>
          <p className="text-[12px] text-gray-500">LED &amp; digital billboards worldwide</p>
        </div>
        <div className="flex flex-col lg:border-l border-gray-100 lg:px-8 mt-6 lg:mt-0">
          <h3 className="text-4xl md:text-5xl font-bold text-[#071521] mb-2">25+</h3>
          <p className="text-[13px] font-semibold text-gray-800 uppercase tracking-widest mb-2">Major Cities</p>
          <p className="text-[12px] text-gray-500">Business &amp; leisure destinations</p>
        </div>
        <div className="flex flex-col lg:border-l border-gray-100 lg:px-8 mt-6 lg:mt-0">
          <h3 className="text-4xl md:text-5xl font-bold text-[#071521] mb-2">12+</h3>
          <p className="text-[13px] font-semibold text-gray-800 uppercase tracking-widest mb-2">Key Markets</p>
          <p className="text-[12px] text-gray-500">Across 4 distinct continents</p>
        </div>
        <div className="flex flex-col lg:border-l border-gray-100 lg:px-8 mt-6 lg:mt-0">
          <h3 className="text-4xl md:text-5xl font-bold text-[#071521] mb-2">24/7</h3>
          <p className="text-[13px] font-semibold text-gray-800 uppercase tracking-widest mb-2">Active Network</p>
          <p className="text-[12px] text-gray-500">Always on, always visible</p>
        </div>
      </div>
    </div>
  </section>
  {/* Location Discovery */}
  <section id="locations" className="py-24 bg-slate-50 border-t border-gray-100 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Side: Heading & Content */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Network Discovery</span>
          </div>
          <h2 className="text-4xl md:text-[44px] font-bold text-[#071521] mb-6 tracking-tight leading-[1.22]">
            Strategic Placements Worldwide.
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-md">
            Explore our premier network of high-visibility digital real estate. From immersive takeovers to dynamic highway billboards, secure placements in the world's most sought-after locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#071521] hover:text-white transition-colors rounded-lg shadow-sm group">
              Request Complete Directory
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
        {/* Right Side: Interactive Map + Directory */}
        <div className="w-full lg:w-[60%] flex flex-col md:flex-row rounded-2xl border border-gray-200/90 shadow-[0_20px_50px_rgba(7,21,33,0.08)] overflow-hidden bg-white h-[640px] md:h-[530px]">
          {/* Directory Sidebar */}
          <div className="shrink-0 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col bg-white z-10 w-full md:w-[350px] lg:w-[360px] h-[340px] md:h-full relative">
            {/* Panel Header */}
            <div className="p-4 sm:p-5 border-b border-gray-100 shrink-0 bg-[#F8FAFC]">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-[15px] font-bold text-[#071521] tracking-tight">Available Screens</h3>
                  <p className="text-[11px] text-[#5B778D] font-medium">Network directory</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#168BEB]/10 text-[#168BEB] border border-[#168BEB]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB] animate-pulse" />150+ Online
                </span>
              </div>
              {/* Search Input */}
              <div className="relative w-full">
                <input type="text" placeholder="Search locations, cities..." className="screen-search-input w-full bg-white border border-gray-200 text-[12px] pl-10 pr-4 py-2.5 rounded-xl outline-none focus:border-[#168BEB] focus:ring-2 focus:ring-[#168BEB]/15 transition-all text-[#071521] placeholder-gray-400 shadow-sm" style={{paddingLeft: 38}} />
                <svg className="absolute text-gray-400 pointer-events-none" style={{width: 15, height: 15, left: 13, top: '50%', transform: 'translateY(-50%)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>
            {/* Scrollable Cards List */}
            <div className="screens-directory-scroll p-2 flex flex-col gap-1.5" style={{overflowY: 'auto', flex: '1 1 0%', minHeight: '0'}}>
              {/* Card 1 */}
              <div className="screen-item flex items-center p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-[#F4F7FA] hover:shadow-sm transition-all duration-200 cursor-pointer group" style={{gap: 16}} data-location="times square new york city ny usa">
                <div className="shrink-0 bg-gray-200 rounded-lg overflow-hidden relative shadow-sm" style={{width: 74, height: 54}}>
                  <img src="/images/city_ny.jpg" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" alt="Times Square" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-[#071521]/80 text-white">NY</span>
                </div>
                <div className="flex flex-col justify-center flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-[13px] font-bold text-[#071521] group-hover:text-[#168BEB] transition-colors truncate">Times Square</h4>
                  </div>
                  <p className="text-[11px] text-[#5B778D] truncate mb-1">New York City, NY</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold text-[#071521] bg-gray-100 px-1.5 py-0.5 rounded">18,000 sq ft</span>
                    <span className="text-[9px] text-[#5B778D]">P6.67 LED</span>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="screen-item flex items-center p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-[#F4F7FA] hover:shadow-sm transition-all duration-200 cursor-pointer group" style={{gap: 16}} data-location="marina screen dubai uae">
                <div className="shrink-0 bg-gray-200 rounded-lg overflow-hidden relative shadow-sm" style={{width: 74, height: 54}}>
                  <img src="/images/city_dubai.jpg" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" alt="Dubai Marina" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-[#071521]/80 text-white">DXB</span>
                </div>
                <div className="flex flex-col justify-center flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-[13px] font-bold text-[#071521] group-hover:text-[#168BEB] transition-colors truncate">Marina Screen</h4>
                  </div>
                  <p className="text-[11px] text-[#5B778D] truncate mb-1">Dubai Marina, UAE</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold text-[#071521] bg-gray-100 px-1.5 py-0.5 rounded">12,500 sq ft</span>
                    <span className="text-[9px] text-[#5B778D]">3,840Hz Refresh</span>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="screen-item flex items-center p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-[#F4F7FA] hover:shadow-sm transition-all duration-200 cursor-pointer group" style={{gap: 16}} data-location="central station london uk europe">
                <div className="shrink-0 bg-gray-200 rounded-lg overflow-hidden relative shadow-sm" style={{width: 74, height: 54}}>
                  <img src="/images/corporate.jpg" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" alt="London Central" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-[#071521]/80 text-white">LDN</span>
                </div>
                <div className="flex flex-col justify-center flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-[13px] font-bold text-[#071521] group-hover:text-[#168BEB] transition-colors truncate">Central Station</h4>
                  </div>
                  <p className="text-[11px] text-[#5B778D] truncate mb-1">London, UK</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold text-[#071521] bg-gray-100 px-1.5 py-0.5 rounded">8,200 sq ft</span>
                    <span className="text-[9px] text-[#5B778D]">Indoor Curved</span>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="screen-item flex items-center p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-[#F4F7FA] hover:shadow-sm transition-all duration-200 cursor-pointer group" style={{gap: 16}} data-location="highway billboard los angeles ca usa">
                <div className="shrink-0 bg-gray-200 rounded-lg overflow-hidden relative shadow-sm" style={{width: 74, height: 54}}>
                  <img src="/images/led_billboard.jpg" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" alt="LA Highway" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-[#071521]/80 text-white">LA</span>
                </div>
                <div className="flex flex-col justify-center flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-[13px] font-bold text-[#071521] group-hover:text-[#168BEB] transition-colors truncate">Highway Spectacular</h4>
                  </div>
                  <p className="text-[11px] text-[#5B778D] truncate mb-1">Los Angeles, CA</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold text-[#071521] bg-gray-100 px-1.5 py-0.5 rounded">14,000 sq ft</span>
                    <span className="text-[9px] text-[#5B778D]">10,000 Nits</span>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="screen-item flex items-center p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-[#F4F7FA] hover:shadow-sm transition-all duration-200 cursor-pointer group" style={{gap: 16}} data-location="marina bay sands singapore downtown asia">
                <div className="shrink-0 bg-gray-200 rounded-lg overflow-hidden relative shadow-sm" style={{width: 74, height: 54}}>
                  <img src="/images/city_singapore.jpg" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" alt="Singapore Bay" />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-[#071521]/80 text-white">SG</span>
                </div>
                <div className="flex flex-col justify-center flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-[13px] font-bold text-[#071521] group-hover:text-[#168BEB] transition-colors truncate">Marina Bay Gateway</h4>
                  </div>
                  <p className="text-[11px] text-[#5B778D] truncate mb-1">Downtown, Singapore</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-semibold text-[#071521] bg-gray-100 px-1.5 py-0.5 rounded">9,800 sq ft</span>
                    <span className="text-[9px] text-[#5B778D]">Ultra-Fine Pitch</span>
                  </div>
                </div>
              </div>
              {/* Bottom Action */}
              <div className="p-3 text-center border-t border-gray-100/90 mt-auto bg-white/95 sticky bottom-0 backdrop-blur-xs">
                <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-[#071521] hover:bg-[#0D2942] text-white text-[11px] font-bold transition-colors shadow-sm">
                  <span>Explore All 150+ Screens</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
          {/* Map Area */}
          <div className="flex-grow relative bg-gray-100 z-0 h-full min-h-[300px] overflow-hidden">
            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-74.05,40.68,-73.90,40.78&layer=mapnik" className="absolute inset-0 w-full h-full border-none" style={{filter: 'grayscale(1) contrast(1.1) opacity(0.85)'}} tabIndex={-1} />
            {/* Floating Active Fleet Badge */}
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-semibold text-[#071521]">
              <span className="w-2 h-2 rounded-full bg-[#168BEB] animate-ping" />
              <span>Global Fleet Active</span>
            </div>
            {/* Map Pin */}
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group cursor-pointer" style={{top: '48%', left: '48%'}}>
              <div className="w-7 h-7 bg-[#168BEB] rounded-full border-[3px] border-white shadow-2xl relative flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              </div>
              <div className="bg-[#071521] text-white text-[11px] font-bold px-2.5 py-1 shadow-2xl rounded-md whitespace-nowrap group-hover:bg-[#168BEB] transition-colors border border-white/10">Times Square, NY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Explore by City Section */}
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Popular Cities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            Explore by City
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
            Discover our top cities and their premium screen locations.
          </p>
        </div>
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button id="city-prev" className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#071521] hover:border-[#071521] transition-colors rounded-lg bg-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button id="city-next" className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#071521] hover:border-[#071521] transition-colors rounded-lg bg-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="overflow-hidden -mx-3 px-3">
        <div id="city-slider" className="flex transition-transform duration-500 ease-out" style={{width: '100%'}}>
          {/* NY */}
          <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3">
            <a href="#locations" className="group block relative h-64 md:h-72 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/city_ny.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="New York" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.3) 100%)', pointerEvents: 'none'}} />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">New York</h3>
                <p className="text-[12px] font-medium text-gray-300">12 Screens</p>
              </div>
            </a>
          </div>
          {/* Dubai */}
          <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3">
            <a href="#locations" className="group block relative h-64 md:h-72 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/city_dubai.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dubai" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.3) 100%)', pointerEvents: 'none'}} />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">Dubai</h3>
                <p className="text-[12px] font-medium text-gray-300">10 Screens</p>
              </div>
            </a>
          </div>
          {/* London */}
          <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3">
            <a href="#locations" className="group block relative h-64 md:h-72 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/city_london.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="London" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.3) 100%)', pointerEvents: 'none'}} />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">London</h3>
                <p className="text-[12px] font-medium text-gray-300">8 Screens</p>
              </div>
            </a>
          </div>
          {/* Singapore */}
          <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3">
            <a href="#locations" className="group block relative h-64 md:h-72 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/city_singapore.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Singapore" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.3) 100%)', pointerEvents: 'none'}} />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">Singapore</h3>
                <p className="text-[12px] font-medium text-gray-300">6 Screens</p>
              </div>
            </a>
          </div>
          {/* Tokyo */}
          <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3">
            <a href="#locations" className="group block relative h-64 md:h-72 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/premium_tech_world_map.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Tokyo" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.3) 100%)', pointerEvents: 'none'}} />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">Tokyo</h3>
                <p className="text-[12px] font-medium text-gray-300">5 Screens</p>
              </div>
            </a>
          </div>
          {/* Paris */}
          <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-3">
            <a href="#locations" className="group block relative h-64 md:h-72 overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <img src="/images/premium_led_display.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Paris" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.3) 100%)', pointerEvents: 'none'}} />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold text-white mb-1">Paris</h3>
                <p className="text-[12px] font-medium text-gray-300">3 Screens</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div></section>
  {/* Our LED Solutions */}
  <section className="py-24 bg-slate-50 border-t border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Our LED Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] tracking-tight">
            A Screen for Every Strategy.
          </h2>
        </div>
        <div className="md:w-1/3 md:ml-auto">
          <p className="text-gray-500 text-[14px] leading-relaxed">
            From dominant outdoor spectaculars to innovative custom shapes, our network offers a diverse range of LED solutions to execute your vision with precision.
          </p>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {/* Format 1 */}
        <div className="group border border-gray-100 rounded-sm overflow-hidden hover:border-[#168BEB] transition-colors shadow-sm bg-white">
          <div className="h-48 overflow-hidden relative bg-gray-100">
            <img src="/images/led_billboard.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Outdoor LED Video Wall" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-[#071521] mb-3">Outdoor LED Video Wall</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Massive, weather-resistant digital displays designed to capture vehicular traffic with unmissable, high-frequency impressions and maximum brightness.
            </p>
          </div>
        </div>
        {/* Format 2 */}
        <div className="group border border-gray-100 rounded-sm overflow-hidden hover:border-[#168BEB] transition-colors shadow-sm bg-white">
          <div className="h-48 overflow-hidden relative bg-gray-100">
            <img src="/images/retail.jpg" data-fallback="/images/corporate.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Indoor LED Video Wall" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-[#071521] mb-3">Indoor LED Video Wall</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              High-resolution, fine-pitch displays perfectly calibrated for close viewing distances in retail, corporate lobbies, and control rooms.
            </p>
          </div>
        </div>
        {/* Format 3 */}
        <div className="group border border-gray-100 rounded-sm overflow-hidden hover:border-[#168BEB] transition-colors shadow-sm bg-white">
          <div className="h-48 overflow-hidden relative bg-gray-100">
            <img src="/images/city_ny.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vehicle LED" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-[#071521] mb-3">Vehicle LED</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Dynamic mobile advertising displays integrated onto trucks and promotional vehicles to take your brand directly to the audience.
            </p>
          </div>
        </div>
        {/* Format 4 */}
        <div className="group border border-gray-100 rounded-sm overflow-hidden hover:border-[#168BEB] transition-colors shadow-sm bg-white">
          <div className="h-48 overflow-hidden relative bg-gray-100">
            <img src="/images/corporate.jpg" data-fallback="/images/hero_macro.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Floor LED" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-[#071521] mb-3">Floor LED</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Ultra-durable, interactive LED flooring systems designed to create immersive environments for events, stages, and exhibitions.
            </p>
          </div>
        </div>
        {/* Format 5 */}
        <div className="group border border-gray-100 rounded-sm overflow-hidden hover:border-[#168BEB] transition-colors shadow-sm bg-white">
          <div className="h-48 overflow-hidden relative bg-gray-100">
            <img src="/images/hero_macro.jpg" data-fallback="/images/city_singapore.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Transparent LED" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-[#071521] mb-3">Transparent LED</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Innovative see-through digital glass displays that turn storefront windows into high-impact media without blocking natural light.
            </p>
          </div>
        </div>
        {/* Format 6 */}
        <div className="group border border-gray-100 rounded-sm overflow-hidden hover:border-[#168BEB] transition-colors shadow-sm bg-white">
          <div className="h-48 overflow-hidden relative bg-gray-100">
            <img src="/images/city_dubai.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Custom LED Varieties" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-[#071521] mb-3">Custom Varieties</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Bespoke architectural integrations including curved displays, 360-degree globes, and uniquely shaped structural builds like bottle shapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Audience Intelligence */}
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image/Graphic */}
        <div className="relative w-full rounded-sm overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center" style={{minHeight: 450}}>
          <img src="/images/world_map_network.jpg" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" alt="Data Map" />
          {/* Floating Data Cards */}
          <div className="absolute top-12 left-8 bg-white/95 backdrop-blur-md p-6 rounded-sm shadow-xl border border-gray-100 w-56 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#168BEB]/10 flex items-center justify-center text-[#168BEB]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-[#071521] uppercase">Live Traffic</span>
            </div>
            <h4 className="text-3xl font-bold text-[#071521] mb-1">1.2M</h4>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Daily Impressions</p>
          </div>
          <div className="absolute bottom-12 right-8 bg-[#071521]/95 backdrop-blur-md p-6 rounded-sm shadow-xl border border-white/10 w-56 transform hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-white uppercase">Engagement</span>
            </div>
            <h4 className="text-3xl font-bold text-white mb-1">+48%</h4>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Dwell Time Increase</p>
          </div>
        </div>
        {/* Right Content */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Network Data</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            Audience Intelligence &amp; Analytics.
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
            We don't just provide screen space; we provide actionable data. Our network utilizes advanced measurement technologies to ensure your message hits the right demographics at the perfect moment.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-slate-50 border border-gray-100 flex items-center justify-center text-[#168BEB] mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#071521] mb-1">Verified Impressions</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">Real-time vehicular and pedestrian traffic data providing highly accurate proof-of-play and audience metrics.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-slate-50 border border-gray-100 flex items-center justify-center text-[#168BEB] mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#071521] mb-1">Dynamic Triggers</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">Programmatic capabilities allowing content to change instantly based on live weather, time-of-day, or external events.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-slate-50 border border-gray-100 flex items-center justify-center text-[#168BEB] mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#071521] mb-1">Demographic Profiling</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">Aggregated, privacy-compliant mobile data to ensure your campaign targets high-indexing locations for your ideal customer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="bg-[#071521] text-white flex flex-col md:flex-row items-stretch">
    <div className="w-full md:w-[40%] lg:w-[45%] shrink-0 relative min-h-[300px]">
      <img src="/images/city_dubai.jpg" className="absolute inset-0 w-full h-full object-cover" />
    </div>
    <div className="w-full md:w-[60%] lg:w-[55%] p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center">
      <div className="max-w-[800px]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Let's Work Together</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 leading-[1.22] tracking-tight">Have a Project in Mind?</h2>
        <p className="text-gray-300 max-w-md mb-8 text-[13px] leading-relaxed">
          Whether you need an LED wall, want to advertise, or have a unique space, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#168BEB] text-white text-[13px] font-semibold hover:bg-[#0D2942] transition-colors rounded-lg">
            Get an LED Wall
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <Link to="/advertise" className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-gray-500 text-white text-[13px] font-semibold hover:border-white transition-colors rounded-lg">
            Advertise With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
  {/* Mobile Sticky Quick Action Bar (Luxury Touch & High Conversion) */}
  <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(7, 21, 33,0.12)] flex items-center justify-between" style={{zIndex: 90, padding: '0.65rem 1.25rem', gap: '0.75rem'}}>
    <a href="tel:+919746021869" className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md bg-gray-50 border border-gray-200 text-[#071521] text-[12px] font-semibold hover:bg-gray-100 transition-colors" style={{flex: '1 1 0%', minWidth: 0}}>
      <svg className="w-4 h-4 text-[#168BEB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      <span className="truncate">Call</span>
    </a>
    <a href="https://wa.me/919746021869" target="_blank" className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-semibold hover:bg-emerald-100 transition-colors" style={{flex: '1 1 0%', minWidth: 0}}>
      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.777.879 2.796.879 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.495 10-10 10-1.748 0-3.385-.45-4.823-1.24l-7.177 1.88 1.909-6.983c-.933-1.499-1.469-3.267-1.469-5.157 0-5.505 4.495-10 10-10s10 4.495 10 10z" /></svg>
      <span className="truncate">WhatsApp</span>
    </a>
    <Link to="/contact" className="flex items-center justify-center gap-1 py-2.5 px-2 rounded-md bg-[#168BEB] text-white text-[12px] font-bold shadow-sm hover:bg-[#0D2942] transition-colors" style={{flex: '1 1 0%', minWidth: 0}}>
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
