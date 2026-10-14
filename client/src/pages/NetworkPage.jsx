import { Link } from 'react-router-dom';
import ProjectClose from '../components/ProjectClose';
import { installations } from '../data/installations';

export default function NetworkPage() {
  return (
    <>
      <section className="relative w-full flex items-center mt-[72px] overflow-hidden" style={{ backgroundColor: '#071521' }}>
        <div className="absolute inset-0 z-0 w-full h-full">
          <img src="/images/screens/sr-9.png" className="w-full h-full object-cover" alt="Completed LED wall" />
          <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(to right, rgba(7, 21, 33, 0.94) 0%, rgba(7, 21, 33, 0.72) 48%, rgba(7, 21, 33, 0.28) 100%)' }} />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Our Screens</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.2] mb-6 tracking-tight">
              Screens we have<br />supplied and installed.
            </h1>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-10 max-w-[500px]">
              A gallery of LED walls and displays from completed work. These are installations, not a list of screens available to book.
            </p>
            <Link to="/projects" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#168BEB] text-white text-[13px] font-bold hover:bg-[#0D2942] transition-colors rounded-lg">
              View Projects
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071521] mb-4 tracking-tight">Installation Gallery</h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Indoor and outdoor LED walls, facades, retail displays and billboard conversions we have delivered.
            </p>
          </div>
          <div className="screen-gallery">
            {installations.map((item) => (
              <figure key={item.id}>
                <img src={item.image} alt={item.title} />
                <figcaption>
                  <h3 className="text-[15px] font-bold text-[#071521] mb-1">{item.title}</h3>
                  <p className="text-[12px] text-gray-500">{item.location} · {item.environment}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <ProjectClose />
    </>
  );
}
