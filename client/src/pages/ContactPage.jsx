import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row mt-[72px]" id="enquiry">
      {/* Left Sticky Sidebar */}
      <div className="contact-sidebar-sticky w-full lg:w-[45%] bg-[#071521] text-white p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col relative justify-center">
        {/* Subtle ambient lighting glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#168BEB] rounded-full blur-[140px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#0ea5e9] rounded-full blur-[130px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-[500px] w-full mx-auto">
          {/* Kicker with trailing fade line */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Get In Touch</span>
            <span className="h-[1px] w-20 bg-gradient-to-r from-[#168BEB]/60 to-transparent" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white mb-2 tracking-tight leading-tight">
            Let&apos;s build something <span className="text-slate-400 font-bold">Iconic</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-[12.5px] sm:text-[13px] leading-relaxed mb-5 max-w-lg">
            Whether you need a custom LED wall installation, architectural display, or technical consultation, our engineering team is ready.
          </p>

          {/* Stacked Cards with Distinct In-between Spacing */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {/* USA Office Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0b1b2b]/60 backdrop-blur-md p-4 sm:p-5 hover:border-[#168BEB]/40 transition-all duration-300 shadow-sm group">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/90 shrink-0 mt-0.5 group-hover:border-[#168BEB]/40 transition-colors">
                  <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase">USA Office</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[9px] font-semibold text-slate-300 tracking-wider uppercase">Americas</span>
                  </div>
                  <p className="text-[12px] sm:text-[12.5px] font-medium text-white leading-snug">470 Olde Worthington Rd, Westerville, OH 43082</p>
                  <p className="text-[12px] sm:text-[12.5px] text-slate-300 mt-0.5">United States</p>
                </div>
              </div>
            </div>

            {/* India Office Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0b1b2b]/60 backdrop-blur-md p-4 sm:p-5 hover:border-[#168BEB]/40 transition-all duration-300 shadow-sm group">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/90 shrink-0 mt-0.5 group-hover:border-[#168BEB]/40 transition-colors">
                  <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase">India Office</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[9px] font-semibold text-slate-300 tracking-wider uppercase">Asia Pacific</span>
                  </div>
                  <p className="text-[12px] sm:text-[12.5px] font-medium text-white leading-snug">Niche Techies Inc. &ndash; Anaarworx Building</p>
                  <p className="text-[12px] text-slate-300 mt-0.5">Rajagiri Valley Rd, Infopark Expressway</p>
                  <p className="text-[12px] text-slate-300 mt-0.5">Kakkanad, Kochi, Kerala 682039, India</p>
                </div>
              </div>
            </div>

            {/* Call Direct Full-Width Card */}
            <a
              href="tel:+919746021869"
              className="rounded-2xl border border-white/[0.08] bg-[#0b1b2b]/60 backdrop-blur-md p-4 sm:p-5 hover:border-[#168BEB]/40 transition-all duration-300 shadow-sm flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/90 shrink-0 group-hover:border-[#168BEB]/40 transition-colors">
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase mb-0.5">Call Direct</p>
                <p className="text-[14px] font-bold text-white group-hover:text-[#168BEB] transition-colors">
                  +91 97460 21869
                </p>
              </div>
            </a>

            {/* Email Us Full-Width Card */}
            <a
              href="mailto:contact@sansglowmetric.com"
              className="rounded-2xl border border-white/[0.08] bg-[#0b1b2b]/60 backdrop-blur-md p-4 sm:p-5 hover:border-[#168BEB]/40 transition-all duration-300 shadow-sm flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/90 shrink-0 group-hover:border-[#168BEB]/40 transition-colors">
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold tracking-[0.16em] text-slate-400 uppercase mb-0.5">Email Us</p>
                <p className="text-[13.5px] sm:text-[14px] font-medium text-white group-hover:text-[#168BEB] transition-colors">
                  contact@sansglowmetric.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Right Form Container */}
      <div className="w-full lg:w-[55%] bg-slate-50 p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24 flex items-center border-l border-gray-100">
        <div className="w-full max-w-2xl mx-auto">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
