import Link from 'next/link';
import { ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, Check, Download, FileText, Gift, Heart, Lightbulb, MessageCircle, Sparkles, Star, UserRound, Users } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const plans = [
  {n:'01',icon:MessageCircle,title:'Essential Consultation',price:'₹2,100',time:'30-40 Minutes',copy:'A focused session to explore your key questions and gain personalised numerical insights.',items:['Core numerical analysis','Key strengths & challenges','Discussion around your primary concern','Practical insights and guidance'],best:'First-time consultations and focused questions.',action:'Book Essential Session'},
  {n:'02',icon:CalendarDays,title:'In-Depth Consultation',price:'₹4,999',time:'45 Minutes + Written Report + 1 Follow-Up',copy:'A more comprehensive consultation combining detailed analysis with a documented summary of key insights.',items:['Detailed numerical analysis','Exploration of key life areas','Personal strengths & challenges','Written consultation report','One complimentary follow-up'],best:'Those seeking deeper insight and documented guidance.',action:'Book In-Depth Session',popular:true},
  {n:'03',icon:Star,title:'Premium Consultation',price:'₹6,999',time:'Up to 60 Minutes + Detailed Report + 2 Follow-Ups',copy:'A comprehensive and personalised consultation designed for deeper exploration and continued support.',items:['Comprehensive numerical analysis','Detailed discussion across relevant life areas','Personalised written report','Two complimentary follow-ups','Video consultation or in-person meeting'],best:'Those looking for a more detailed and personalised experience.',action:'Book Premium Session'},
];

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

const addOns=[[FileText,'Detailed Written Report','₹1,999','Receive a structured written summary of your numerical analysis, key observations and personalised recommendations.','Add Report'],[CalendarDays,'Additional Follow-Up','₹1,499','A focused follow-up session to discuss progress, questions or new developments after your consultation.','Book Follow-Up'],[MessageCircle,'Additional Question Support','₹999','Additional support for questions arising after your consultation.','Learn More']];
const why=[[Heart,'Clarity','See your questions from a clearer perspective.'],[Users,'Understanding','Recognise patterns influencing your experiences.'],[BarChart3,'Direction','Move forward with greater awareness.'],[UserRound,'Better Decisions','Use insight to approach important choices thoughtfully.']];

export default function Services(){return <main><SiteHeader/>
  <section className="services-reference-hero"><div className="services-reference-copy"><p className="eyebrow"><Sparkles size={14}/> Services &amp; consultations</p><h1>Choose the Consultation<br/>That Fits <em>Your Needs</em></h1><p>Every consultation is designed around the level of insight, analysis and support you are looking for. Choose the format that best suits your current needs.</p><div className="services-promises"><article><UserRound/><strong>Personalized Approach</strong><span>Guidance shaped around your individual circumstances.</span></article><article><CalendarDays/><strong>Flexible Consultation</strong><span>Choose the level of time and depth that suits you.</span></article><article><Star/><strong>Thoughtful Guidance</strong><span>Research-led insight focused on clarity and understanding.</span></article></div></div><div className="services-reference-photo"><img src="/assets/contact-hero-harpreet.png" alt="Harpreet Kaur"/></div><div className="services-wave"/></section>
  <div className="consultation-tabs"><span>Individual Consultations</span><a href="#founder-packages">Founder Decision Packages <ArrowRight size={15}/></a><Link href="/business-consulting">Business Consulting <ArrowRight size={15}/></Link></div>
  <section className="services-packages"><p className="eyebrow centered">Personal consultations &amp; packages</p><h2>Choose Your Level of Insight</h2><p className="services-lead">A thoughtful consultation can help you explore your questions, understand recurring patterns and gain a clearer perspective on the areas that matter most to you.</p><div className="pricing-grid">{plans.map(({n,icon:Icon,title,price,time,copy,items,best,action,popular})=><article className={popular?'popular':''} key={n}>{popular&&<span className="popular-badge">Most Popular</span>}<span className="plan-number">{n}</span><span className="plan-icon"><Icon/></span><h3>{title}</h3><strong className="plan-price">{price}</strong><b>{time}</b><p>{copy}</p><h4>Includes:</h4><ul>{items.map(item=><li key={item}><Check size={14}/>{item}</li>)}</ul><div className="best-for"><strong>Best for:</strong>{best}</div><Link href="/contact">{action}<ArrowRight size={16}/></Link></article>)}</div>
  <div className="personal-plan"><span><Gift/></span><div><h3>Looking for a Personalised Plan?</h3><p>We also offer customised packages for specific needs.<br/>Let&apos;s create a plan that is right for you.</p></div><Link className="outline-button" href="/contact">Talk to Us <ArrowRight size={15}/></Link></div></section>

  <section className="founder-packages-section" id="founder-packages">
    <div className="founder-packages-header">
      <p className="eyebrow">✦ NUMERIXX FOR FOUNDERS &amp; BUSINESS LEADERS</p>
      <h2>Founder Decision Intelligence <em>Packages</em></h2>
      <p>Numerological Cycle Mapping &amp; Spiritual Psychology for Founders. Designed to align your decision timing with natural leadership cycles, prevent burnout, and execute high-stakes growth.</p>
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

  <section className="strategic-report"><div className="report-book"><span>NUMERIXX</span><strong>STRATEGIC<br/>LIFE REPORT</strong><small>✦</small></div><div><p className="eyebrow"><Sparkles size={14}/> Numerixx Strategic Life Report™</p><h2>A Deeper Look at Your Personal Patterns</h2><p>For those who prefer a comprehensive written analysis or want a permanent reference they can revisit whenever needed.</p><strong>Every report is personally researched, analysed and written by Harpreet Kaur after a detailed study of your numerical profile.</strong><div className="report-topics">{['Behavioural Patterns','Career & Business','Opportunities & Challenges','Core Strengths & Growth Areas','Relationships & Communication','Strategic Recommendations','Decision-Making Style','Current Life Phase','Action-Oriented Guidance'].map(x=><span key={x}>✦ {x}</span>)}</div></div></section>
  <section className="report-combo"><span><Lightbulb/></span><div><h3>Consultation + Strategic Report</h3><p>For clients seeking the most comprehensive experience, combining personalised one-to-one guidance with a detailed written roadmap.</p></div><Link className="outline-button" href="/contact">Enquire About This Option <ArrowRight size={15}/></Link></section>
  <section className="additional-support"><p className="eyebrow centered">Additional support</p><h2>Continue Your Journey</h2><div className="addon-grid">{addOns.map(([Icon,title,price,copy,action])=>{const I=Icon as typeof FileText;return <article key={String(title)}><span><I/></span><h3>{String(title)}</h3><strong>{String(price)}</strong><p>{String(copy)}</p><Link className="outline-button" href="/contact">{String(action)} <ArrowRight size={14}/></Link></article>})}</div></section>
  <section className="why-services"><div><p className="eyebrow">Why Numerixx</p><h2>People Don&apos;t Need More Predictions.<br/>They Need More Clarity.</h2></div>{why.map(([Icon,title,copy])=>{const I=Icon as typeof Heart;return <article key={String(title)}><I/><div><strong>{String(title)}</strong><p>{String(copy)}</p></div></article>})}</section>
  <section className="services-final"><div><h2>Find the Right Consultation for You</h2><p>Choose a consultation that fits your needs and begin with a deeper perspective on your questions and current circumstances.</p></div><div><Link className="gold-button" href="/contact">Book Your Consultation <ArrowRight size={15}/></Link><Link className="dark-outline" href="/contact">Let&apos;s Connect <ArrowRight size={15}/></Link></div></section>
  <SiteFooter/></main>}

