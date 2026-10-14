import { useState } from 'react';
import ProjectClose from '../components/ProjectClose';
import { installations } from '../data/installations';

const FILTERS = ['All', 'Outdoor LED', 'Facades', 'Billboards', 'Indoor LED', 'Retail'];

function matches(item, filter) {
  if (filter === 'All') return true;
  if (filter === 'Outdoor LED') return item.environment === 'Outdoor';
  if (filter === 'Indoor LED') return item.environment === 'Indoor';
  return item.category === filter;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const visible = installations.filter((item) => matches(item, filter));

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#071521]">
        <img src="/images/screens/sr-10.png" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="LED wall project" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #071521 0%, rgba(7, 21, 33, 0.75) 50%, rgba(7, 21, 33, 0.45) 100%)', pointerEvents: 'none' }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
            LED installations.<br />Completed work.
          </h1>
          <p className="text-gray-300 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Outdoor walls, facades, billboards, indoor displays and retail installations, with the specification for each one.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mb-10 md:mb-16 md:flex-wrap md:justify-center">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={item === filter
                  ? 'px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase bg-[#071521] text-white rounded-full'
                  : 'px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full'}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="project-spec-grid">
            {visible.map((item) => (
              <article key={item.id} className="project-spec-card">
                <img src={item.image} alt={item.title} />
                <div className="project-spec-body">
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#168BEB] mb-2">{item.environment} · {item.type}</p>
                  <h2 className="text-xl font-bold text-[#071521] mb-2">{item.title}</h2>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{item.description}</p>
                  <dl className="project-spec-list">
                    <div><dt>Location</dt><dd>{item.location}</dd></div>
                    <div><dt>Indoor / Outdoor</dt><dd>{item.environment}</dd></div>
                    <div><dt>Dimensions</dt><dd>{item.dimensions}</dd></div>
                    <div><dt>Pixel pitch</dt><dd>{item.pitch}</dd></div>
                    <div><dt>Installation type</dt><dd>{item.type}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProjectClose />
    </>
  );
}
