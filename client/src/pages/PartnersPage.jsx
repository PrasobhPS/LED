import ProjectClose from '../components/ProjectClose';

const TECHNOLOGY = [
  {
    title: 'Fine-pitch modules',
    text: 'Indoor walls for spaces where people stand close to the screen.',
    icon: 'M4 6h16M4 12h16M4 18h16',
  },
  {
    title: 'Video processors',
    text: 'Processing that holds a wall together as one picture.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Calibration systems',
    text: 'Color and brightness matched from cabinet to cabinet.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    title: 'Outdoor cabinets',
    text: 'Weather-ready cabinets for facades, roadsides and open sites.',
    icon: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  },
];

const SUPPLIERS = [
  {
    title: 'Cabinet hardware',
    text: 'Frames, locks and the metal that holds a wall together.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
  {
    title: 'Power supplies',
    text: 'Power sized for the wall, the brightness and the site.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Mounting steel',
    text: 'Structure for walls, building facades and billboard conversions.',
    icon: 'M4 6h16M4 12h16M4 18h10',
  },
  {
    title: 'Signal cable',
    text: 'Cabling between the cabinets, the processor and the source.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  },
];

const BRANDS = [
  { name: 'Compunet Digital', src: '/images/partners/compunet.png' },
  { name: 'Susi Perfume Lab', src: '/images/partners/susi-perfume.png' },
  { name: 'Meen Hut', src: '/images/partners/meen-hut.jpg' },
];

const CLIENTELE = [
  { name: 'Alpha Academy', src: '/images/partners/alpha.png' },
  { name: 'Indian Overseas Bank', src: '/images/partners/indian-overseas-bank.png' },
  { name: 'Thalassery Co-operative Rural Bank', src: '/images/partners/rural-cooperative-bank.svg' },
];

function Icon({ path }) {
  return (
    <div className="w-12 h-12 rounded-full bg-slate-50 border border-gray-200 flex items-center justify-center text-[#168BEB] shrink-0">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={path} />
      </svg>
    </div>
  );
}

function Capability({ item }) {
  return (
    <div className="flex items-start gap-4">
      <Icon path={item.icon} />
      <div>
        <h3 className="text-[15px] font-bold text-[#071521] mb-1">{item.title}</h3>
        <p className="text-[13px] text-gray-500 leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
}

function LogoRow({ title, intro, logos }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#071521] mb-2">{title}</h3>
      <p className="text-gray-500 text-[14px] mb-6 max-w-xl">{intro}</p>
      <div className="partner-logo-grid">
        {logos.map((logo) => (
          <figure key={logo.name} className="partner-logo-card">
            <img src={logo.src} alt={logo.name} />
            <figcaption>{logo.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#071521]">
        <img src="/images/screens/sr-4.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="LED wall installation" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #071521 0%, rgba(7, 21, 33, 0.78) 48%, rgba(7, 21, 33, 0.4) 100%)', pointerEvents: 'none' }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
            Technology, supply<br />and the people we build for.
          </h1>
          <p className="text-gray-300 text-[15px] max-w-2xl mx-auto leading-relaxed">
            The display technology, the supply behind an installation, and the brands and clients on the walls we deliver.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">How a wall is built</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] tracking-tight">
              Technology partners and suppliers.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-[#071521] mb-2">Technology partners</h3>
              <p className="text-gray-500 text-[14px] mb-8">The display technologies we specify on LED wall projects.</p>
              <div className="flex flex-col gap-8">
                {TECHNOLOGY.map((item) => <Capability key={item.title} item={item} />)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#071521] mb-2">Suppliers</h3>
              <p className="text-gray-500 text-[14px] mb-8">The supply categories behind a complete installation.</p>
              <div className="flex flex-col gap-8">
                {SUPPLIERS.map((item) => <Capability key={item.title} item={item} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#071521] uppercase">On the wall</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#071521] leading-[1.22] tracking-tight">
              Brands we work with, and the clientele behind them.
            </h2>
          </div>
          <LogoRow
            title="Brands we work with"
            intro="Commercial brands that use our LED walls."
            logos={BRANDS}
          />
          <div className="clientele-block">
            <LogoRow
              title="Clientele"
              intro="Organizations where screens from our work are already installed."
              logos={CLIENTELE}
            />
          </div>
        </div>
      </section>

      <ProjectClose />
    </>
  );
}
