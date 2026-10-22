import { Link } from 'react-router-dom';
import { NAV } from '../data/navigation';

export default function SiteFooter() {
  return (
    <footer className="bg-[#071521] text-white py-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="site-footer-grid">
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <img src="/images/sanspng.png" alt="SANS GLOWMETRIC" className="h-6 object-contain footer-brand-logo" />
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[400px]">
              Custom LED walls and display solutions, supplied and installed for the space you have in mind.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#168BEB] mb-3">USA Office</p>
            <p className="text-[13px] text-gray-300 leading-relaxed">
              470 Olde Worthington Rd<br />
              Westerville, OH 43082<br />
              United States
            </p>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#168BEB] mt-8 mb-3">India Office</p>
            <p className="text-[13px] text-gray-300 leading-relaxed">
              Niche Techies Inc.<br />
              Anaarworx Building<br />
              Rajagiri Valley Road, Infopark Expressway<br />
              Kakkanad, Kochi, Kerala 682039<br />
              India
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#168BEB] mb-3">Contact</p>
            <a href="tel:+919746021869" className="block text-[13px] text-gray-300 hover:text-white transition-colors mb-2">+91 97460 21869</a>
            <a href="mailto:contact@sansglowmetric.com" className="block text-[13px] text-gray-300 hover:text-white transition-colors mb-5">contact@sansglowmetric.com</a>
            <a href="https://wa.me/919746021869" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex text-gray-500 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.777.879 2.796.879 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.495 10-10 10-1.748 0-3.385-.45-4.823-1.24l-7.177 1.88 1.909-6.983c-.933-1.499-1.469-3.267-1.469-5.157 0-5.505 4.495-10 10-10s10 4.495 10 10z" /></svg>
            </a>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#168BEB] mb-3">Explore</p>
            <div className="flex flex-col gap-2 text-[13px] text-gray-400 font-medium">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 border-t border-white/10 pt-6 mt-8">
          <p>© 2026 SANS GLOWMETRIC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
