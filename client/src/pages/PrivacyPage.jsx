import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <>
      <article className="legal-page">
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#168BEB] mb-3">Legal</p>
        <h1>Privacy Policy</h1>
        <p>This policy explains what SANS GLOWMETRIC collects when you use this website or send an LED wall enquiry.</p>
        <h2>Information you send us</h2>
        <p>The enquiry form collects your name, company, phone number, email address, display type, project location, approximate dimensions, a short description of the requirement, and any photos you choose to upload.</p>
        <h2>How we use it</h2>
        <p>We use that information to reply to your enquiry, prepare a proposal, and keep a record of the request. We do not sell enquiry details.</p>
        <h2>How long we keep it</h2>
        <p>We keep enquiry records for as long as we need them to respond and to maintain a project history, then delete them when they are no longer needed.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href="mailto:contact@sansglowmetric.com">contact@sansglowmetric.com</a> or by phone at <a href="tel:+919746021869">+91 97460 21869</a>.</p>
        <p><Link to="/contact">Back to the enquiry form</Link></p>
      </article>
    </>
  );
}
