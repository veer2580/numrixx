import Link from 'next/link';
import {
  FileText,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Calendar,
} from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const tocItems = [
  { id: 'clause-1', num: '01', title: 'About Numerixx' },
  { id: 'clause-2', num: '02', title: 'Nature of Services' },
  { id: 'clause-3', num: '03', title: 'Client Information' },
  { id: 'clause-4', num: '04', title: 'Recommendations & Responsibility' },
  { id: 'clause-5', num: '05', title: 'Personalized Reports' },
  { id: 'clause-6', num: '06', title: 'Intellectual Property' },
  { id: 'clause-7', num: '07', title: 'Confidentiality' },
  { id: 'clause-8', num: '08', title: 'No Guarantee of Results' },
  { id: 'clause-9', num: '09', title: 'Professional Advice' },
  { id: 'clause-10', num: '10', title: 'User Conduct' },
  { id: 'clause-11', num: '11', title: 'Changes to Services & Terms' },
  { id: 'clause-12', num: '12', title: 'Limitation of Liability' },
  { id: 'clause-13', num: '13', title: 'Governing Law & Jurisdiction' },
];

export default function TermsAndConditions() {
  return (
    <main className="legal-page-root">
      <SiteHeader />

      {/* Hero Header */}
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <nav className="legal-hero-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Legal</span>
            <span>›</span>
            <span style={{ color: 'var(--navy)' }}>Terms &amp; Conditions</span>
          </nav>
          <p className="eyebrow">
            <Sparkles size={14} /> Official Policy &amp; Terms
          </p>
          <h1>Terms &amp; Conditions</h1>
          <p className="legal-hero-intro">
            Please read these terms and conditions carefully before engaging with Numerixx consultations,
            advisory frameworks, personalized reports, or website services.
          </p>

          <div className="legal-meta-bar">
            <span className="legal-meta-item">
              <MapPin size={14} /> Jaipur, Rajasthan, India
            </span>
            <span className="legal-meta-item">
              <Mail size={14} /> numerixx99@gmail.com
            </span>
            <span className="legal-meta-item">
              <Phone size={14} /> +91 99833 05333
            </span>
            <span className="legal-meta-item">
              <ShieldCheck size={14} /> Research-Backed Advisory
            </span>
          </div>
        </div>
      </section>

      {/* Main Legal Layout: Sticky TOC Sidebar + Structured Clauses Stream */}
      <section className="legal-layout-container">
        {/* Sticky Sidebar */}
        <aside className="legal-sidebar">
          <div className="legal-toc-card">
            <div className="legal-toc-title">
              <FileText size={14} /> Table of Contents
            </div>
            <ul className="legal-toc-list">
              {tocItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="legal-toc-link">
                    <span className="toc-num">{item.num}</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="legal-support-card">
            <h4>Need Clarification?</h4>
            <p>
              Have questions regarding our consultation terms, frameworks or report delivery? Reach out to our advisory office.
            </p>
            <div className="legal-support-actions">
              <a href="tel:+919983305333" className="legal-support-btn">
                <Phone size={14} /> +91 99833 05333
              </a>
              <a href="mailto:numerixx99@gmail.com" className="legal-support-btn">
                <Mail size={14} /> numerixx99@gmail.com
              </a>
            </div>
          </div>
        </aside>

        {/* Structured Clauses Stream */}
        <div className="legal-clauses-stream">
          {/* 1. About Numerixx */}
          <article className="legal-clause-card" id="clause-1">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">01</span>
              <h2 className="legal-clause-title">About Numerixx</h2>
            </div>
            <p className="legal-clause-body">
              Numerixx is a research-based consultation and advisory firm focused on numerical pattern analysis,
              behavioural understanding, self-awareness, and decision-support guidance. Its approach explores the
              relationship between numerical patterns, human behaviour, and individual experiences through structured
              analysis and practical insight. Services may include personal numerology consultations, relationship
              and compatibility analysis, career and business consultations, name analysis, business-name analysis,
              auspicious date consultation, personalized reports, and related educational resources.
            </p>
            <div className="legal-clause-callout">
              <strong>Core Focus:</strong> Structured, research-led numerical human behaviour frameworks tailored
              for self-awareness, clarity, and informed decision-making.
            </div>
          </article>

          {/* 2. Nature of Numerology Services */}
          <article className="legal-clause-card" id="clause-2">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">02</span>
              <h2 className="legal-clause-title">Nature of Numerology Services</h2>
            </div>
            <p className="legal-clause-body">
              Numerixx uses numerical analysis and behavioural pattern frameworks to provide guidance and insights.
              Services are intended to support self-awareness and decision-making and are not guarantees or promises
              of particular future events or outcomes.
            </p>
          </article>

          {/* 3. Client Information */}
          <article className="legal-clause-card" id="clause-3">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">03</span>
              <h2 className="legal-clause-title">Client Information</h2>
            </div>
            <p className="legal-clause-body">
              Clients are responsible for providing accurate and complete information, including name, date of birth,
              and other information relevant to the requested service. Numerixx is not responsible for inaccurate or
              incomplete guidance resulting from incorrect information supplied by the client.
            </p>
          </article>

          {/* 4. Recommendations & Responsibility */}
          <article className="legal-clause-card" id="clause-4">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">04</span>
              <h2 className="legal-clause-title">Recommendations &amp; Responsibility</h2>
            </div>
            <p className="legal-clause-body">
              Recommendations are intended to support clarity and decision-making. The client remains solely responsible
              for evaluating guidance and making decisions or taking actions based on it.
            </p>
          </article>

          {/* 5. Personalized Reports */}
          <article className="legal-clause-card" id="clause-5">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">05</span>
              <h2 className="legal-clause-title">Personalized Reports</h2>
            </div>
            <p className="legal-clause-body">
              Personalized analytical and strategic reports are prepared based on information provided by the client
              and are supplied for the purchasing client&apos;s personal reference. Reports may incorporate numerical pattern
              analysis, behavioural observations, and structured insights relevant to the client&apos;s specific area
              of consultation.
            </p>
            <div className="legal-clause-callout">
              <strong>Personal Reference:</strong> Every report is uniquely generated for individual reference and
              reflects analytical patterns tailored to the client&apos;s designated query.
            </div>
          </article>

          {/* 6. Intellectual Property */}
          <article className="legal-clause-card" id="clause-6">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">06</span>
              <h2 className="legal-clause-title">Intellectual Property</h2>
            </div>
            <p className="legal-clause-body">
              Numerixx retains intellectual property rights in its Numerical Human Behaviour framework, research
              methodologies, consultation frameworks, assessment models, reports, educational materials, website
              content, graphics, branding, trademarks, and related research. Content may not be copied, reproduced,
              modified, distributed, published, taught, commercially exploited, or publicly shared without written permission.
            </p>
          </article>

          {/* 7. Confidentiality */}
          <article className="legal-clause-card" id="clause-7">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">07</span>
              <h2 className="legal-clause-title">Confidentiality</h2>
            </div>
            <p className="legal-clause-body">
              Information shared during consultations will be handled with reasonable confidentiality and may be used
              for consultation, anonymized research, service improvement, or as described in the Privacy Policy.
              Personal information will not be disclosed to third parties except where required by law or with the
              client&apos;s consent.
            </p>
          </article>

          {/* 8. No Guarantee of Results */}
          <article className="legal-clause-card" id="clause-8">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">08</span>
              <h2 className="legal-clause-title">No Guarantee of Results</h2>
            </div>
            <p className="legal-clause-body">
              Numerixx does not guarantee specific financial, business, career, relationship, educational, personal,
              health, or other outcomes. Individual experiences may vary due to personal choices and external
              circumstances.
            </p>
          </article>

          {/* 9. Professional Advice */}
          <article className="legal-clause-card" id="clause-9">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">09</span>
              <h2 className="legal-clause-title">Professional Advice</h2>
            </div>
            <p className="legal-clause-body">
              Numerixx services are consultative and educational and are not intended to replace qualified medical,
              psychological, legal, financial, investment, accounting, or other professional advice.
            </p>
          </article>

          {/* 10. User Conduct */}
          <article className="legal-clause-card" id="clause-10">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">10</span>
              <h2 className="legal-clause-title">User Conduct</h2>
            </div>
            <p className="legal-clause-body">
              Users must not misuse the website or services, attempt unauthorized access, submit false or misleading
              information, copy proprietary content, use services unlawfully, or interfere with website security
              or operation.
            </p>
          </article>

          {/* 11. Changes to Services and Terms */}
          <article className="legal-clause-card" id="clause-11">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">11</span>
              <h2 className="legal-clause-title">Changes to Services &amp; Terms</h2>
            </div>
            <p className="legal-clause-body">
              Numerixx may modify services, pricing, report formats, frameworks, resources, or website content. These
              Terms may also be updated from time to time. The latest version published on the website shall apply.
            </p>
          </article>

          {/* 12. Limitation of Liability */}
          <article className="legal-clause-card" id="clause-12">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">12</span>
              <h2 className="legal-clause-title">Limitation of Liability</h2>
            </div>
            <p className="legal-clause-body">
              To the fullest extent permitted by applicable law, Numerixx shall not be liable for direct, indirect,
              incidental, consequential, special, or exemplary damages arising from use of its website, consultations,
              reports, products, or services.
            </p>
          </article>

          {/* 13. Governing Law & Jurisdiction */}
          <article className="legal-clause-card" id="clause-13">
            <div className="legal-clause-header">
              <span className="legal-clause-badge">13</span>
              <h2 className="legal-clause-title">Governing Law &amp; Jurisdiction</h2>
            </div>
            <p className="legal-clause-body">
              These Terms shall be governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction
              of the competent courts in Rajasthan, India.
            </p>
            <div className="legal-clause-callout">
              <strong>Jurisdiction:</strong> Competent judicial courts located in Rajasthan, India.
            </div>
          </article>

          {/* Bottom Action / Inquiry Banner */}
          <section className="legal-footer-banner">
            <div>
              <h3>Questions Regarding Our Terms or Consultations?</h3>
              <p>
                We believe in complete transparency and clarity. If you have any inquiries regarding our consultation
                methodology or policies, our team is here to assist.
              </p>
            </div>
            <div className="banner-actions">
              <Link href="/contact#booking" className="btn-gold">
                <Calendar size={14} /> Schedule Session
              </Link>
              <a href="mailto:numerixx99@gmail.com" className="btn-outline">
                <Mail size={14} /> Contact Us
              </a>
            </div>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
