import { Link } from 'react-router-dom';
import { NAV } from '../data/navigation';

function linkClass(active, id) {
  const base = 'outline-none focus:outline-none focus:ring-0 transition-colors pb-1 select-none';
  if (active === id) return `${base} text-[#071521] border-b-2 border-[#168BEB]`;
  return `${base} hover:text-[#071521] border-b-2 border-transparent`;
}

export default function SiteHeader({ active }) {
  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 py-4 fixed top-0 z-[100]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center shrink-0 outline-none focus:outline-none">
            <img src="/images/sanspng-bluetheme.png" alt="SANS GLOWMETRIC" className="h-8 w-auto object-contain shrink-0 navbar-brand-logo" />
          </Link>
          <div className="hidden lg:flex gap-8 text-[13px] font-medium text-gray-500">
            {NAV.map((item) => (
              <Link key={item.id} to={item.to} className={linkClass(active, item.id)}>{item.label}</Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="px-5 py-2 rounded-lg text-[13px] font-semibold text-white bg-[#168BEB] hover:bg-[#0D2942] transition-colors outline-none focus:outline-none">
              Get an LED Wall
            </Link>
          </div>
          <div className="flex items-center gap-2.5 lg:hidden shrink-0">
            <Link to="/contact" className="whitespace-nowrap px-5 py-2.5 rounded-lg text-[12px] font-semibold text-[#071521] border border-gray-200 hover:border-[#071521] transition-colors bg-gray-50 shrink-0">
              LED Wall
            </Link>
            <button id="mobile-menu-open" className="p-2 rounded-md text-[#071521] hover:text-[#168BEB] hover:bg-gray-100 transition-colors focus:outline-none shrink-0" aria-label="Open Navigation Menu" type="button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="mobile-menu" className="fixed inset-0 hidden">
        <div id="mobile-menu-overlay" className="absolute inset-0 bg-[#071521]/80 backdrop-blur-md opacity-0 transition-opacity duration-300" />
        <div id="mobile-menu-panel" className="absolute right-0 top-0 bottom-0 w-[90%] sm:w-[85%] max-w-[420px] bg-white shadow-2xl transition-transform duration-300 flex flex-col">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/60">
            <Link to="/" className="flex items-center">
              <img src="/images/sanspng-bluetheme.png" alt="SANS GLOWMETRIC" className="h-6 object-contain mobile-menu-logo" />
            </Link>
            <button id="mobile-menu-close" className="p-2 rounded-full text-gray-500 hover:text-[#071521] hover:bg-gray-200/50 transition-colors" aria-label="Close Navigation Menu" type="button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-5 pt-4 pb-1">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#071521]/5 rounded-lg text-[11px] font-semibold text-[#071521]">
              <span className="w-2 h-2 rounded-full bg-[#168BEB] animate-pulse" />
              <span>Columbus, USA · Kochi, India</span>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto px-5 py-4 flex flex-col gap-2 text-[15px] font-medium text-[#071521]">
            {NAV.map((item) => (
              item.id === active ? (
                <Link key={item.id} to={item.to} className="mobile-nav-current flex items-center justify-between font-bold rounded-lg">
                  <span>{item.label}</span>
                  <span className="mobile-nav-current-badge">Current</span>
                </Link>
              ) : (
                <Link key={item.id} to={item.to} className="px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-[#168BEB] transition-colors">{item.label}</Link>
              )
            ))}
          </div>
          <div className="p-5 border-t border-gray-100 bg-gray-50/80 flex flex-col gap-2.5">
            <Link to="/contact" className="w-full py-3 text-center bg-[#168BEB] hover:bg-[#0D2942] text-white font-bold text-[13px] rounded-lg transition-colors shadow-sm">
              Get an LED Wall
            </Link>
            <div className="pt-2 flex items-center justify-between text-[11px] text-gray-500 font-medium">
              <a href="tel:+919746021869" className="hover:text-[#071521] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 97460 21869
              </a>
              <a href="mailto:contact@sansglowmetric.com" className="hover:text-[#071521] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
