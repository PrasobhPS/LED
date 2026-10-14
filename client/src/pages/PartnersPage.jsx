import ProjectClose from '../components/ProjectClose';

const GROUPS = [
  {
    title: 'Technology partners',
    intro: 'The display technologies we specify on LED wall projects.',
    marks: [
      ['Fine-Pitch', 'Modules'],
      ['Video', 'Processors'],
      ['Calibration', 'Systems'],
      ['Outdoor', 'Cabinets'],
    ],
  },
  {
    title: 'Suppliers',
    intro: 'The supply categories behind a complete installation.',
    marks: [
      ['Cabinet', 'Hardware'],
      ['Power', 'Supplies'],
      ['Mounting', 'Steel'],
      ['Signal', 'Cable'],
    ],
  },
  {
    title: 'Brands we work with',
    intro: 'Commercial brands that use our LED walls.',
    logos: [
      { name: 'Compunet Digital', src: '/images/partners/compunet.png' },
      { name: 'Susi Perfume Lab', src: '/images/partners/susi-perfume.png' },
      { name: 'Meen Hut', src: '/images/partners/meen-hut.jpg' },
    ],
  },
  {
    title: 'Clientele',
    intro: 'Organizations where screens from our work are already installed.',
    logos: [
      { name: 'Alpha Academy', src: '/images/partners/alpha.png' },
      { name: 'Indian Overseas Bank', src: '/images/partners/indian-overseas-bank.png' },
      { name: 'Rural Cooperative Bank Thalassery', src: '/images/partners/rural-cooperative-bank.svg' },
    ],
  },
];

function LogoTile({ children }) {
  return <div className="logo-tile">{children}</div>;
}

export default function PartnersPage() {
  return (
    <>
      <section className="relative w-full overflow-hidden flex mt-[72px] bg-[#071521] py-16 md:py-24 lg:py-32">
        <div className="relative z-50 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">Partners</span>
          </div>
          <h1 className="font-bold text-white leading-[1.2] mb-6 tracking-tight text-4xl md:text-5xl lg:text-[56px] max-w-[800px]">
            Technology, supply and the people we build for.
          </h1>
          <p className="text-gray-300 text-[15px] mb-4 max-w-[560px] leading-relaxed">
            Technology partners, suppliers, brands and clientele connected to our LED wall work.
          </p>
        </div>
      </section>
      {GROUPS.map((group, index) => (
        <section key={group.title} className={index % 2 === 0 ? 'py-20 bg-white border-b border-gray-100' : 'py-20 bg-slate-50 border-b border-gray-100'}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071521] mb-3">{group.title}</h2>
            <p className="text-gray-500 mb-10 max-w-xl">{group.intro}</p>
            <div className={group.logos ? 'logo-wall is-trio' : 'logo-wall'}>
              {group.marks?.map(([line, sub]) => (
                <LogoTile key={line}>
                  <span className="logo-mark">
                    <strong>{line}</strong>
                    <span>{sub}</span>
                  </span>
                </LogoTile>
              ))}
              {group.logos?.map((logo) => (
                <LogoTile key={logo.name}>
                  <img src={logo.src} alt={logo.name} />
                </LogoTile>
              ))}
            </div>
          </div>
        </section>
      ))}
      <ProjectClose />
    </>
  );
}
