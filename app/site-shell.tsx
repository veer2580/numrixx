'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Clock3, HeartHandshake, Mail, MapPin, Menu, Phone, ShieldCheck, X } from 'lucide-react';

const links = [['/','Home'],['/about','About'],['/services','Services'],['/supportive-tools','Supportive Tools'],['/knowledge-center','Knowledge Center'],['/event','Events'],['/contact','Contact']];
export function SiteHeader(){
  const [menuOpen,setMenuOpen]=useState(false);
  const pathname=usePathname();
  useEffect(()=>setMenuOpen(false),[pathname]);
  return <header className={`site-header${menuOpen?' menu-open':''}`}>
    <Link className="brand" href="/" aria-label="Numerixx home"><img className="brand-logo" src="/assets/numerixx-logo.png" alt=""/><span><img className="brand-wordmark" src="/assets/numerixx-wordmark.png" alt="Numerixx"/><small>Decode · Understand · Transform</small></span></Link>
    <nav aria-label="Primary navigation">{links.map(([href,label])=><Link href={href} key={href} aria-current={pathname===href?'page':undefined}>{label}</Link>)}</nav>
    <Link className="button button-small" href="/contact">Book appointment <ArrowUpRight size={15}/></Link>
    <button className="menu" type="button" aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(open=>!open)}>{menuOpen?<X/>:<Menu/>}</button>
    <div className="mobile-navigation" id="mobile-navigation" aria-hidden={!menuOpen}>
      {links.map(([href,label])=><Link href={href} key={href} aria-current={pathname===href?'page':undefined}>{label}</Link>)}
      <Link className="button" href="/contact">Book appointment <ArrowUpRight size={16}/></Link>
    </div>
  </header>
}
export function SiteFooter(){return <footer className="site-footer">
  <div className="footer-glow" aria-hidden="true"/>
  <section className="footer-main">
    <div className="footer-intro"><Link className="brand footer-brand" href="/"><img className="brand-logo" src="/assets/numerixx-logo.png" alt=""/><span><img className="brand-wordmark" src="/assets/numerixx-wordmark.png" alt="Numerixx"/><small>Decode · Understand · Transform</small></span></Link><p>Research-led numerology and thoughtful guidance to help you understand your patterns, make clearer choices and move forward with confidence.</p><Link className="footer-cta" href="/contact">Book a consultation <ArrowRight size={15}/></Link></div>
    <div className="footer-column"><h3>Explore</h3><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/about">Research</Link><Link href="/event">Events</Link><Link href="/knowledge-center">Insights</Link></div>
    <div className="footer-column"><h3>Consultation</h3><Link href="/services">Personalized Sessions</Link><Link href="/business-consulting">Career &amp; Business</Link><Link href="/services">Decision Support</Link><Link href="/about">Human Behaviour</Link><Link href="/services">Strategic Pattern Analysis</Link></div>
    <div className="footer-column"><h3>Work With Us</h3><Link href="/contact">Personal</Link><Link href="/business-consulting">Business</Link><Link href="/contact">Consulting</Link></div>
    <div className="footer-column footer-contact"><h3>Get in touch</h3><a href="tel:+919983305333"><Phone/> +91 99833 05333</a><a href="mailto:numerixx99@gmail.com"><Mail/> numerixx99@gmail.com</a><span><MapPin/> Jaipur, Rajasthan, India</span><span><Clock3/> Mon - Sat, 10AM - 7PM</span></div>
  </section>
  <section className="footer-trust"><span><ShieldCheck/>100% Confidential</span><span><HeartHandshake/>Personalised Guidance</span><span>✦ Research-Led Approach</span><span>300+ Clients Guided</span></section>
  <section className="footer-bottom"><p>@Created by Antellay Labs a Numerixx all rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><Link href="/refund-policy">Refund Policy</Link><Link href="/disclaimer">Disclaimer</Link></div><p>Clarity begins with understanding.</p></section>
  </footer>}
export function PageHero({eyebrow,title,children}:{eyebrow:string;title:React.ReactNode;children:React.ReactNode}){return <section className="page-hero"><div><p className="eyebrow">✦ {eyebrow}</p><h1>{title}</h1><p>{children}</p></div></section>}
