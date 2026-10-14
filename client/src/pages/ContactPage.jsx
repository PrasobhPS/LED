import EnquiryForm from '../components/EnquiryForm';

export default function ContactPage() {
  return (
    <>
      <section className="min-h-screen flex flex-col lg:flex-row mt-[72px]" id="enquiry">
        <div className="contact-sidebar-sticky w-full lg:w-[45%] bg-[#071521] text-white p-6 flex flex-col relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#168BEB] rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#168BEB] uppercase">Get in Touch</span>
            </div>
            <h1 className="contact-sidebar-title font-bold mb-4 tracking-tight">
              Let's build something <br />Iconic.
            </h1>
            <p className="contact-sidebar-copy text-gray-300 mb-5 max-w-md">
              Whether you need a custom LED wall installation, our team is ready.
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="contact-sidebar-label uppercase tracking-widest text-gray-400 font-semibold mb-1">USA Office</p>
                <p className="contact-sidebar-value font-semibold text-white">Columbus, Ohio, United States</p>
              </div>
              <div>
                <p className="contact-sidebar-label uppercase tracking-widest text-gray-400 font-semibold mb-1">India Office</p>
                <p className="contact-sidebar-value font-semibold text-white">Kochi, Kerala, India</p>
              </div>
              <div>
                <p className="contact-sidebar-label uppercase tracking-widest text-gray-400 font-semibold mb-1">Phone</p>
                <a href="tel:+919746021869" className="contact-sidebar-value font-semibold text-white hover:text-[#168BEB] transition-colors">+91 97460 21869</a>
              </div>
              <div>
                <p className="contact-sidebar-label uppercase tracking-widest text-gray-400 font-semibold mb-1">Email</p>
                <a href="mailto:contact@sansglowmetric.com" className="contact-sidebar-value font-semibold text-white hover:text-[#168BEB] transition-colors">contact@sansglowmetric.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[55%] bg-slate-50 p-6 sm:p-10 md:p-16 lg:p-24 flex items-center border-l border-gray-100">
          <div className="w-full max-w-2xl mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
