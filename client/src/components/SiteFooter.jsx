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
            <a href="https://wa.me/919746021869" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex text-green-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
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
