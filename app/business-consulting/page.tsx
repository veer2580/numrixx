import Link from 'next/link';
import { ArrowRight, BarChart3, Check, Download, FileText, Handshake, Headphones, Lightbulb, MessageCircle, Sparkles, Tag, Target, Users, UserRound } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const areas=[[UserRound,'Founder & Leadership Analysis','Understand leadership strengths, decision-making style and personal impact.'],[BarChart3,'Business Behaviour Assessment','Explore the behavioural patterns influencing your business decisions and operations.'],[Tag,'Brand & Name Analysis','Analyse your brand or business name for alignment, resonance and long-term potential.'],[Handshake,'Partnership Compatibility','Evaluate compatibility in partnerships, collaborations and key business relationships.'],[Target,'Strategic Decision Support','Gain numerical perspectives to support important business and strategic decisions.'],[Users,'Team Dynamics','Understand team energy, roles, collaboration patterns and collective strengths.']];
const addOns=[[FileText,'Detailed Written Report','₹1,999'],[MessageCircle,'Additional Follow-Up','₹1,499'],[Lightbulb,'Additional Question Support','₹999']];

const founderPackages = [
  {
    num: 'PACKAGE 01',
    title: "Founder's Decision Clarity Audit",
    subtitle: 'Align Your Decision Timing with Your Natural Leadership Cycles',
    price: '₹5,999 – ₹9,999',
    duration: '60 Mins • One-time session + async delivery',
    deliverables: [
      '60-min intuitive consultation (discovery + diagnosis)',
      'Your Numerological Decision Blueprint (personalized 3-page PDF)',
      '90-Day Decision Calendar (risk-mapped timeline)',
      'One Strategic Recommendation with timing framework',
      '14-day follow-up voice note with deepening insights'
    ],
    fit: 'Identifies decision blind spots caused by burnout cycles & poor timing before costly mistakes happen.',
    action: 'Book Clarity Audit'
  },
  {
    num: 'PACKAGE 02',
    popular: 'Most Popular',
    featured: true,
    title: 'Decision Clarity Framework (DCF)',
    subtitle: '90-Day Founder-Business Alignment & Decision Mastery Program',
    price: '₹25,999 – ₹35,999',
    duration: '3 Months • 4 Structured Sessions + Ongoing Support',
    deliverables: [
      'Session 1: Founder Architecture & Leadership Profile (5 pages)',
      'Session 2: Decision Fatigue & Burnout Archaeology Report',
      'Session 3: Business Operational Timing Analysis (Risk levels)',
      'Session 4: Critical Decision Sequencing Protocol (90/180/365-day)',
      '12-Month Strategic Roadmap & Burnout Prevention Calendar'
    ],
    fit: 'Founders with ₹10L – ₹5Cr revenue seeking a structured 90-day decision protocol.',
    action: 'Enquire About DCF Program'
  },
  {
    num: 'PACKAGE 03',
    title: 'Business Timing & Growth Blueprint (BTGB)',
    subtitle: "Scale Without Burnout — Align Growth Actions to Business's Natural Cycles",
    price: '₹61,000 – ₹81,000',
    duration: '6 Months • 6 Structured Sessions + Execution Support',
    deliverables: [
      'Business DNA & Timing Report (8–10 pages)',
      'Growth Timing Blueprint (Visual + Strategic)',
      '12-Month Color-Coded Action Calendar (GREEN / YELLOW / RED / BLUE)',
      'Cash Flow Pressure & Predictive Timing Forecast',
      'Market-Entry Readiness Scorecard & Execution Framework'
    ],
    fit: 'Scaling businesses (₹1Cr – ₹10Cr) planning major product launches, geography expansion or rebranding.',
    action: 'Enquire About BTGB Blueprint'
  },
  {
    num: 'PACKAGE 04',
    title: 'Annual Strategic Advisory (Retainer)',
    subtitle: "The Founder's Inner Circle — 12-Month Decision Intelligence Partnership",
    price: '₹99,999 – ₹1,50,000',
    duration: '12 Months • Ongoing Advisory + Scheduled Touchpoints',
    deliverables: [
      '4 Quarterly Decision Intelligence Briefs (3–4 pages)',
      '12 Monthly Decision Window Notes (Status, key dates, strategic prompts)',
      'Unlimited Crisis Advisory Access (24-hour response commitment)',
      'Annual Numerological Year Review & Mid-Year Realignment Session',
      'Priority WhatsApp / Email access for high-stakes decisions'
    ],
    fit: 'Founders needing active, year-round decision capacity monitoring & predictive guidance.',
    action: 'Apply for Retainer'
  }
];

