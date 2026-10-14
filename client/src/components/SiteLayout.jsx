import { Link, Outlet, useMatches } from 'react-router-dom';
import { useSiteEffects } from '../hooks/useSiteEffects';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function SiteLayout() {
  const matches = useMatches();
  const handle = [...matches].reverse().find((match) => match.handle)?.handle || {};
  useSiteEffects(handle.title || 'SANS GLOWMETRIC | Custom LED Walls');

  return (
    <div>
      <SiteHeader active={handle.active || ''} />
      <Outlet />
      <SiteFooter />
      <div id="mobile-quick-actions" className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(7, 21, 33,0.12)] flex items-center justify-between">
        <a href="tel:+919746021869" className="mobile-quick-action-btn flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-gray-50 border border-gray-200 text-[#071521] text-[12px] font-semibold hover:bg-gray-100 transition-colors">
          <svg className="w-4 h-4 text-[#168BEB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="truncate">Call</span>
        </a>
        <a href="https://wa.me/919746021869" target="_blank" rel="noreferrer" className="mobile-quick-action-btn flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[12px] font-semibold hover:bg-emerald-100 transition-colors">
          <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.777.879 2.796.879 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.495 10-10 10-1.748 0-3.385-.45-4.823-1.24l-7.177 1.88 1.909-6.983c-.933-1.499-1.469-3.267-1.469-5.157 0-5.505 4.495-10 10-10s10 4.495 10 10z" />
          </svg>
          <span className="truncate">WhatsApp</span>
        </a>
        <Link to="/contact" className="mobile-quick-action-btn flex items-center justify-center gap-1 py-2.5 px-2 rounded-lg bg-[#168BEB] text-white text-[12px] font-bold shadow-sm hover:bg-[#0D2942] transition-colors">
          <span className="truncate">LED Wall</span>
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
      <button id="backToTopBtn" aria-label="Back to top" type="button">
        <svg width={24} height={24} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
