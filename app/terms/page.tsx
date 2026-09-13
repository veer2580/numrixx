import Link from 'next/link';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

export default function TermsAndConditions() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="eyebrow">
            <Sparkles size={14} /> Official Terms
          </p>
          <h1>Terms &amp; Conditions</h1>
          <p>
            Please read these terms and conditions carefully before using Numerixx services and website.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px clamp(24px,7vw,110px)', background: '#fbfaff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', background: '#fff', padding: '42px clamp(20px,5vw,50px)', borderRadius: '20px', border: '1px solid #e5dfef', boxShadow: '0 10px 30px rgba(44,18,111,0.05)' }}>
          
          <div style={{ borderBottom: '1px solid #eee7f8', paddingBottom: '20px', marginBottom: '32px' }}>
            <h2 style={{ font: '600 24px Georgia, serif', color: 'var(--navy)', margin: '0 0 10px' }}>Numerixx Terms &amp; Conditions</h2>
            <div style={{ fontSize: '13px', color: '#685e88', display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
              <span><MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} /> Jaipur, Rajasthan, India</span>
              <span><Mail size={13} style={{ display: 'inline', marginRight: '4px' }} /> numerixx99@gmail.com</span>
              <span><Phone size={13} style={{ display: 'inline', marginRight: '4px' }} /> +91 99833 05333</span>
            </div>
          </div>

          <div className="policy-body" style={{ color: '#4a4268', fontSize: '15px', lineHeight: '1.7' }}>
            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>1. About Numerixx</h3>
            <p>Numerixx is a numerology and research-based consultation firm focused on numerical analysis, behavioural understanding, self-awareness, and decision-support guidance. Services may include personal numerology consultations, relationship and compatibility analysis, career and business consultations, name analysis, business-name analysis, auspicious date consultation, personalized reports, and related educational resources.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>2. Nature of Numerology Services</h3>
            <p>Numerixx uses numerical analysis and behavioural pattern frameworks to provide guidance and insights. Services are intended to support self-awareness and decision-making and are not guarantees or promises of particular future events or outcomes.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>3. Client Information</h3>
            <p>Clients are responsible for providing accurate and complete information, including name, date of birth, and other information relevant to the requested service. Numerixx is not responsible for inaccurate or incomplete guidance resulting from incorrect information supplied by the client.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>4. Recommendations &amp; Responsibility</h3>
            <p>Recommendations are intended to support clarity and decision-making. The client remains solely responsible for evaluating guidance and making decisions or taking actions based on it.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>5. Personalized Reports</h3>
            <p>Personalized numerology and strategic reports are prepared based on information provided by the client and are supplied for the purchasing client&apos;s personal reference.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>6. Intellectual Property</h3>
            <p>Numerixx retains intellectual property rights in its Numerical Human Behaviour framework, research methodologies, consultation frameworks, assessment models, reports, educational materials, website content, graphics, branding, trademarks, and related research. Content may not be copied, reproduced, modified, distributed, published, taught, commercially exploited, or publicly shared without written permission.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>7. Confidentiality</h3>
            <p>Information shared during consultations will be handled with reasonable confidentiality and may be used for consultation, anonymized research, service improvement, or as described in the Privacy Policy. Personal information will not be disclosed to third parties except where required by law or with the client&apos;s consent.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>8. No Guarantee of Results</h3>
            <p>Numerixx does not guarantee specific financial, business, career, relationship, educational, personal, health, or other outcomes. Individual experiences may vary due to personal choices and external circumstances.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>9. Professional Advice</h3>
            <p>Numerixx services are consultative and educational and are not intended to replace qualified medical, psychological, legal, financial, investment, accounting, or other professional advice.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>10. User Conduct</h3>
            <p>Users must not misuse the website or services, attempt unauthorized access, submit false or misleading information, copy proprietary content, use services unlawfully, or interfere with website security or operation.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>11. Changes to Services and Terms</h3>
            <p>Numerixx may modify services, pricing, report formats, frameworks, resources, or website content. These Terms may also be updated from time to time. The latest version published on the website shall apply.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>12. Limitation of Liability</h3>
            <p>To the fullest extent permitted by applicable law, Numerixx shall not be liable for direct, indirect, incidental, consequential, special, or exemplary damages arising from use of its website, consultations, reports, products, or services.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>13. Governing Law</h3>
            <p>These Terms shall be governed by the laws of India. Disputes shall be subject to the jurisdiction of the competent courts in Rajasthan, India.</p>

            <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #eee7f8', fontSize: '13px', color: '#685e88' }}>
              For any questions regarding these Terms, contact us at <a href="mailto:numerixx99@gmail.com" style={{ color: 'var(--navy)', fontWeight: 600 }}>numerixx99@gmail.com</a> or <a href="tel:+919983305333" style={{ color: 'var(--navy)', fontWeight: 600 }}>+91 99833 05333</a>.
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