export default function BusinessConsulting(){return <main><SiteHeader/>
  <section className="services-reference-hero business-page-hero"><div className="services-reference-copy"><Link className="hero-back-link" href="/services">← Back to Services</Link><p className="eyebrow"><Sparkles size={14}/> Numerixx business intelligence</p><h1>Strategic Insight for<br/>Businesses, Brands &amp;<br/><em>Professionals</em></h1><p>A structured approach to exploring business behaviour, decision-making, brand alignment and growth through numerical and human behaviour analysis.</p><div className="services-promises"><article><BarChart3/><strong>Research-led Insight</strong><span>Analysis backed by structured study and experience.</span></article><article><Target/><strong>Strategic Direction</strong><span>Focused guidance for important business decisions.</span></article><article><Users/><strong>Professional Clarity</strong><span>Personalised insight for leaders, teams and brands.</span></article></div></div><div className="services-reference-photo"><img src="/assets/contact-hero-harpreet.png" alt="Harpreet Kaur providing strategic business guidance"/></div><div className="services-wave"/></section>
  <section className="business-areas">{areas.map(([Icon,title,copy])=>{const I=Icon as typeof Target;return <article key={String(title)}><span><I/></span><h3>{String(title)}</h3><i>— ✦ —</i><p>{String(copy)}</p></article>})}</section>

  <section className="founder-packages-section" id="founder-packages">
    <div className="founder-packages-header">
      <p className="eyebrow">✦ FOUNDER DECISION INTELLIGENCE</p>
      <h2>Service Packages for <em>Founders &amp; Executives</em></h2>
      <p>Numerological Cycle Mapping &amp; Spiritual Psychology for Founders. Align your decision timing with natural leadership cycles, prevent burnout, and navigate high-stakes growth.</p>
      <a href="/assets/founder-decision-intelligence-packages.pdf" target="_blank" rel="noopener noreferrer" className="founder-pdf-badge">
        <Download size={16}/> Download Full PDF Brochure
      </a>
    </div>

    <div className="founder-pricing-grid">
      {founderPackages.map((pkg) => (
        <article className={`founder-card ${pkg.featured ? 'featured-card' : ''} ${pkg.num === 'PACKAGE 01' || pkg.num === 'PACKAGE 04' ? 'outline-cta-card' : ''}`} key={pkg.num}>
          {pkg.popular && <span className="founder-card-popular">{pkg.popular}</span>}
          <span className="founder-card-num">{pkg.num}</span>
          <h3>{pkg.title}</h3>
          <p className="founder-card-subtitle">{pkg.subtitle}</p>
          <div className="founder-card-price-wrap">
            <span className="founder-card-price">{pkg.price}</span>
            <span className="founder-card-time">• {pkg.duration}</span>
          </div>
          <div className="founder-card-deliverables-title">Key Deliverables</div>
          <ul className="founder-card-deliverables">
            {pkg.deliverables.map((item) => (
              <li key={item}><Check/><span>{item}</span></li>
            ))}
          </ul>
          <div className="founder-card-fit">
            <strong>Ideal Fit:</strong> {pkg.fit}
          </div>
          <Link className="founder-card-cta" href={`/contact?package=${encodeURIComponent(pkg.title)}`}>
            {pkg.action} <ArrowRight size={15}/>
          </Link>
        </article>
      ))}
    </div>
  </section>

  <section className="business-help"><Headphones/><div><h2>Not sure which consultation is right for you?</h2><p>Our team can help you choose the most suitable option.</p></div><ul><li><Check/>What services we offer</li><li><Check/>Which package is suitable</li><li><Check/>Pricing &amp; availability</li></ul><Link className="button" href="/contact">Talk to our team <ArrowRight size={15}/></Link></section>
  <section className="business-report-grid"><article className="business-report dark"><div className="business-report-content"><p className="eyebrow"><Sparkles size={14}/> Numerixx Strategic Life Report™</p><h2>Your Personal Blueprint<br/>for Clarity &amp; Direction</h2><p>A comprehensive written analysis providing a deeper understanding of patterns, strengths, challenges and opportunities. Every report is personally researched and written.</p><div className="business-report-list">{['Behavioural Patterns','Core Strengths & Growth Areas','Decision-Making Style','Career & Business','Relationships & Communication','Current Life Phase','Opportunities & Challenges','Strategic Recommendations'].map(x=><span key={x}>✦ {x}</span>)}</div><Link className="gold-button" href="/contact">Enquire about the report <ArrowRight size={15}/></Link></div><div className="report-visual report-book-visual" role="img" aria-label="Numerixx Strategic Life Report book"><div><small>NUMERIXX</small><strong>STRATEGIC<br/>LIFE REPORT</strong><span>✦</span></div></div></article><article className="business-report light"><div className="business-report-content"><p className="eyebrow"><Sparkles size={14}/> Consultation + strategic report</p><h2>The Most Comprehensive Experience</h2><p>Combine a personalised one-to-one consultation with the Numerixx Strategic Life Report™, giving you live guidance and a detailed written roadmap.</p><ul>{['In-depth one-to-one consultation','Personalised written strategic report','Detailed life analysis & guidance','Two-way clarity: live + written','Long-term reference for decision-making'].map(x=><li key={x}><Check/>{x}</li>)}</ul><Link className="button" href="/contact">Explore this option <ArrowRight size={15}/></Link></div><div className="report-visual report-paper-visual" role="img" aria-label="Personalised strategic report document"><div><small>NUMERIXX</small><strong>STRATEGIC<br/>LIFE REPORT</strong><span>✦</span><i/><i/><i/></div></div></article></section>
  <section className="business-addons"><div><p className="eyebrow"><Sparkles size={14}/> Add-on services</p><h2>Enhance Your Consultation</h2></div><div className="business-addon-grid">{addOns.map(([Icon,title,price])=>{const I=Icon as typeof FileText;return <article key={String(title)}><I/><h3>{String(title)}</h3><strong>{String(price)}</strong><Link href="/contact">Learn more <ArrowRight size={14}/></Link></article>})}</div></section>
  <section className="services-final"><div><h2>Find the Right Consultation for You</h2><p>Choose a consultation that fits your needs and begin with a deeper perspective on your business, brand and professional direction.</p></div><div><Link className="gold-button" href="/contact">Book Your Consultation <ArrowRight size={15}/></Link><Link className="dark-outline" href="/contact">Let&apos;s Connect <ArrowRight size={15}/></Link></div></section>
  <SiteFooter/></main>}

