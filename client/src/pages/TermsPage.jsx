import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <>
      <article className="legal-page">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#168BEB] mb-3">Legal</p>
        <h1>Terms &amp; Conditions</h1>
        <p>These terms cover use of the SANS GLOWMETRIC website and the LED wall enquiry form.</p>
        <h2>The website</h2>
        <p>Project photos and specifications on this site describe completed or supplied LED installations. They are not a catalogue of screens available for advertising, and they are not a binding quote.</p>
        <h2>Enquiries</h2>
        <p>Submitting the form asks us to review your requirement. It does not create a contract. A supply or installation agreement starts only when both sides confirm scope, price and timing in writing.</p>
        <h2>Your content</h2>
        <p>Photos and descriptions you upload should be yours to share. We use them only to understand the site and reply to you.</p>
        <h2>Contact</h2>
        <p>SANS GLOWMETRIC can be reached at <a href="mailto:contact@sansglowmetric.com">contact@sansglowmetric.com</a> and <a href="tel:+919746021869">+91 97460 21869</a>. Offices are in Columbus, Ohio, United States and Kochi, Kerala, India.</p>
        <p><Link to="/contact">Back to the enquiry form</Link></p>
      </article>
    </>
  );
}
