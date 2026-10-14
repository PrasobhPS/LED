import { DISPLAY_TYPES } from '../data/enquiry';

const fieldClass = 'w-full bg-white border border-gray-200 rounded-sm py-3.5 px-4 text-[13px] text-[#071521] focus:outline-none focus:border-[#168BEB] shadow-sm transition-colors';

export default function EnquiryForm() {
  return (
    <form className="space-y-8" id="leadForm" noValidate>
      <input type="hidden" name="intent" value="led_wall" />
      <div>
        <h2 className="text-2xl font-bold text-[#071521] mb-2">LED Wall Enquiry</h2>
        <p className="text-[13px] text-gray-500 leading-relaxed">
          Tell us what you need. This is the same form used everywhere on the site.
        </p>
      </div>
      <p id="enquiry-status" className="enquiry-status" role="alert" hidden />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" required maxLength={80} autoComplete="given-name" className={fieldClass} placeholder="John" />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" required maxLength={80} autoComplete="family-name" className={fieldClass} placeholder="Doe" />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="company">Company</label>
          <input id="company" name="company" type="text" required maxLength={160} autoComplete="organization" className={fieldClass} placeholder="Company name" />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className={fieldClass} placeholder="+1 555 010 0100" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required maxLength={180} autoComplete="email" className={fieldClass} placeholder="you@company.com" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="needType">Display Type</label>
          <select id="needType" name="needType" required className={fieldClass} defaultValue="">
            <option value="" disabled>Select a display type</option>
            {DISPLAY_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="location">Project Location</label>
          <input id="location" name="location" type="text" required maxLength={200} className={fieldClass} placeholder="City, site or address" />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="width">Approx. Width</label>
          <input id="width" name="width" type="text" maxLength={40} className={fieldClass} placeholder="If known" />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="height">Approx. Height</label>
          <input id="height" name="height" type="text" maxLength={40} className={fieldClass} placeholder="If known" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="projectDescription">Requirement</label>
          <textarea id="projectDescription" name="projectDescription" required rows={4} maxLength={4000} className={fieldClass} placeholder="How will the display be used?" />
        </div>
        <div className="dynamic-group shared-photo md:col-span-2">
          <label className="block text-[11px] uppercase tracking-widest text-gray-500 mb-2 font-semibold">Location Photo</label>
          <div className="w-full bg-white border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:border-[#071521] hover:bg-gray-50 transition-colors cursor-pointer group shadow-sm">
            <svg className="w-6 h-6 mx-auto mb-3 text-gray-400 group-hover:text-[#071521] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <p className="text-[13px] text-gray-500">Drag &amp; drop files or <span className="text-[#071521] font-semibold">browse</span></p>
          </div>
        </div>
        <div className="md:col-span-2 pt-2">
          <button type="submit" id="enquiry-submit" className="w-full py-4 bg-[#071521] rounded-lg text-[13px] font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#0D2942] transition-colors flex items-center justify-center gap-2 group">
            <span>Submit Enquiry</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
