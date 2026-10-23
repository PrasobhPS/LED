import { Link } from 'react-router-dom';
import InstallationCard from '../components/InstallationCard';
import ProjectClose from '../components/ProjectClose';
import { installations } from '../data/installations';

const heroSlides = [
  { src: '/images/work/brighter-tomorrow.png', alt: 'Architectural LED facade, A Brighter Tomorrow', focus: 'center' },
  { src: '/images/work/vara-alath-tower.png', alt: 'Outdoor LED screen on Vara Alath Tower, Alathur', focus: 'center 22%' },
  { src: '/images/work/dream-home-billboard.png', alt: 'Outdoor residential LED billboard', focus: 'center' },
  { src: '/images/work/aakash-edappally.png', alt: 'Aakash LED billboard in Edappally', focus: 'center 28%' },
  { src: '/images/work/dream-haven-truck.png', alt: 'Dream Haven mobile LED truck', focus: 'center' },
];

const heroSlideOverlay = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)',
};

export default function HomePage() {
  return (
<>
  {/* Page Loader (Simple & Brand-Suitable for index.html only) */}
  <div id="page-loader" aria-hidden="false">
    <div className="loader-content">
      <img src="/images/sanspng_white.png" alt="SANS GLOWMETRIC" className="loader-logo" />
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  </div>
  {/* Hero Section: Exact Mirror Layout */}
  <section id="hero-section" className="relative w-full h-[calc(100vh-72px)] overflow-hidden flex mt-[72px] bg-[#071521]">
    {/* Right Side Slider Container (With Feathered Left Edge to prevent hard seams under the glass) */}
    <div className="hero-slider-wrap absolute top-0 right-0 w-full md:w-[45%] lg:w-[60vw] h-full overflow-hidden z-10" style={{WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%)'}}>
      {/* Slider Track Container */}
      <div id="hero-slider" className="absolute inset-0 w-full h-full z-0 flex transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
        {heroSlides.map((slide) => (
          <div key={slide.src} className="relative w-full h-full flex-shrink-0">
            <img src={slide.src} className="w-full h-full object-cover" style={{ objectPosition: slide.focus }} alt={slide.alt} />
            <div className="hero-slide-overlay" style={heroSlideOverlay} />
          </div>
        ))}
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
          <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">Custom LED Walls</span>
        </div>
        {/* Headline (slightly reduced max-width to respect the slant) */}
        <h1 className="font-bold text-white leading-[1.2] mb-6 tracking-tight text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] max-w-[500px]">
          Make Your Location<br />Impossible to Miss.
        </h1>
        {/* Description */}
        <p className="text-gray-300 text-[15px] md:text-base mb-10 max-w-[400px] leading-relaxed">
          Custom LED walls and display systems, designed around your location, viewing distance and the way
          the space is used.
        </p>
        {/* Buttons */}
        <div className="hidden lg:flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="flex items-center justify-center gap-3 px-6 py-3.5 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg shadow-sm group">
            Get an LED Wall
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    {/* Slider Controls */}
    <div id="hero-controls" className="absolute bottom-6 right-8 md:right-12 z-50 flex items-center gap-4 text-white text-[12px] font-semibold tracking-widest drop-shadow-md">
      <button id="hero-prev" className="hover:text-[#168BEB] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg></button>
      <span id="hero-counter">01 / 05</span>
      <button id="hero-next" className="hover:text-[#168BEB] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
          </path>
        </svg></button>
    </div>
  </section>
  {/* Custom LED Walls */}
  <section className="pt-24 pb-12 md:pb-16 bg-slate-50">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Custom LED Walls</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            A display built around your space.</h2>
          <p className="text-gray-500 max-w-lg leading-relaxed text-[15px] mb-8">
            From storefronts and building facades to indoor venues, we supply LED walls sized for the location, the viewing distance and the job the screen has to do.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg">
            Get an LED Wall
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="overflow-hidden rounded-md shadow-sm border border-gray-100" style={{ height: 320 }}>
          <img src="/images/work/vara-alath-tower.png" className="w-full h-full object-cover" style={{ objectPosition: 'center 22%' }} alt="Outdoor LED screen on Vara Alath Tower, Alathur" />
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
            Get an LED Wall
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
            real-time content. The biggest screen in Kerala is that kind of site: a roadside wall traffic can read after dark.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#071521] text-white text-[13px] font-medium hover:bg-[#0D2942] transition-colors rounded-lg">
            Get an LED Wall
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <div className="lg:col-span-8 w-full">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <img src="/images/work/biggest-screen-kerala.jpg" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 42%' }} alt="The biggest LED screen in Kerala, above a busy night street" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 bg-gradient-to-t from-[#071521]/95 via-[#071521]/55 to-transparent">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#35C1F4] mb-1">Kerala</p>
              <p className="text-white text-lg md:text-2xl font-bold leading-snug">The biggest screen in Kerala</p>
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
          {installations.map((item) => (
            <InstallationCard key={item.id} item={item} />
          ))}
        </div>
        {/* Bottom Progress Bar & Mobile Touch Indicator */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span id="installations-counter" className="text-[12px] font-bold tracking-wider text-[#071521]">01
              / 10</span>
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
            Get an LED Wall
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
              <span>Get an LED Wall</span>
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
                Whether you need one screen or displays across several sites, the same team can scope, supply and install them.
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
                Additional Displays
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ProjectClose />
</>


  );
}
