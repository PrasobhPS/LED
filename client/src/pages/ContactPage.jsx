import { Link } from 'react-router-dom';
import { useSiteEffects } from '../hooks/useSiteEffects';

export default function ContactPage() {
  useSiteEffects("Contact Us | SANS GLOWMETRIC");
  return (
<div>
  {/* Navbar */}
  <nav className="w-full bg-white border-b border-gray-100 py-4 fixed top-0 z-[100]">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img src="/images/sanspng-bluetheme.png" alt="SANS GLOWMETRIC Logo" className="h-8 w-auto object-contain shrink-0" style={{height: 32, maxHeight: 32, width: 'auto'}} />
      </Link>
      {/* Center Links */}
      <div className="hidden lg:flex gap-8 text-[13px] font-medium text-gray-500">
        <Link to="/about" className="hover:text-[#071521] transition-colors pb-1">About</Link>
        <Link to="/advertise" className="hover:text-[#071521] transition-colors pb-1">Advertise</Link>
        <Link to="/network" className="hover:text-[#071521] transition-colors pb-1">Our Screens</Link>
        <Link to="/projects" className="hover:text-[#071521] transition-colors pb-1">Projects</Link>
        <Link to="/partners" className="hover:text-[#071521] transition-colors pb-1">Partners</Link>
        <Link to="/contact" className="text-[#071521] border-b-2 border-[#168BEB] pb-1">Contact</Link>
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
        <Link to="/network" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Our Screens</Link>
        <Link to="/projects" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">Projects</Link>
        <Link to="/partners" className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors flex items-center justify-between">
          <span>Partners</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#071521] text-white font-normal">Join Us</span>
        </Link>
        <Link to="/contact" className="flex items-center justify-between font-bold text-white bg-[#168BEB]/10 px-3 py-2.5 rounded-lg border-l-4 border-[#168BEB]">
          <span>Contact</span>
          <span className="text-[10px] uppercase font-bold text-[#168BEB] tracking-wider">Current</span>
        </Link>
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
  {/* Split Screen Contact Section */}
  <section className="min-h-screen flex flex-col lg:flex-row mt-[72px]">
    {/* Left Side: Info (Navy Blue) */}
    <div className="contact-sidebar-sticky w-full lg:w-[45%] bg-[#071521] text-white p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#168BEB] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-lg">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">GET IN TOUCH</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2] tracking-tight">
          Let's build something <br />Iconic.
        </h1>
        <p className="text-gray-300 text-[15px] leading-relaxed mb-12 max-w-md">
          Whether you need a custom LED wall installation, want to advertise on our premium network, or have a property to digitize, our team is ready.
        </p>
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#168BEB]/10 flex items-center justify-center shrink-0 border border-[#168BEB]/20 text-[#168BEB]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Email Us</p>
              <a href="mailto:contact@sansglowmetric.com" className="font-semibold text-white text-[15px] hover:text-[#168BEB] transition-colors">contact@sansglowmetric.com</a>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#168BEB]/10 flex items-center justify-center shrink-0 border border-[#168BEB]/20 text-[#168BEB]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Call Us (24/7)</p>
              <a href="tel:+919746021869" className="font-semibold text-white text-[15px] hover:text-[#168BEB] transition-colors">+91 97460 21869</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Right Side: Form (White) */}
    <div className="w-full lg:w-[55%] bg-slate-50 p-6 sm:p-10 md:p-16 lg:p-24 flex items-center border-l border-gray-100">
      <div className="w-full max-w-2xl mx-auto">
        <form className="space-y-10" id="leadForm" noValidate>
          {/* Step 1: Intent */}
          <div>
            <h3 className="text-[18px] font-bold text-[#071521] mb-6">What are you looking for?</h3>
            <div id="intent-options" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option 1 */}
              <label className="group relative flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-sm cursor-pointer hover:border-[#071521] transition-colors has-[:checked]:border-[#168BEB] has-[:checked]:bg-[#fef9f0] shadow-sm">
                <input type="radio" name="intent" defaultValue="led_wall" className="hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center group-has-[:checked]:border-[#168BEB]">
                  <div className="w-2 h-2 rounded-full bg-[#168BEB] opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                </div>
                <span className="text-[13px] font-semibold text-[#071521]">I need a custom LED Wall</span>
              </label>
              {/* Option 2 */}
              <label className="group relative flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-sm cursor-pointer hover:border-[#071521] transition-colors has-[:checked]:border-[#168BEB] has-[:checked]:bg-[#fef9f0] shadow-sm">
                <input type="radio" name="intent" defaultValue="advertise" className="hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center group-has-[:checked]:border-[#168BEB]">
                  <div className="w-2 h-2 rounded-full bg-[#168BEB] opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                </div>
                <span className="text-[13px] font-semibold text-[#071521]">I want to Advertise</span>
              </label>
              {/* Option 3 */}
              <label className="group relative flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-sm cursor-pointer hover:border-[#071521] transition-colors has-[:checked]:border-[#168BEB] has-[:checked]:bg-[#fef9f0] shadow-sm">
                <input type="radio" name="intent" defaultValue="property" className="hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center group-has-[:checked]:border-[#168BEB]">
                  <div className="w-2 h-2 rounded-full bg-[#168BEB] opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                </div>
                <span className="text-[13px] font-semibold text-[#071521]">I have a Property Location</span>
              </label>
              {/* Option 4 */}
              <label className="group relative flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-sm cursor-pointer hover:border-[#071521] transition-colors has-[:checked]:border-[#168BEB] has-[:checked]:bg-[#fef9f0] shadow-sm">
                <input type="radio" name="intent" defaultValue="agency" className="hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center group-has-[:checked]:border-[#168BEB]">
                  <div className="w-2 h-2 rounded-full bg-[#168BEB] opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                </div>
                <span className="text-[13px] font-semibold text-[#071521]">Agency Enquiry</span>
              </label>
              {/* Option 5 */}
              <label className="group relative flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-sm cursor-pointer md:col-span-2 hover:border-[#071521] transition-colors has-[:checked]:border-[#168BEB] has-[:checked]:bg-[#fef9f0] shadow-sm">
                <input type="radio" name="intent" defaultValue="digitize" className="hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 flex items-center justify-center group-has-[:checked]:border-[#168BEB]">
                  <div className="w-2 h-2 rounded-full bg-[#168BEB] opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
                </div>
                <span className="text-[13px] font-semibold text-[#071521]">Digitize my Billboard</span>
              </label>
            </div>
            <p id="intent-error" className="field-error" hidden />
          </div>
          <p id="enquiry-status" className="enquiry-status" role="alert" hidden />
          {/* Step 2: Dynamic Fields (Hidden by default) */}
          <div id="step-2" className="hidden grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-200 transition-all duration-500">
            {/* Common Fields */}
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">First Name</label>
              <input type="text" required maxLength={80} autoComplete="given-name" className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="firstName" placeholder="John" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Last Name</label>
              <input type="text" required maxLength={80} autoComplete="family-name" className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="lastName" placeholder="Doe" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Email Address</label>
              <input type="email" required maxLength={180} autoComplete="email" className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="email" placeholder="john@example.com" />
            </div>
            {/* LED Wall Fields */}
            <div className="dynamic-group led_wall hidden md:col-span-2 grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Company / Organization</label>
                <input type="text" maxLength={160} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="company" placeholder="Acme Corp" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Project Description &amp; Dimensions</label>
                <textarea rows={3} maxLength={4000} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="projectDescription" placeholder="Tell us about your project requirements..." defaultValue={""} />
              </div>
            </div>
            {/* Advertise Fields */}
            <div className="dynamic-group advertise hidden md:col-span-2 grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Brand / Agency Name</label>
                <input type="text" maxLength={160} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="brandName" placeholder="Your Brand" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Campaign Goals</label>
                <textarea rows={3} maxLength={4000} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="campaignGoals" placeholder="What are you looking to achieve?" defaultValue={""} />
              </div>
            </div>
            {/* Property Fields */}
            <div className="dynamic-group property hidden md:col-span-2 grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Property Address</label>
                <input type="text" maxLength={300} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="propertyAddress" placeholder="123 Main St..." />
              </div>
            </div>
            {/* Agency Enquiry Fields */}
            <div className="dynamic-group agency hidden md:col-span-2 grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Agency Details</label>
                <textarea rows={3} maxLength={4000} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="agencyDetails" placeholder="Tell us about your agency and client needs..." defaultValue={""} />
              </div>
            </div>
            {/* Digitize Billboard Fields */}
            <div className="dynamic-group digitize hidden md:col-span-2 grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Current Billboard Details</label>
                <textarea rows={3} maxLength={4000} className="w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors" name="billboardDetails" placeholder="Where is your static board located and what size is it?" defaultValue={""} />
              </div>
            </div>
            {/* Shared Photo Upload */}
            <div className="dynamic-group shared-photo hidden md:col-span-2">
              <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Upload Photos/Creative (Optional)</label>
              <div className="w-full bg-white border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:border-[#071521] hover:bg-gray-50 transition-colors cursor-pointer group shadow-sm">
                <svg className="w-6 h-6 mx-auto mb-3 text-gray-400 group-hover:text-[#071521] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                <p className="text-[13px] text-gray-500">Drag &amp; drop files or <span className="text-[#071521] font-semibold">browse</span></p>
              </div>
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2 pt-4">
              <button type="submit" id="enquiry-submit" className="w-full py-4 bg-[#071521] rounded-lg text-[13px] font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#0D2942] transition-colors flex items-center justify-center gap-2 group">
                Submit Enquiry
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-[#071521] text-white py-12 border-t border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/sanspng.png" alt="SANS GLOWMETRIC Logo" className="h-6 object-contain" />
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
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
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
