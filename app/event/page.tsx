import { ArrowRight, BarChart3, CalendarDays, Clock3, Flower2, Heart, Lightbulb, MapPin, Sparkles, Star, Target, UserRound, Users } from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const benefits = [[UserRound,'Practical Insights','Real-world Numerology knowledge you can apply immediately.'],[Flower2,'Personal Growth','Understand your numbers and unlock your true potential.'],[Users,'Expert Guidance','Learn from Harpreet Kaur, Behavioral Analyst and Strategic Consultant at Numerixx.'],[Star,'Life Transformation','Make informed decisions and create a more balanced, successful life.']];
const agenda = [
  [BarChart3, 'Foundation of Numbers'],
  [Lightbulb, 'Understanding Your Core Numbers & Life Direction'],
  [Target, 'Numbers & Better Decision-Making'],
  [Sparkles, 'Practical Applications & Q&A'],
];
const currentEvent = {
  isScheduled: false,
  date: '25 May 2025',
  time: '10:00 AM - 4:00 PM',
  location: <>Numerixx Consulting<br/>Jaipur, Rajasthan, India</>,
};
const past = [
  ['/assets/past-event-1.png','12 April 2025','Numbers & Self-Awareness','An interactive session exploring numerical insights, reflection and greater self-awareness.'],
  ['/assets/past-event-2.png','22 March 2025','Relationship Dynamics','Exploring compatibility, communication and the dynamics that shape meaningful relationships.'],
  ['/assets/past-event-3.png','15 February 2025','Understanding Personal Year Cycles','Exploring personal cycles and how they can offer perspective for planning and decision-making.'],
  ['/assets/past-event-4.png','18 January 2025','Career & Professional Growth','Exploring numerical insights to gain perspective on career choices, strengths and professional direction.'],
];

export default function Event(){return <main><SiteHeader/>
  <section className="event-hero event-showcase"><div className="event-hero-copy"><p className="eyebrow"><Sparkles size={14}/> Learn. Explore. Experience.</p><h1>Workshops &amp; Events <em>by Numerixx</em></h1><div className="gold-rule" style={{ margin: '18px 0 20px' }}/><p className="event-hero-intro">Interactive learning experiences exploring numbers, human behaviour, self-awareness and practical applications.</p><div style={{ marginTop: '32px' }}><a className="gold-button" style={{ width: 'max-content' }} href="#past-events">Explore Past Events <ArrowRight size={16}/></a></div></div><div className="event-hero-photo"><img src="/assets/contact-hero-harpreet.png" alt="Harpreet Kaur, Numerixx workshop host"/></div><div className="event-wave"/></section>
  <section className="event-benefits">{benefits.map(([Icon,title,copy])=>{const I=Icon as typeof Star;return <article key={String(title)}><span><I/></span><h3>{String(title)}</h3><p>{String(copy)}</p></article>})}</section>
  <section className="event-agenda" id="event-agenda"><p className="eyebrow centered">Event agenda</p><h2>What You&apos;ll Learn</h2><div className="agenda-grid">{agenda.map(([Icon,title],i)=>{const I=Icon as typeof Heart;return <article key={String(title)}><span className="agenda-icon"><I/></span><div><small>0{i+1}</small><h3>{String(title)}</h3></div></article>})}</div></section>
  <section className="past-events" id="past-events"><p className="eyebrow centered">Past events</p><h2>Moments of Learning &amp; Transformation</h2><div className="past-grid">{past.map(([image,date,title,copy])=><article key={String(title)}><img src={String(image)} alt={String(title)}/><div><span><CalendarDays size={13}/> {String(date)}</span><h3>{String(title)}</h3><p>{String(copy)}</p><a href="#past-events">View Highlights <ArrowRight size={14}/></a></div></article>)}</div><a className="outline-button all-events" href="#past-events">View All Past Events</a></section>
  <section className="event-speaker"><img src="/assets/harpreet-portrait-provided.png" alt="Harpreet Kaur"/><div><p className="eyebrow">Featured speaker</p><h2>Harpreet Kaur</h2><h3>Behavioral Analyst and Strategic Consultant</h3><div className="gold-rule"/><p>Researcher and practitioner exploring numerical systems, human behaviour and decision-making. Through Numerixx, she translates numerical insights into practical perspectives for personal and professional lives.</p></div></section>
  <SiteFooter/>
  </main>}
