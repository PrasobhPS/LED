import { installations } from '../data/installations';
import ProjectClose from './ProjectClose';

export default function RecentWork() {
  const selected = installations.slice(0, 3);
  return (
    <>
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.25] md:leading-[1.22] mb-4 tracking-tight">Recent Work.</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mb-10">
            A short look at LED walls we have supplied and installed.
          </p>
          <div className="screen-gallery">
            {selected.map((item) => (
              <figure key={item.id}>
                <img src={item.image} alt={item.title} style={{ objectPosition: item.focus || 'center' }} />
                <figcaption>
                  <h3 className="text-[15px] font-bold text-[#071521] mb-1">{item.title}</h3>
                  <p className="text-[12px] text-gray-500">{item.location} · {item.environment} · {item.type}</p>
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
