import Link from 'next/link';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

export default function RefundPolicy() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div>
          <p className="eyebrow">
            <Sparkles size={14} /> Official Policy
          </p>
          <h1>Cancellation, Rescheduling &amp; Refund Policy</h1>
          <p>
            Understand our terms regarding appointment cancellations, session rescheduling, and report purchases.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px clamp(24px,7vw,110px)', background: '#fbfaff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', background: '#fff', padding: '42px clamp(20px,5vw,50px)', borderRadius: '20px', border: '1px solid #e5dfef', boxShadow: '0 10px 30px rgba(44,18,111,0.05)' }}>
          
          <div style={{ borderBottom: '1px solid #eee7f8', paddingBottom: '20px', marginBottom: '32px' }}>
            <h2 style={{ font: '600 24px Georgia, serif', color: 'var(--navy)', margin: '0 0 10px' }}>Cancellation, Rescheduling &amp; Refund Policy</h2>
            <div style={{ fontSize: '13px', color: '#685e88', display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
              <span><MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} /> Jaipur, Rajasthan, India</span>
              <span><Mail size={13} style={{ display: 'inline', marginRight: '4px' }} /> numerixx99@gmail.com</span>
              <span><Phone size={13} style={{ display: 'inline', marginRight: '4px' }} /> +91 99833 05333</span>
            </div>
          </div>

          <div className="policy-body" style={{ color: '#4a4268', fontSize: '15px', lineHeight: '1.7' }}>
            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>1. Cancellation Requests</h3>
            <p>Clients should submit cancellation requests to Numerixx as early as possible. Eligibility for cancellation or refund may depend on the nature of the service and whether preparation or delivery has already begun.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>2. Rescheduling</h3>
            <p>Clients may request to reschedule a consultation with reasonable prior notice. Rescheduling is subject to availability and confirmation by Numerixx.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>3. Missed Appointments</h3>
            <p>Failure to attend a scheduled consultation without prior notice may result in forfeiture of the appointment. Refunds for missed appointments are generally not provided unless required by applicable law or approved at the discretion of Numerixx.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>4. Personalized Reports</h3>
            <p>Because personalized reports are individually researched and prepared, purchases are final and non-refundable once preparation has begun or the report has been delivered, subject to applicable law.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>5. Refunds</h3>
            <p>Refunds are not guaranteed and are subject to the terms applicable to the purchased service and applicable law.</p>

            <h3 style={{ font: '600 19px Georgia, serif', color: 'var(--navy)', margin: '24px 0 10px' }}>6. Contact for Cancellation</h3>
            <p>For cancellation, rescheduling, or refund questions, contact Numerixx using the contact details provided below.</p>

            <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #eee7f8', fontSize: '13px', color: '#685e88' }}>
              For cancellation or refund inquiries, please contact us at <a href="mailto:numerixx99@gmail.com" style={{ color: 'var(--navy)', fontWeight: 600 }}>numerixx99@gmail.com</a> or <a href="tel:+919983305333" style={{ color: 'var(--navy)', fontWeight: 600 }}>+91 99833 05333</a>.
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
