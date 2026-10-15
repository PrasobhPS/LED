import { Link } from 'react-router-dom';

export default function InstallationCard({ item }) {
  return (
    <div className="installation-card group flex flex-col">
      <div className="installation-img-wrap">
        <img src={item.image} alt={item.title} style={{ objectPosition: item.focus || 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/20 to-transparent" />
        <span className="absolute top-4 left-4 bg-[#168BEB] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">{item.badge}</span>
        <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm border border-white/10">{item.note}</span>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[12px]">
          <span className="flex items-center gap-1.5 font-medium">
            <svg className="w-3.5 h-3.5 text-[#168BEB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {item.location}
          </span>
          <span className="text-gray-300">{item.type}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-[18px] font-bold text-[#071521] mb-2 group-hover:text-[#168BEB] transition-colors leading-snug">{item.title}</h3>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{item.description}</p>
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-[12px]">
          <span className="font-semibold text-gray-700">{item.environment}</span>
          <Link to="/projects" className="font-bold text-[#071521] group-hover:text-[#168BEB] inline-flex items-center gap-1">Details →</Link>
        </div>
      </div>
    </div>
  );
}
