import { Link } from 'react-router-dom';
import { useSiteEffects } from '../hooks/useSiteEffects';

export default function ProjectsPage() {
  useSiteEffects("Projects | SANS GLOWMETRIC");
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
        <Link to="/projects" className="text-[#071521] border-b-2 border-[#168BEB] pb-1">Projects</Link>
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
        <Link to="/projects" className="mobile-nav-current flex items-center justify-between font-bold rounded-lg">
          <span>Projects</span>
          <span className="mobile-nav-current-badge">Current</span>
        </Link>
        <Link to="/partners" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors flex items-center justify-between">
          <span>Partners</span>
          <span className="mobile-nav-join">Join Us</span>
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
  <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#071521]">
    <img src="/images/hero2.jpg" data-fallback="/images/city_ny.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Projects Hero" />
    <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #071521 0%, rgba(7, 21, 33, 0.75) 50%, rgba(7, 21, 33, 0.45) 100%)', pointerEvents: 'none'}} />
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
      <div className="inline-flex items-center gap-3 mb-6">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Portfolio</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
        Iconic Displays.<br />Unforgettable Impact.
      </h1>
      <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Visual portfolio of outdoor LED, facades, billboards, indoor LED, retail and advertising network projects.
      </p>
    </div>
  </section>
  {/* Project Gallery */}
  <section className="py-24 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      {/* Filter Categories (Horizontal Slider on Mobile, Centered Wrap on Desktop) */}
      <div className="flex items-center gap-2 mb-10 md:mb-16 md:flex-wrap md:justify-center" id="portfolio-filters">
        <button data-filter="all" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase bg-[#071521] text-white rounded-full">All Projects</button>
        <button data-filter="Outdoor LED" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full">Outdoor LED</button>
        <button data-filter="Facades" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full">Facades</button>
        <button data-filter="Billboards" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full">Billboards</button>
        <button data-filter="Indoor LED" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full">Indoor LED</button>
        <button data-filter="Retail" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full">Retail</button>
        <button data-filter="Advertising Network" className="filter-btn px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full">Advertising Network</button>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" id="portfolio-grid">
        {/* Project 1 */}
        <Link to="/contact" data-category="Facades" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/city_ny.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Times Square Mega Screen" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Facades</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Times Square Mega Screen</h3>
            <p className="text-gray-300 text-[13px]">8,000 sq ft 3D capable wrap</p>
          </div>
        </Link>
        {/* Project 2 */}
        <Link to="/contact" data-category="Billboards" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/led_billboard.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Highway Spectacular Network" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Billboards</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">I-95 Spectaculars</h3>
            <p className="text-gray-300 text-[13px]">High-frequency commuter network</p>
          </div>
        </Link>
        {/* Project 3 */}
        <Link to="/contact" data-category="Retail" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/retail.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Luxury Retail Display" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Retail</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">5th Ave Flagship Store</h3>
            <p className="text-gray-300 text-[13px]">Transparent window displays</p>
          </div>
        </Link>
        {/* Project 4 */}
        <Link to="/contact" data-category="Outdoor LED" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/city_dubai.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Dubai Corner Screen" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Outdoor LED</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Downtown Dubai Wrap</h3>
            <p className="text-gray-300 text-[13px]">Curved 3D immersive display</p>
          </div>
        </Link>
        {/* Project 5 */}
        <Link to="/contact" data-category="Indoor LED" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/corporate.jpg" data-fallback="/images/hero_macro.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Corporate Lobby" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Indoor LED</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Tech Hub Lobby</h3>
            <p className="text-gray-300 text-[13px]">Fine-pitch interactive wall</p>
          </div>
        </Link>
        {/* Project 6 */}
        <Link to="/contact" data-category="Advertising Network" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/city_singapore.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Exhibition Floor" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Advertising Network</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Global Expo Center</h3>
            <p className="text-gray-300 text-[13px]">Immersive LED flooring &amp; canopy</p>
          </div>
        </Link>
        {/* Project 7 */}
        <Link to="/contact" data-category="Billboards" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/premium_led_display.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="London Gateway" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Billboards</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">London Gateway</h3>
            <p className="text-gray-300 text-[13px]">High-definition dual roadside</p>
          </div>
        </Link>
        {/* Project 8 */}
        <Link to="/contact" data-category="Indoor LED" className="portfolio-item group block relative w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500" style={{aspectRatio: '1/1'}}>
          <img src="/images/hero.jpg" data-fallback="/images/hero_macro.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Flagship Concert Hall" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.8) 40%, rgba(7, 21, 33, 0.2) 100%)', pointerEvents: 'none'}} />
          <div className="absolute top-6 right-6 z-10">
            <div className="inline-block px-4 py-1.5 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-md" style={{paddingTop: 5, paddingBottom: 5}}>Indoor LED</div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Flagship Concert Hall</h3>
            <p className="text-gray-300 text-[13px]">Dynamic stage backdrop</p>
          </div>
        </Link>
      </div>
      <div className="mt-16 text-center">
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#071521] border border-gray-300 text-[13px] font-bold uppercase tracking-wider hover:border-[#071521] transition-colors rounded-lg group">
          Load More Projects
          <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </Link>
      </div>
    </div>
  </section>
  {/* Client Testimonials */}
  <section className="py-24 bg-[#071521] text-white">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Client Feedback</span>
        </div>
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.22] mb-6 tracking-tight">
          Trusted by Industry Leaders.
        </h2>
        <p className="text-gray-400 text-[15px] max-w-2xl mx-auto leading-relaxed">
          Don't just take our word for it. Here is what our partners have to say about our custom digital installations and advertising networks.
        </p>
      </div>
      <div className="overflow-hidden relative -mx-3" id="testimonial-slider-container">
        <div className="flex transition-transform duration-500 ease-out" id="testimonial-slider">
          {/* Testimonial 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
            <div className="bg-[#071521] p-8 md:p-10 rounded-sm border border-white/5 flex flex-col h-full">
              <svg className="w-8 h-8 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-300 text-[14px] leading-relaxed mb-8 flex-grow">
                "The scale and brightness of the Times Square wrap exceeded our expectations. The installation team worked flawlessly within an incredibly tight timeline, delivering a screen that immediately dominated the intersection."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#168BEB] font-bold text-lg shrink-0">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-white text-[13px]">Marcus Reynolds</h4>
                  <p className="text-[11px] text-[#168BEB] uppercase tracking-wider">VP of Media, Global Ad Corp</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
            <div className="bg-[#071521] p-8 md:p-10 rounded-sm border border-white/5 flex flex-col h-full">
              <svg className="w-8 h-8 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-300 text-[14px] leading-relaxed mb-8 flex-grow">
                "Converting our static highway billboards to digital networks was a massive undertaking. The hardware reliability and content management software provided have completely revolutionized our revenue models."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#168BEB] font-bold text-lg shrink-0">
                  SL
                </div>
                <div>
                  <h4 className="font-bold text-white text-[13px]">Sarah Lin</h4>
                  <p className="text-[11px] text-[#168BEB] uppercase tracking-wider">Director, Interstate Outdoor</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
            <div className="bg-[#071521] p-8 md:p-10 rounded-sm border border-white/5 flex flex-col h-full">
              <svg className="w-8 h-8 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-300 text-[14px] leading-relaxed mb-8 flex-grow">
                "The transparent LED installation in our flagship store is an absolute showstopper. It maintains our high-end aesthetic while turning our entire glass facade into an immersive, dynamic canvas."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#168BEB] font-bold text-lg shrink-0">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-white text-[13px]">James Davenport</h4>
                  <p className="text-[11px] text-[#168BEB] uppercase tracking-wider">Head of Retail, Luxury Brands</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 4 */}
          <div className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
            <div className="bg-[#071521] p-8 md:p-10 rounded-sm border border-white/5 flex flex-col h-full">
              <svg className="w-8 h-8 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-300 text-[14px] leading-relaxed mb-8 flex-grow">
                "The customized curved display installed in our corporate lobby completely changed the atmosphere. Their technical team was exceptional from consultation to final handover."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#168BEB] font-bold text-lg shrink-0">
                  AT
                </div>
                <div>
                  <h4 className="font-bold text-white text-[13px]">Amanda Torres</h4>
                  <p className="text-[11px] text-[#168BEB] uppercase tracking-wider">VP Facilities, TechFlow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Controls */}
      <div className="flex justify-center gap-4 mt-12">
        <button id="testi-prev" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-[#168BEB] hover:text-[#071521] hover:border-[#168BEB] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button id="testi-next" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-[#168BEB] hover:text-[#071521] hover:border-[#168BEB] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  </section>
  {/* CTA Section */}
  <section className="bg-[#071521] text-white flex flex-col md:flex-row items-stretch">
    <div className="w-full md:w-[40%] lg:w-[45%] shrink-0 relative min-h-[300px]">
      <img src="/images/city_dubai.jpg" className="absolute inset-0 w-full h-full object-cover" alt="CTA Image" />
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
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
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
