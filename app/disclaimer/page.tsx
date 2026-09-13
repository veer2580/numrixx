import Link from 'next/link';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

export default function Disclaimer() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="eyebrow">
            <Sparkles size={14} /> Official Notice
          </p>
          <h1>Numerology Disclaimer &amp; Payment Terms</h1>
          <p>
            Important disclosures regarding numerology consultations, research-based guidance, and payment terms.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px clamp(24px,7vw,110px)', background: '#fbfaff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', background: '#fff', padding: '42px clamp(20px,5vw,50px)', borderRadius: '20px', border: '1px solid #e5dfef', boxShadow: '0 10px 30px rgba(44,18,111,0.05)' }}>
          
          <div style={{ borderBottom: '1px solid #eee7f8', paddingBottom: '20px', marginBottom: '32px' }}>
            <h2 style={{ font: '600 24px Georgia, serif', color: 'var(--navy)', margin: '0 0 10px' }}>Numerology Disclaimer &amp; Payment Terms</h2>
            <div style={{ fontSize: '13px', color: '#685e88', display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
              <span><MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} /> Jaipur, Rajasthan, India</span>
              <span><Mail size={13} style={{ display: 'inline', marginRight: '4px' }} /> numerixx99@gmail.com</span>
              <span><Phone size={13} style={{ display: 'inline', marginRight: '4px' }} /> +91 99833 05333</span>
            </div>
          </div>

          <div className="policy-body" style={{ color: '#4a4268', fontSize: '15px', lineHeight: '1.7' }}>
            <div style={{ padding: '16px 20px', borderRadius: '12px', background: '#f5effc', borderLeft: '4px solid var(--gold)', margin: '0 0 28px', color: 'var(--navy)' }}>
              <strong style={{ font: '600 16px Georgia, serif', display: 'block', marginBottom: '4px' }}>PART A: NUMEROLOGY DISCLAIMER</strong>
            </div>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>1. Numerology Guidance</h3>
            <p>Numerixx provides numerology-based and research-oriented guidance intended for self-awareness, behavioural understanding, and decision support. Numerology should not be treated as a guarantee of future events.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>2. No Guaranteed Outcomes</h3>
            <p>Numerixx does not guarantee success, financial gain, career advancement, business growth, relationship or marriage outcomes, or any other specific result.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>3. Health Disclaimer</h3>
            <p>Numerixx services are not a substitute for medical diagnosis, treatment, or professional healthcare advice. Health and lifestyle consultations are intended only to encourage awareness and healthier decision-making.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>4. Financial, Legal &amp; Professional Decisions</h3>
            <p>Numerixx guidance is not a substitute for professional financial, investment, legal, accounting, medical, psychological, or other regulated advice. Clients should consult qualified professionals where appropriate.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>5. Client Responsibility</h3>
            <p>All decisions and actions taken after receiving Numerixx guidance remain the responsibility of the client.</p>

            <div style={{ padding: '16px 20px', borderRadius: '12px', background: '#f5effc', borderLeft: '4px solid var(--gold)', margin: '36px 0 28px', color: 'var(--navy)' }}>
              <strong style={{ font: '600 16px Georgia, serif', display: 'block', marginBottom: '4px' }}>PART B: PAYMENT TERMS</strong>
            </div>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>1. Payment</h3>
            <p>Where payment is applicable, appointments and paid services are confirmed only after successful payment. The applicable price displayed or communicated by Numerixx at the time of booking or purchase shall apply.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>2. Booking Confirmation</h3>
            <p>A consultation appointment is confirmed only after successful payment, where applicable. Clients should retain their payment confirmation or transaction details.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>3. Personalized Reports</h3>
            <p>Personalized reports are prepared specifically for the purchasing client. Once preparation has begun or the report has been delivered, the purchase is final and non-refundable, subject to applicable law.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>4. Digital Products</h3>
            <p>Once a digital report, download, educational resource, or other digital product has been delivered, it cannot generally be returned, exchanged, cancelled, or refunded, except where required by applicable law.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>5. Price Changes</h3>
            <p>Numerixx reserves the right to change service prices, packages, reports, or offerings from time to time. The applicable price at the time of purchase shall apply.</p>

            <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #eee7f8', fontSize: '13px', color: '#685e88' }}>
              For any legal or payment questions, contact us at <a href="mailto:numerixx99@gmail.com" style={{ color: 'var(--navy)', fontWeight: 600 }}>numerixx99@gmail.com</a> or <a href="tel:+919983305333" style={{ color: 'var(--navy)', fontWeight: 600 }}>+91 99833 05333</a>.
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
