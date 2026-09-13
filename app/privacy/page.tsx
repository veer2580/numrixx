import Link from 'next/link';
import { Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

export default function PrivacyPolicy() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="eyebrow">
            <Sparkles size={14} /> Official Policy
          </p>
          <h1>Privacy Policy</h1>
          <p>
            Numerixx is committed to respecting your privacy and protecting the information you share with us.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px clamp(24px,7vw,110px)', background: '#fbfaff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', background: '#fff', padding: '42px clamp(20px,5vw,50px)', borderRadius: '20px', border: '1px solid #e5dfef', boxShadow: '0 10px 30px rgba(44,18,111,0.05)' }}>
          
          <div style={{ borderBottom: '1px solid #eee7f8', paddingBottom: '20px', marginBottom: '32px' }}>
            <h2 style={{ font: '600 24px Georgia, serif', color: 'var(--navy)', margin: '0 0 10px' }}>Numerixx Privacy Policy</h2>
            <div style={{ fontSize: '13px', color: '#685e88', display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
              <span><MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} /> Jaipur, Rajasthan, India</span>
              <span><Mail size={13} style={{ display: 'inline', marginRight: '4px' }} /> numerixx99@gmail.com</span>
              <span><Phone size={13} style={{ display: 'inline', marginRight: '4px' }} /> +91 99833 05333</span>
            </div>
          </div>

          <div className="policy-body" style={{ color: '#4a4268', fontSize: '15px', lineHeight: '1.7' }}>
            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>1. Information We Collect</h3>
            <p>Numerixx may receive information voluntarily provided by clients when using its services, including name, date of birth, consultation information, and other information relevant to the requested service.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>2. How Information Is Used</h3>
            <p>Information may be used to provide consultations, prepare personalized reports, conduct numerical and behavioural analysis, provide research-based guidance, conduct research in anonymized form, and improve Numerixx services.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>3. Confidentiality</h3>
            <p>Numerixx respects client privacy. Information shared during consultations is handled with reasonable confidentiality.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>4. Anonymized Research</h3>
            <p>Information may be used for research purposes in anonymized form as part of the development of Numerixx research and behavioural frameworks.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>5. Third-Party Disclosure</h3>
            <p>Personal information will not be disclosed to third parties except where required by law or with the client&apos;s consent.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>6. Client Responsibility</h3>
            <p>Clients are responsible for providing accurate information and should avoid submitting information that is not necessary for the requested service.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>7. Policy Updates</h3>
            <p>This Privacy Policy may be updated from time to time. The latest version published on the website will apply to future use of the services.</p>

            <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #eee7f8', fontSize: '13px', color: '#685e88' }}>
              For any privacy inquiries or support, please contact us at <a href="mailto:numerixx99@gmail.com" style={{ color: 'var(--navy)', fontWeight: 600 }}>numerixx99@gmail.com</a> or <a href="tel:+919983305333" style={{ color: 'var(--navy)', fontWeight: 600 }}>+91 99833 05333</a>.
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
