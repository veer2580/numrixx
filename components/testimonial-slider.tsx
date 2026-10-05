'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const items = [
  {
    image: '/assets/client-reflection.jpg',
    name: 'Gaurav Rahar',
    role: 'Client Review · Google',
    initials: 'GR',
    quote:
      'Got numerology readings for myself and my daughter, and I must say it was really insightful. The guidance not only helped us understand our strengths but also gave us a clear idea of what to focus on in the coming years. Highly recommend for anyone looking for clarity and direction!',
    note: 'Clarity and direction for personal and family life.',
  },
  {
    image: '/assets/offer-3.jpg',
    name: 'Ankita Pal',
    role: 'Client Review · Google',
    initials: 'AP',
    quote:
      'I believe in numerology and considering my own personal life experience I am sharing ths review bcz I saw th results yes I do and continue to believe in numerology I suggest to approach expert and genuine numerologist Harpreet Kaur and i get experience with her Definitely u wll see great results 😊',
    note: 'Genuine guidance and tangible results.',
  },
  {
    image: '/assets/offer-5.jpg',
    name: 'Dr Dheerja Babbar Gaba',
    role: 'Local Guide · Google Review',
    initials: 'DG',
    quote:
      'Preeti is an incredible numerologist .. she guides , answers all your queries so patiently.. & gives you easy tips to follow .. I recommend her to everyone 😊',
    note: 'Patient guidance with practical, easy-to-follow tips.',
  },
  {
    image: '/assets/offer-7.jpg',
    name: 'Bhavishya Moyal',
    role: 'Client Review · Google',
    initials: 'BM',
    quote:
      "Mam, I'm absolutely thrilled with the bracelet! It has completely energized me, and I can feel a remarkable difference. I've never experienced such a beautiful, genuine product before. This bracelet has transformed my perspective entirely. Thank you for guiding it to me. Your remedies are 100% effective, and this proves that energies are real. I'm truly grateful for your guidance.",
    note: 'Transformative experience and genuine products.',
  },
];

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % items.length),
      5000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const move = (step: number) =>
    setActive((value) => (value + step + items.length) % items.length);
  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-track"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {items.map((item) => (
          <article className="testimonial-feature" key={item.name}>
            <img
              src={item.image}
              alt="Calm visual representing the client journey"
            />
            <div>
              <span className="quote-symbol">“</span>
              <blockquote>{item.quote}</blockquote>
              <p>{item.note}</p>
              <div className="testimonial-person">
                <b>{item.initials}</b>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
                <i>★★★★★</i>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button
        className="testimonial-arrow previous"
        type="button"
        aria-label="Previous testimonial"
        onClick={() => move(-1)}
      >
        <ChevronLeft />
      </button>
      <button
        className="testimonial-arrow next"
        type="button"
        aria-label="Next testimonial"
        onClick={() => move(1)}
      >
        <ChevronRight />
      </button>
      <div className="testimonial-dots">
        {items.map((item, index) => (
          <button
            type="button"
            className={index === active ? 'active' : ''}
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setActive(index)}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
}
