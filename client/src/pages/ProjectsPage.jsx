import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
  const [active, setActive] = useState(null);
  const visible = installations.filter((item) => matches(item, filter));

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex items-center mt-[72px] overflow-hidden" style={{ backgroundColor: '#071521', minHeight: '500px' }}>
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="/images/work/biggest-screen-kerala.jpg"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
            alt="The biggest screen in Kerala"
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(to top, #071521 0%, transparent 25%), linear-gradient(to right, #071521 0%, #071521 38%, rgba(7, 21, 33, 0.85) 60%, rgba(7, 21, 33, 0.35) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-bold text-white leading-[1.15] mb-6 tracking-tight">
              LED installations.<br />Completed work.
            </h1>
            <p className="text-gray-300 text-[15px] md:text-base leading-relaxed max-w-[520px]">
              Outdoor walls, facades, billboards, indoor displays and retail installations from completed work.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#f5f7fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div id="portfolio-filters" className="projects-filter-bar">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={(e) => {
                  setFilter(item);
                  e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }}
                className={`filter-btn ${
                  item === filter
                    ? 'px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase bg-[#071521] text-white rounded-full shadow-sm'
                    : 'px-6 py-2.5 text-[12px] font-bold tracking-wider uppercase text-gray-500 hover:text-[#071521] hover:bg-gray-100 transition-colors rounded-full'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="project-spec-grid">
            {visible.map((item) => (
              <article key={item.id} className="project-spec-card">
                <button
                  type="button"
                  className="project-spec-photo"
                  aria-label={`View ${item.title}`}
                  onClick={() => setActive(item)}
                >
                  <img src={item.image} alt="" style={{ objectPosition: item.focus || 'center' }} />
                </button>
                <div className="project-spec-body">
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#168BEB] mb-2">{item.environment} · {item.type}</p>
                  <h2 className="text-xl font-bold text-[#071521] mb-2">{item.title}</h2>
                  <p className="project-spec-copy text-[13px] text-gray-500 leading-relaxed mb-4">{item.description}</p>
                  <dl className="project-spec-list">
                    <div><dt>Location</dt><dd>{item.location}</dd></div>
                    <div><dt>Setting</dt><dd>{item.environment}</dd></div>
                    <div><dt>Type</dt><dd>{item.type}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
          {active && createPortal(
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="project-lightbox-close"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <figure className="project-lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <img src={active.image} alt={active.title} />
            <figcaption>{active.title}</figcaption>
          </figure>
        </div>,
        document.body,
      )}
      <ProjectClose />
    </>
  );
}
