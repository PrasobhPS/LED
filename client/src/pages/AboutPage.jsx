import { Link } from 'react-router-dom';
import ProjectClose from '../components/ProjectClose';
import { clientLogos } from '../data/clients';

export default function AboutPage() {
  return (
<>
  {/* Hero Section: Index Mirror Layout */}
  <section className="relative w-full overflow-hidden flex items-center mt-[72px] bg-[#071521] min-h-[500px] md:min-h-[580px] lg:min-h-[620px]">
    {/* Right Side Image Container (With Feathered Left Edge) */}
    <div className="hero-slider-wrap absolute top-0 right-0 w-full md:w-[45%] lg:w-[60vw] h-full overflow-hidden z-10" style={{WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%)'}}>
      <img src="/images/work/brighter-tomorrow.png" className="w-full h-full object-cover" alt="Architectural LED facade, A Brighter Tomorrow" />
      <div className="hero-slide-overlay" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(rgba(7, 21, 33, 0.22), rgba(7, 21, 33, 0.22)), linear-gradient(to right, rgba(7, 21, 33, 0.5) 0%, rgba(7, 21, 33, 0.22) 35%, rgba(7, 21, 33, 0.05) 70%, transparent 100%), linear-gradient(to top, rgba(7, 21, 33, 0.95) 0%, rgba(7, 21, 33, 0.45) 20%, transparent 55%), linear-gradient(to bottom, rgba(7, 21, 33, 0.45) 0%, transparent 20%)'}} />
    </div>
    <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 flex items-center h-full w-full py-12 md:py-24 lg:py-28">
      <div className="max-w-2xl w-full py-2 md:py-6 gsap-fade-up">
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">LED Screen
            Solutions</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.2] mb-5 md:mb-6 tracking-tight">
          Big Screens.<br />Bigger Impressions.
        </h1>
        <p className="text-gray-300 text-[15px] md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[500px]">
          We design, supply and install high-quality LED screens for events, retail, corporate and public
          spaces. Turn your ideas into stunning visual experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg group">
            Get an LED Wall
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* About Us */}
  <section id="about" className="py-24 bg-white border-t border-gray-100 stagger-section">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 items-center gap-16">
      {/* Left Side: Content & Vertical Features */}
      <div className="gsap-fade-up lg:pr-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">About Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
          Visual Technology for a Brighter Tomorrow
        </h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
          We are a leading LED screen solution provider, delivering immersive visual experiences for brands,
          businesses and events. From concept to installation, we bring your vision to life with cutting-edge
          technology and unmatched support.
        </p>
        {/* Premium Vertical Feature List */}
        <div className="mb-10 border-t border-gray-100 pt-8">
          {/* Feature 1 */}
          <div className="flex items-start stagger-card" style={{gap: '1.5rem', marginBottom: '2.5rem'}}>
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center text-[#168BEB] shrink-0 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[15px] font-bold text-[#071521] mb-1">Premium Quality Engineering</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed">We use display hardware chosen for
                brightness, colour and the life of the installation.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start stagger-card" style={{gap: '1.5rem'}}>
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center text-[#168BEB] shrink-0 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h4 className="text-[15px] font-bold text-[#071521] mb-1">End-to-End Solutions</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed">From structural design and permissions
                to installation and support after the screen is live.</p>
            </div>
          </div>
        </div>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#071521] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg shadow-sm group">
          Get an LED Wall
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
      {/* Right Side: Image Collage */}
      <div className="relative gsap-fade-up mt-12 lg:mt-0" style={{paddingBottom: '10%', paddingRight: '8%'}}>
        {/* Main Background Image */}
        <div className="rounded-sm overflow-hidden relative z-10 shadow-lg border border-gray-100 bg-gray-100" style={{aspectRatio: '4/3'}}>
          <img src="/images/work/susi-fragrances.png" alt="SUSI Fragrances storefront" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" style={{ objectPosition: 'center 28%' }} />
        </div>
        {/* Overlapping Image (Bottom Right) */}
        <div className="absolute rounded-sm overflow-hidden z-20 shadow-2xl bg-white" style={{bottom: 0, right: 0, width: '60%', border: '8px solid white', aspectRatio: '4/3'}}>
          <img src="/images/work/vara-alath-tower.png" alt="Nila Advertising outdoor LED screen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" style={{ objectPosition: 'center 22%' }} />
        </div>
        {/* Floating Badge (Top Left) */}
        <div className="absolute bg-white border border-gray-100 p-4 lg:p-5 rounded-sm z-30 shadow-xl flex items-center gap-4" style={{top: '-1.5rem', left: '-1.5rem'}}>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#071521] rounded-full flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-[14px] lg:text-[16px] font-bold text-[#071521] leading-none mb-1">100%</p>
            <p className="text-[9px] lg:text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Solutions (Split GSAP Pinned Stack) */}
  <section id="gsap-pinned-stack" className="bg-gray-50 py-24 border-t border-gray-100 overflow-hidden">
    <div className="mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12" style={{maxWidth: 1400}}>
      {/* Left Side: Heading */}
      <div className="lg:w-[40%] flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[12px] font-bold tracking-[0.2em] text-[#071521] uppercase">Our Solutions</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.22] tracking-tight text-[#071521] mb-8">
          Screens for<br />Every Space
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-8 max-w-md">
          Indoor walls, outdoor billboards, facades and retail displays, sized for the space and the
          distance people view them from.
        </p>
        <div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#071521] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg shadow-sm group">
            Get an LED Wall
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      {/* Right Side: The Pinned Container */}
      <div id="stack-container" className="lg:w-[60%] w-full relative" style={{height: 500}}>
        {/* Card 1 */}
        <div className="stack-item absolute inset-0 flex flex-col md:flex-row overflow-hidden shadow-2xl" style={{backgroundColor: '#071521', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', zIndex: 1}}>
          <div style={{flex: 1, position: 'relative', minHeight: 200}}>
            <img src="/images/work/kanju-hut.png" alt="Kanji Hut illuminated storefront" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%'}} />
            <div className="hidden md:block" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(7, 21, 33, 1))'}}>
            </div>
            <div className="md:hidden" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 33, 1), transparent)'}}>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center" style={{flex: 1}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#168BEB', color: '#071521'}}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Indoor LED Solutions</h3>
            <p className="text-[14px] leading-relaxed mb-4" style={{color: '#9ca3af'}}>Designed for retail spaces,
              offices and indoor venues where people stand close to the screen.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]" style={{color: '#168BEB'}}>
              Get an LED Wall <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="stack-item absolute inset-0 flex flex-col md:flex-row overflow-hidden shadow-2xl" style={{backgroundColor: '#071521', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', zIndex: 2, transform: 'translateY(150vh)'}}>
          <div style={{flex: 1, position: 'relative', minHeight: 200}}>
            <img src="/images/work/biggest-screen-kerala.jpg" alt="The biggest screen" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
            <div className="hidden md:block" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(7, 21, 33, 1))'}}>
            </div>
            <div className="md:hidden" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 33, 1), transparent)'}}>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center" style={{flex: 1}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#168BEB', color: '#071521'}}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Outdoor LED Displays</h3>
            <p className="text-[14px] leading-relaxed mb-4" style={{color: '#9ca3af'}}>Built to withstand the
              elements. Built for billboards, building facades and outdoor sites that need to stay readable
              in daylight and after dark.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]" style={{color: '#168BEB'}}>
              Get an LED Wall <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 3 */}
        <div className="stack-item absolute inset-0 flex flex-col md:flex-row overflow-hidden shadow-2xl" style={{backgroundColor: '#071521', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', zIndex: 3, transform: 'translateY(150vh)'}}>
          <div style={{flex: 1, position: 'relative', minHeight: 200}}>
            <img src="/images/work/dream-haven-truck.png" alt="Dream Haven mobile LED truck" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
            <div className="hidden md:block" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(7, 21, 33, 1))'}}>
            </div>
            <div className="md:hidden" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 33, 1), transparent)'}}>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center" style={{flex: 1}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#168BEB', color: '#071521'}}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Mobile LED Displays</h3>
            <p className="text-[14px] leading-relaxed mb-4" style={{color: '#9ca3af'}}>Vehicle-mounted LED panels
              that carry a campaign on the road, with a screen large enough to read from the street.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]" style={{color: '#168BEB'}}>
              Get an LED Wall <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 4 */}
        <div className="stack-item absolute inset-0 flex flex-col md:flex-row overflow-hidden shadow-2xl" style={{backgroundColor: '#071521', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', zIndex: 4, transform: 'translateY(150vh)'}}>
          <div style={{flex: 1, position: 'relative', minHeight: 200}}>
            <img src="/images/work/brighter-tomorrow.png" alt="Architectural LED facade, A Brighter Tomorrow" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
            <div className="hidden md:block" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(7, 21, 33, 1))'}}>
            </div>
            <div className="md:hidden" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 33, 1), transparent)'}}>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center" style={{flex: 1}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#168BEB', color: '#071521'}}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Custom &amp; Creative</h3>
            <p className="text-[14px] leading-relaxed mb-4" style={{color: '#9ca3af'}}>Curved, flexible, and
              innovative architectural designs that push the boundaries of imagination. If you can dream
              it, we can build it.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]" style={{color: '#168BEB'}}>
              Get an LED Wall <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Card 5 */}
        <div className="stack-item absolute inset-0 flex flex-col md:flex-row overflow-hidden shadow-2xl" style={{backgroundColor: '#071521', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.5rem', zIndex: 5, transform: 'translateY(150vh)'}}>
          <div style={{flex: 1, position: 'relative', minHeight: 200}}>
            <img src="/images/work/matha-jewellers.png" alt="Matha Jewellers storefront display" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%'}} />
            <div className="hidden md:block" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(7, 21, 33, 1))'}}>
            </div>
            <div className="md:hidden" style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 21, 33, 1), transparent)'}}>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center" style={{flex: 1}}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#168BEB', color: '#071521'}}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Digital Signage</h3>
            <p className="text-[14px] leading-relaxed mb-4" style={{color: '#9ca3af'}}>High-impact commercial
              displays designed to capture attention and communicate your message dynamically in malls,
              airports, and public venues.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]" style={{color: '#168BEB'}}>
              Get an LED Wall <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Why Choose Us */}
  <section className="py-24 bg-[#071521] relative overflow-hidden">
    {/* Abstract geometric accent */}
    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#168BEB] rounded-full blur-[120px] opacity-10 pointer-events-none">
    </div>
    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-500 rounded-full blur-[100px] opacity-10 pointer-events-none">
    </div>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left: Title */}
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Our
              Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.22] mb-6 tracking-tight">
            Why Partner<br />With Us?
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
            We supply and install the wall, then stay available for service. From the structure on site
            to the screen that is switched on, the same team handles the job.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold text-[12px] uppercase tracking-widest hover:text-[#168BEB] transition-colors">
            Get an LED Wall
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        {/* Right: Features Grid */}
        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-10 lg:gap-12">
          {/* Feature 1 */}
          <div className="group">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#168BEB] group-hover:border-[#168BEB] transition-all duration-300">
              <svg className="w-6 h-6 text-[#168BEB] group-hover:text-[#071521] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x={4} y={4} width={16} height={16} rx={2} />
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
                <circle cx="8.5" cy="15.5" r="1.5" fill="currentColor" />
                <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Premium Hardware</h4>
            <p className="text-[14px] text-gray-400 leading-relaxed">Sourced from top-tier manufacturers, our
              LED panels guarantee extreme brightness, color accuracy, and longevity.</p>
          </div>
          {/* Feature 2 */}
          <div className="group">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#168BEB] group-hover:border-[#168BEB] transition-all duration-300">
              <svg className="w-6 h-6 text-[#168BEB] group-hover:text-[#071521] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx={12} cy={5} r={2} />
                <path d="M12 7l-7 14" />
                <path d="M12 7l7 14" />
                <line x1={7} y1={16} x2={17} y2={16} />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Custom Engineering</h4>
            <p className="text-[14px] text-gray-400 leading-relaxed">No two spaces are alike. We design
              structural supports and screen dimensions specifically tailored to your location.</p>
          </div>
          {/* Feature 3 */}
          <div className="group mt-[20px]">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#168BEB] group-hover:border-[#168BEB] transition-all duration-300">
              <svg className="w-6 h-6 text-[#168BEB] group-hover:text-[#071521] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x={2} y={3} width={20} height={13} rx={2} />
                <path d="M8 21h8" />
                <path d="M12 16v5" />
                <path d="M7 9.5l3.5 3.5 6.5-6.5" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Seamless Integration</h4>
            <p className="text-[14px] text-gray-400 leading-relaxed">After installation we walk your team
              through the display and stay available when the screen needs attention.</p>
          </div>
          {/* Feature 4 */}
          <div className="group mt-[20px]">
            <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#168BEB] group-hover:border-[#168BEB] transition-all duration-300">
              <svg className="w-6 h-6 text-[#168BEB] group-hover:text-[#071521] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={9} />
                <polyline points="12 6 12 12 16 14" />
                <circle cx={12} cy={12} r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Aftercare</h4>
            <p className="text-[14px] text-gray-400 leading-relaxed">The same team can come back for service
              and maintenance after the screen is installed.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Featured Projects */}
  <section id="projects" className="py-24 bg-white border-t border-gray-100 stagger-section">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative group gsap-fade-up">
          <img src="/images/work/biggest-screen-kerala.jpg" alt="The biggest screen" className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="p-4 sm:p-5 rounded-xl border border-white/20 shadow-xl backdrop-blur-md" style={{backgroundColor: 'rgba(7, 21, 33, 0.85)', WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)'}}>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#35C1F4] mb-1">KERALA</p>
              <p className="text-[14px] sm:text-[15px] font-semibold text-white leading-snug">The biggest screen</p>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="gsap-fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Featured
              Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            Real Screens. Real Impact.
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
            Explore our latest LED screen installations across various industries and locations.
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {/* List Item 1 */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#168BEB] hover:bg-slate-50 transition-colors cursor-pointer group stagger-card">
              <div className="flex items-center gap-4">
                <img src="/images/work/biggest-screen-kerala.jpg" className="w-16 h-12 rounded-md object-cover" style={{ objectPosition: 'center' }} alt="The biggest screen" />
                <div>
                  <h4 className="font-bold text-[#071521] text-[13px]">The biggest screen</h4>
                  <p className="text-[11px] text-gray-500">Roadside LED wall</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#168BEB] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* List Item 2 */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#168BEB] hover:bg-slate-50 transition-colors cursor-pointer group stagger-card">
              <div className="flex items-center gap-4">
                <img src="/images/work/aakash-edappally.png" className="w-16 h-12 rounded-md object-cover" style={{ objectPosition: 'center 28%' }} alt="Moulavi Books Stationery billboard" />
                <div>
                  <h4 className="font-bold text-[#071521] text-[13px]">Moulavi Books Stationery</h4>
                  <p className="text-[11px] text-gray-500">Outdoor LED Screen</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#168BEB] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* List Item 3 */}
            <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#168BEB] hover:bg-slate-50 transition-colors cursor-pointer group stagger-card">
              <div className="flex items-center gap-4">
                <img src="/images/work/susi-fragrances.png" className="w-16 h-12 rounded-md object-cover" style={{ objectPosition: 'center 28%' }} alt="SUSI Fragrances storefront" />
                <div>
                  <h4 className="font-bold text-[#071521] text-[13px]">SUSI Fragrances</h4>
                  <p className="text-[11px] text-gray-500">Retail LED Screen</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#168BEB] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#071521] text-white text-[12px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg">
            View Our Projects →
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/* Trusted By */}
  <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase text-center">Trusted
          By</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#071521] leading-[1.22] tracking-tight text-center">
        Leading Brands &amp; Businesses
      </h2>
    </div>
    {/* Infinite Logo Slider */}
    <div className="logo-slider max-w-[1400px] mx-auto w-full px-6">
      <div className="logo-slide-track">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div className="logo-item" key={`${logo.name}-${index}`}>
            <img src={logo.src} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
  {/* Our Process Section (Ultra-Premium Obsidian Architectural Pipeline) */}
  <section className="text-white relative overflow-hidden border-y border-white/10" style={{paddingTop: '7.5rem', paddingBottom: '7.5rem', background: 'radial-gradient(circle at 15% 15%, rgba(22, 139, 235, 0.12) 0%, transparent 55%), radial-gradient(circle at 85% 85%, rgba(53, 193, 244, 0.08) 0%, transparent 55%), #071521'}}>
    {/* Subtle Technical Grid Texture */}
    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" style={{marginBottom: '4rem'}}>
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#168BEB] animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#35C1F4] uppercase">Turnkey Execution Framework</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-6">
          From Blueprint to <span className="text-[#168BEB]">Illuminated Screen.</span>
        </h2>
        <p className="text-gray-400 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed font-normal">
          Four stages from the first site visit through installation and support.
        </p>
      </div>
      {/* Horizontal Connecting Progress Rail (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto relative px-8" style={{marginBottom: '3.5rem'}}>
        {/* Glowing Connecting Guideline */}
        <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#168BEB]/40 to-transparent z-0" />
        {/* Node 01 */}
        <div className="relative z-10 flex items-center gap-2.5 bg-[#071521] px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
          <span className="w-6 h-6 rounded-full bg-[#168BEB] text-white flex items-center justify-center text-[11px] font-extrabold shadow-sm">01</span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-200">Discovery</span>
        </div>
        {/* Node 02 */}
        <div className="relative z-10 flex items-center gap-2.5 bg-[#071521] px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
          <span className="w-6 h-6 rounded-full bg-white/10 text-gray-300 flex items-center justify-center text-[11px] font-bold">02</span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">Engineering</span>
        </div>
        {/* Node 03 */}
        <div className="relative z-10 flex items-center gap-2.5 bg-[#071521] px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
          <span className="w-6 h-6 rounded-full bg-white/10 text-gray-300 flex items-center justify-center text-[11px] font-bold">03</span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">Rigging</span>
        </div>
        {/* Node 04 */}
        <div className="relative z-10 flex items-center gap-2.5 bg-[#071521] px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
          <span className="w-6 h-6 rounded-full bg-white/10 text-gray-300 flex items-center justify-center text-[11px] font-bold">04</span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300">Support</span>
        </div>
      </div>
      {/* Process Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 items-stretch">
        {/* Step 1 */}
        <div className="group relative bg-[#0D1E2D]/80 hover:bg-[#0F2436] rounded-2xl border border-white/10 hover:border-[#168BEB]/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg overflow-hidden backdrop-blur-md" style={{padding: '1.75rem'}}>
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#168BEB] transition-all duration-300" />
          <div>
            {/* Header with Phase Identifier */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#35C1F4] uppercase">Phase 01</span>
              <span className="text-[11px] font-mono text-gray-400">01 / 04</span>
            </div>
            {/* Architectural Visual Thumbnail (Strict Fixed Height) */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-black/40" style={{height: 160, marginBottom: '1.5rem'}}>
              <img src="/images/work/kanju-hut.png" alt="Kanji Hut illuminated storefront" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" style={{height: 160, width: '100%', objectFit: 'cover', objectPosition: 'center 28%'}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2D] via-transparent to-transparent opacity-80 pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#071521]/90 text-white border border-white/15 uppercase tracking-wider">
                On site
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#35C1F4] transition-colors" style={{marginBottom: '0.75rem'}}>Strategic Feasibility</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6" style={{marginBottom: '1.5rem'}}>
              We analyze ambient lux exposure, viewing distance angles, electrical feeds, and architectural load ratings to establish your exact display configuration.
            </p>
          </div>
          {/* Technical Micro-Chips (Generous Padding & Real Gap) */}
          <div className="border-t border-white/10 flex flex-wrap mt-auto" style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', gap: '0.5rem'}}>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>Pitch Audit</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>Lux Profiling</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(22,139,235,0.15)', border: '1px solid rgba(22,139,235,0.3)', color: '#38bdf8'}}>Scope ROI</span>
          </div>
        </div>
        {/* Step 2 */}
        <div className="group relative bg-[#0D1E2D]/80 hover:bg-[#0F2436] rounded-2xl border border-white/10 hover:border-[#168BEB]/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg overflow-hidden backdrop-blur-md" style={{padding: '1.75rem'}}>
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#168BEB] transition-all duration-300" />
          <div>
            {/* Header with Phase Identifier */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#35C1F4] uppercase">Phase 02</span>
              <span className="text-[11px] font-mono text-gray-400">02 / 04</span>
            </div>
            {/* Architectural Visual Thumbnail (Strict Fixed Height) */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-black/40" style={{height: 160, marginBottom: '1.5rem'}}>
              <img src="/images/work/vara-alath-tower.png" alt="Nila Advertising outdoor LED screen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" style={{height: 160, width: '100%', objectFit: 'cover', objectPosition: 'center 22%'}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2D] via-transparent to-transparent opacity-80 pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#071521]/90 text-white border border-white/15 uppercase tracking-wider">
                Facade
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#35C1F4] transition-colors" style={{marginBottom: '0.75rem'}}>3D CAD &amp; Engineering</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6" style={{marginBottom: '1.5rem'}}>
              Our mechanical teams build millimetric sub-frame CAD schematics, power distribution diagrams, and photorealistic 3D visual renders in your environment.
            </p>
          </div>
          {/* Technical Micro-Chips (Generous Padding & Real Gap) */}
          <div className="border-t border-white/10 flex flex-wrap mt-auto" style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', gap: '0.5rem'}}>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>CAD Drawings</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>3D Simulation</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(22,139,235,0.15)', border: '1px solid rgba(22,139,235,0.3)', color: '#38bdf8'}}>Permit Pack</span>
          </div>
        </div>
        {/* Step 3 */}
        <div className="group relative bg-[#0D1E2D]/80 hover:bg-[#0F2436] rounded-2xl border border-white/10 hover:border-[#168BEB]/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg overflow-hidden backdrop-blur-md" style={{padding: '1.75rem'}}>
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#168BEB] transition-all duration-300" />
          <div>
            {/* Header with Phase Identifier */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#35C1F4] uppercase">Phase 03</span>
              <span className="text-[11px] font-mono text-gray-400">03 / 04</span>
            </div>
            {/* Architectural Visual Thumbnail (Strict Fixed Height) */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-black/40" style={{height: 160, marginBottom: '1.5rem'}}>
              <img src="/images/work/dream-haven-truck.png" alt="Dream Haven mobile LED truck" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" style={{height: 160, width: '100%', objectFit: 'cover', objectPosition: 'center'}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2D] via-transparent to-transparent opacity-80 pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#071521]/90 text-white border border-white/15 uppercase tracking-wider">
                Installed
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#35C1F4] transition-colors" style={{marginBottom: '0.75rem'}}>Precision Rigging</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6" style={{marginBottom: '1.5rem'}}>
              Certified AV technicians manage structural mounting, electrical interlocks, sub-millimeter module alignment, and optical color-tuning.
            </p>
          </div>
          {/* Technical Micro-Chips (Generous Padding & Real Gap) */}
          <div className="border-t border-white/10 flex flex-wrap mt-auto" style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', gap: '0.5rem'}}>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>Certified Rigging</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>Seam Tuning</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(22,139,235,0.15)', border: '1px solid rgba(22,139,235,0.3)', color: '#38bdf8'}}>Color Balance</span>
          </div>
        </div>
        {/* Step 4 */}
        <div className="group relative bg-[#0D1E2D]/80 hover:bg-[#0F2436] rounded-2xl border border-white/10 hover:border-[#168BEB]/60 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg overflow-hidden backdrop-blur-md" style={{padding: '1.75rem'}}>
          {/* Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#168BEB] transition-all duration-300" />
          <div>
            {/* Header with Phase Identifier */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#35C1F4] uppercase">Phase 04</span>
              <span className="text-[11px] font-mono text-gray-400">04 / 04</span>
            </div>
            {/* Architectural Visual Thumbnail (Strict Fixed Height) */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-white/10 bg-black/40" style={{height: 160, marginBottom: '1.5rem'}}>
              <img src="/images/work/aakash-edappally.png" alt="Moulavi Books Stationery billboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" style={{height: 160, width: '100%', objectFit: 'cover', objectPosition: 'center 28%'}} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E2D] via-transparent to-transparent opacity-80 pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#071521]/90 text-white border border-white/15 uppercase tracking-wider">
                On air
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#35C1F4] transition-colors" style={{marginBottom: '0.75rem'}}>Launch &amp; Support</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6" style={{marginBottom: '1.5rem'}}>
              We switch the display on, walk your team through how it runs, and stay available for service after installation.
            </p>
          </div>
          {/* Technical Micro-Chips (Generous Padding & Real Gap) */}
          <div className="border-t border-white/10 flex flex-wrap mt-auto" style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', gap: '0.5rem'}}>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>Handover</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>On-site support</span>
            <span className="inline-flex items-center text-[11px] font-medium rounded" style={{padding: '0.3rem 0.65rem', background: 'rgba(22,139,235,0.15)', border: '1px solid rgba(22,139,235,0.3)', color: '#38bdf8'}}>Aftercare</span>
          </div>
        </div>
      </div>
      {/* Bottom Executive Assurance Ribbon (Generous Top Margin & Padding) */}
      <div className="rounded-2xl bg-gradient-to-r from-[#0D1E2D] via-[#091825] to-[#071521] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden" style={{marginTop: '4.5rem', padding: '2.25rem 2.75rem'}}>
        <div className="flex items-center gap-5 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#168BEB]/15 border border-[#168BEB]/30 flex items-center justify-center text-[#35C1F4] shrink-0 shadow-inner">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2" style={{gap: '0.75rem', marginBottom: '0.5rem'}}>
              <h4 className="font-bold text-white text-base">Certified Engineering &amp; Lifetime Turnkey Support</h4>
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider rounded-full" style={{padding: '0.3rem 0.75rem', background: 'rgba(22, 139, 235, 0.18)', border: '1px solid rgba(22, 139, 235, 0.4)', color: '#38bdf8', lineHeight: 1}}>After install</span>
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-2xl font-normal">
              Every installation includes stamped structural engineering approvals, complete municipal permitting support, and a guaranteed rapid on-site SLA response.
            </p>
          </div>
        </div>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-white hover:text-[#071521] transition-all duration-300 rounded-xl shrink-0 shadow-lg shadow-[#168BEB]/25 group relative z-10">
          <span>Get an LED Wall</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
  {/* Client Testimonials */}
  <section className="py-24 bg-white border-t border-gray-100 relative z-10">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#071521]">Client
              Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Trusted by businesses, event organizers and brands worldwide.
          </p>
          <div className="flex gap-4">
            <button className="testi-prev w-10 h-10 rounded-lg border border-gray-300 text-[#071521] flex items-center justify-center hover:bg-[#071521] hover:text-white transition-colors">←</button>
            <button className="testi-next w-10 h-10 rounded-lg border border-gray-300 text-[#071521] flex items-center justify-center hover:bg-[#071521] hover:text-white transition-colors">→</button>
          </div>
        </div>
        <div className="lg:w-2/3 min-w-0 overflow-hidden owl-carousel testimonials-carousel">
          {/* Testimonial 1 */}
          <div className="bg-slate-50 border border-gray-200 rounded-sm p-8 text-[#071521] h-full flex flex-col justify-between">
            <svg className="w-6 h-6 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-[14px] font-medium leading-relaxed mb-8">"SANS GLOWMETRIC transformed our product
              launch.
              The LED screen quality was outstanding and the team was incredibly professional."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#071521] text-white text-[12px] font-bold flex items-center justify-center" aria-hidden="true">AM</div>
              <div>
                <h5 className="font-bold text-[13px] text-[#071521]">Anjali Menon</h5>
                <p className="text-[11px] text-gray-500">Marketing Head, Kochi</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-slate-50 border border-gray-200 rounded-sm p-8 text-[#071521] h-full flex flex-col justify-between">
            <svg className="w-6 h-6 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-[14px] font-medium leading-relaxed mb-8">"We've worked with many vendors, but
              SANS GLOWMETRIC stands out for their quality, support and attention to detail."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#071521] text-white text-[12px] font-bold flex items-center justify-center" aria-hidden="true">RN</div>
              <div>
                <h5 className="font-bold text-[13px] text-[#071521]">Rahul Nair</h5>
                <p className="text-[11px] text-gray-500">Event Manager, Calicut</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-slate-50 border border-gray-200 rounded-sm p-8 text-[#071521] h-full flex flex-col justify-between">
            <svg className="w-6 h-6 text-[#168BEB] mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-[14px] font-medium leading-relaxed mb-8">"The best LED screen experience we've
              had. Crystal clear visuals and on-time installation."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#071521] text-white text-[12px] font-bold flex items-center justify-center" aria-hidden="true">SV</div>
              <div>
                <h5 className="font-bold text-[13px] text-[#071521]">Sneha Varghese</h5>
                <p className="text-[11px] text-gray-500">Brand Manager, Dubai</p>
              </div>
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
