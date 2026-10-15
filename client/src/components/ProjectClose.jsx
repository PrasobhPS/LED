import { Link } from 'react-router-dom';

export default function ProjectClose() {
  return (
    <section className="bg-[#071521] text-white flex flex-col md:flex-row items-stretch">
      <div className="w-full md:w-[40%] lg:w-[45%] shrink-0 relative min-h-[300px]">
        <img src="/images/work/glass-facade.png" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 38%' }} alt="LED screen on a glass building facade" />
      </div>
      <div className="w-full md:w-[60%] lg:w-[55%] p-10 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-[800px]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Next step</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 leading-[1.22] tracking-tight">Have a project in mind?</h2>
          <p className="text-gray-300 max-w-md mb-8 text-[13px] leading-relaxed">
            Share the location, size and how you want the display to be used. Every enquiry uses the same LED wall form.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#168BEB] text-white text-[13px] font-semibold hover:bg-[#0D2942] transition-colors rounded-lg">
            Get an LED Wall
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
