'use client';

import { useMemo, useState } from 'react';
import {
  AtSign,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';
import { SiteFooter, SiteHeader } from '../site-shell';

const connect = [
  [CalendarDays, 'Book an Appointment', 'Schedule your session at a time that works best for you.'],
  [MessageCircle, 'Chat on WhatsApp', 'Quick questions? Message us directly on WhatsApp.'],
  [Mail, 'Email Us', 'Drop us an email anytime. We typically respond within 24 hours.'],
  [AtSign, 'Follow Us', 'Stay inspired and updated. Follow us on Instagram.'],
];

const faqs = [
  ['How do I book a consultation?', 'Choose a date and time below, then confirm your booking. We will contact you with the next steps.'],
  ['Are sessions available online?', 'Yes. Sessions are available worldwide through Google Meet.'],
  ['What is your cancellation policy?', 'Please let us know at least 24 hours before your appointment if you need to reschedule.'],
  ['Do you offer customized reports?', 'Yes. Customised reports can be discussed during your initial consultation.'],
];

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortWeekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '04:30 PM', '06:00 PM'];

function getEndTimeRange(startTime: string, durationMinutes = 45): string {
  const match = startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return `${startTime} - ${startTime}`;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  const totalMinutes = hours * 60 + minutes + durationMinutes;
  let endHours = Math.floor(totalMinutes / 60) % 24;
  const endMinutes = totalMinutes % 60;
  const endPeriod = endHours >= 12 ? 'PM' : 'AM';
  endHours = endHours % 12 || 12;
  const endFormatted = `${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')} ${endPeriod}`;
  return `${startTime} - ${endFormatted}`;
}

function getGoogleCalendarUrl(date: Date, startTimeStr: string, name: string, service: string): string {
  const match = startTimeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  let hours = 14;
  let mins = 0;
  if (match) {
    hours = parseInt(match[1], 10);
    mins = parseInt(match[2], 10);
    if (match[3].toUpperCase() === 'PM' && hours < 12) hours += 12;
    if (match[3].toUpperCase() === 'AM' && hours === 12) hours = 0;
  }
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, mins);
  const end = new Date(start.getTime() + 45 * 60 * 1000);

  const toGCalString = (d: Date) => d.toISOString().replace(/-|:|\.\d+/g, '');
  const title = encodeURIComponent(`Numerixx Consultation: ${service} (${name || 'Client'})`);
  const details = encodeURIComponent(
    `Virtual 1:1 Consultation with Numerixx Consulting (Google Meet).\nClient: ${name}\nService: ${service}\nPlatform: Google Meet\nHelpline: +91 99833 05333`
  );
  const location = encodeURIComponent('Google Meet');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${toGCalString(start)}/${toGCalString(end)}&details=${details}&location=${location}`;
}

export default function Contact() {
  const today = useMemo(() => new Date(), []);

  // Calendar view state
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(8); // 8 is September (0-indexed)

  // Selected appointment slot
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonth, setSelectedMonth] = useState(8);
  const [selectedDay, setSelectedDay] = useState(23);
  const [selectedTime, setSelectedTime] = useState('02:00 PM');

  // Booking modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('NX-78421');

  // Booking details form
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Personal Numerology Consultation',
    notes: '',
  });

  // Top "Send us a message" state
  const [messageSent, setMessageSent] = useState(false);

  // Month navigation
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  // Calendar calculations
  const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayWeekday = new Date(viewYear, viewMonth, 1).getDay();
  // Monday = 0, Tuesday = 1, ... Sunday = 6
  const emptyPadSlots = (firstDayWeekday + 6) % 7;
  const monthDays = Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);

  // Selected date objects & formatted labels
  const selectedDateObj = useMemo(
    () => new Date(selectedYear, selectedMonth, selectedDay),
    [selectedYear, selectedMonth, selectedDay]
  );
  const selectedWeekdayName = weekdayNames[selectedDateObj.getDay()];
  const selectedShortWeekday = shortWeekdayNames[selectedDateObj.getDay()];
  const selectedMonthName = monthNames[selectedMonth];
  const selectedShortMonth = shortMonthNames[selectedMonth];

  const timeCardHeader = `${selectedWeekdayName}, ${selectedDay} ${selectedMonthName}`;
  const sessionCardDate = `${selectedShortWeekday}, ${selectedDay} ${selectedShortMonth} ${selectedYear}`;
  const timeRange = getEndTimeRange(selectedTime, 45);

  const isCurrentOrPastMonth =
    viewYear < today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  const handleSelectDay = (d: number) => {
    const targetDate = new Date(viewYear, viewMonth, d, 23, 59, 59);
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (targetDate < startOfToday) return;

    setSelectedYear(viewYear);
    setSelectedMonth(viewMonth);
    setSelectedDay(d);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `NX-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(randomRef);
    setIsSuccess(true);
  };

  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="contact-reference-hero">
        <img
          className="contact-hero-scene"
          src="/assets/contact-hero-harpreet.png"
          alt="Harpreet Kaur seated in the Numerixx consultation studio"
        />
        <div className="contact-reference-copy">
          <span className="breadcrumb">Home　›　Contact Us</span>
          <p className="eyebrow">
            <Sparkles size={14} /> We&apos;re here for you
          </p>
          <h1>Let&apos;s Connect</h1>
          <div className="gold-rule" />
          <p>
            Have a question, want to explore a consultation, or simply unsure where to begin? Reach
            out and we&apos;ll help you find the right place to start.
          </p>
          <div className="contact-highlights">
            <div>
              <Phone />
              <strong>Phone</strong>
              <span>+91 99833 05333</span>
            </div>
            <div>
              <Mail />
              <strong>Email</strong>
              <span>numerixx99@gmail.com</span>
            </div>
            <div>
              <Clock3 />
              <strong>Hours</strong>
              <span>Mon - Sat: 10AM - 7PM (IST)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="contact-reference-body">
        <div className="contact-panels">
          {/* Message Panel */}
          <form
            className="message-panel"
            onSubmit={e => {
              e.preventDefault();
              setMessageSent(true);
            }}
          >
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

            {messageSent ? (
              <div className="message-success-banner">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Thank you! Your message has been sent.</strong>
                  <div style={{ fontSize: '12px', marginTop: '2px' }}>
                    Harpreet Kaur and the Numerixx team will respond within 24 hours.
                  </div>
                </div>
              </div>
            ) : null}

            <div className="form-two">
              <label>
                <UserRound />
                <input required aria-label="Your name" placeholder="Your Name" />
              </label>
              <label>
                <Mail />
                <input required aria-label="Email address" type="email" placeholder="Email Address" />
              </label>
            </div>
            <label>
              <Phone />
              <input required aria-label="Phone number" type="tel" placeholder="Phone Number" />
            </label>
            <select aria-label="Service of interest" defaultValue="">
              <option value="" disabled>
                I&apos;m interested in
              </option>
              <option>Personal Numerology Consultation</option>
              <option>Relationship Guidance</option>
              <option>Business Numerology</option>
              <option>Career Guidance</option>
            </select>
            <textarea required aria-label="Your message" placeholder="Your Message" />
            <button type="submit">
              Send Message <Send size={16} />
            </button>
            <small>
              <ShieldCheck size={14} /> Your information is 100% confidential and secure.
            </small>
          </form>

          {/* Connect Panel */}
          <section className="connect-panel">
            <h2>Other Ways to Connect</h2>
            {connect.map(([Icon, title, copy]) => {
              const I = Icon as typeof Mail;
              return (
                <a
                  href={
                    String(title).includes('WhatsApp')
                      ? 'https://wa.me/919983305333'
                      : String(title).includes('Email')
                        ? 'mailto:numerixx99@gmail.com'
                        : '#booking'
                  }
                  key={String(title)}
                >
                  <span className="connect-icon">
                    <I />
                  </span>
                  <span>
                    <strong>{String(title)}</strong>
                    <small>{String(copy)}</small>
                  </span>
                  <ChevronRight />
                </a>
              );
            })}
            <blockquote>
              “ Every meaningful conversation
              <br />
              begins with connection. ”
            </blockquote>
          </section>
        </div>

        {/* Schedule Your Session Section */}
        <section className="booking-reference" id="booking">
          <header className="booking-heading">
            <div>
              <p className="eyebrow">
                <CalendarDays size={14} /> Book a consultation
              </p>
              <h2>Schedule Your Session</h2>
              <p>Select a convenient date and time for your private one-to-one consultation.</p>
            </div>
            <div className="booking-steps" aria-label="Booking steps">
              <span className="active"><b>1</b> Choose date</span><i />
              <span><b>2</b> Select time</span><i />
              <span><b>3</b> Confirm</span>
            </div>
          </header>

          <div className="booking-layout">
            <aside className="booking-intro">
              <span className="booking-duration"><Clock3 /> 45-minute session</span>
              <h3>Your Clarity Session</h3>
              <p>A focused conversation designed around your questions, goals and personal numbers.</p>
              <ul>
                <li><UserRound /><span><strong>Personalised guidance</strong><small>A private 1:1 consultation</small></span></li>
                <li><ShieldCheck /><span><strong>Completely confidential</strong><small>Your details remain secure</small></span></li>
                <li><MessageCircle /><span><strong>Meet from anywhere</strong><small>Online through Google Meet</small></span></li>
              </ul>
            </aside>

            <div className="booking-picker">
            {/* Dynamic Calendar Card */}
            <div className="calendar-card">
            <header>
              <button
                type="button"
                aria-label="Previous month"
                onClick={handlePrevMonth}
                disabled={isCurrentOrPastMonth}
                title={isCurrentOrPastMonth ? 'Cannot view past months' : 'Previous month'}
              >
                ‹
              </button>
              <span><small>Select a date</small><strong>{monthNames[viewMonth]} {viewYear}</strong></span>
              <button
                type="button"
                aria-label="Next month"
                onClick={handleNextMonth}
                title="Next month"
              >
                ›
              </button>
            </header>

            <div className="calendar-days">
              <b>MON</b>
              <b>TUE</b>
              <b>WED</b>
              <b>THU</b>
              <b>FRI</b>
              <b>SAT</b>
              <b>SUN</b>

              {/* Offset padding slots */}
              {Array.from({ length: emptyPadSlots }).map((_, idx) => (
                <span className="empty" key={`pad-${idx}`} aria-hidden="true" />
              ))}

              {/* Day cells */}
              {monthDays.map(d => {
                const dayDate = new Date(viewYear, viewMonth, d, 23, 59, 59);
                const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                const isPast = dayDate < startOfToday;
                const isSelected =
                  d === selectedDay &&
                  viewMonth === selectedMonth &&
                  viewYear === selectedYear;
                const isToday =
                  d === today.getDate() &&
                  viewMonth === today.getMonth() &&
                  viewYear === today.getFullYear();

                const classNames = [
                  'cal-day',
                  isSelected ? 'selected' : '',
                  isToday ? 'today-slot' : '',
                  isPast ? 'disabled' : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <span
                    role="button"
                    tabIndex={isPast ? -1 : 0}
                    className={classNames}
                    key={`day-${d}`}
                    onClick={() => handleSelectDay(d)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelectDay(d);
                      }
                    }}
                    title={
                      isPast
                        ? 'Past date'
                        : `${weekdayNames[new Date(viewYear, viewMonth, d).getDay()]}, ${d} ${monthNames[viewMonth]} ${viewYear}`
                    }
                  >
                    {d}
                  </span>
                );
              })}
            </div>
            </div>

            {/* Dynamic Time Card */}
            <div className="time-card">
              <div className="time-card-heading"><small>Available times</small><strong>{timeCardHeader}</strong><span>Indian Standard Time (IST)</span></div>
              <div className="time-options">
                {timeSlots.map(t => (
                  <button
                    type="button"
                    className={t === selectedTime ? 'selected' : ''}
                    key={t}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            </div>

          {/* Live Session Card */}
          <aside className="session-card">
            <div className="session-card-head"><CalendarDays /><span><small>Booking summary</small><strong>Your Session</strong></span></div>
            <dl>
              <div><dt>Date</dt><dd>{sessionCardDate}</dd></div>
              <div><dt>Time</dt><dd>{timeRange}</dd></div>
              <div><dt>Duration</dt><dd>45 Minutes</dd></div>
              <div><dt>Platform</dt><dd>Google Meet (Virtual)</dd></div>
            </dl>
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(true);
                setIsSuccess(false);
              }}
            >
              Confirm Booking <ChevronRight size={16} />
            </button>
            <small><ShieldCheck /> Secure booking · Easy rescheduling</small>
          </aside>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-reference">
          <div className="location-info-card">
            <p className="location-label"><MapPin /> Visit us</p>
            <h2>Our Location</h2>
            <div className="location-address">
              <span><MapPin /></span>
              <div><small>Studio address</small><strong>Numerixx Consulting</strong><p>Jaipur, Rajasthan, India</p></div>
            </div>
            <div className="location-service-note"><MessageCircle /><p><strong>Online consultations available</strong><span>Serving clients across India and worldwide.</span></p></div>
            <a
              href="https://maps.google.com/?q=Jaipur,+Rajasthan,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions <ExternalLink size={13} />
            </a>
          </div>
          <div className="location-map-wrap">
            <iframe
              title="Numerixx Consulting Location Map - Jaipur, Rajasthan"
              src="https://maps.google.com/maps?q=Jaipur%2C%20Rajasthan%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="office-info-card">
            <p className="location-label"><Sparkles /> Connect with us</p>
            <h2>Our Office</h2>
            <div className="office-detail-list">
              <a href="tel:+919983305333"><span><Phone /></span><div><small>Call us</small><strong>+91 99833 05333</strong></div></a>
              <a href="mailto:numerixx99@gmail.com"><span><Mail /></span><div><small>Email us</small><strong>numerixx99@gmail.com</strong></div></a>
              <div><span><Clock3 /></span><div><small>Working hours</small><strong>Mon - Sat · 10AM - 7PM</strong><em>Indian Standard Time</em></div></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-reference">
          <header className="faq-heading">
            <p className="eyebrow">
              <Sparkles size={14} /> Quick answers
            </p>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before scheduling your consultation.</p>
          </header>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <span>{q}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className="faq-answer"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </section>
      </section>

      {/* Interactive Booking Modal */}
      {isModalOpen && (
        <div
          className="booking-modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={e => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="booking-modal-card">
            <div className="booking-modal-header">
              <h3>{isSuccess ? 'Booking Confirmed' : 'Schedule Your Consultation'}</h3>
              <button
                type="button"
                className="booking-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {!isSuccess ? (
              <>
                <div className="booking-modal-badge">
                  <CalendarDays size={18} />
                  <div>
                    <strong>{sessionCardDate}</strong> at <strong>{timeRange} (IST)</strong>
                    <div style={{ fontSize: '11px', color: '#68598a', marginTop: '2px' }}>
                      45-Minute 1:1 Consultation via Google Meet
                    </div>
                  </div>
                </div>

                <div className="booking-modal-body">
                  <form className="booking-modal-form" onSubmit={handleBookingSubmit}>
                    <div className="booking-modal-row">
                      <label>
                        Your Full Name *
                        <input
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={bookingForm.name}
                          onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                        />
                      </label>
                      <label>
                        Phone / WhatsApp *
                        <input
                          required
                          type="tel"
                          placeholder="+91 99833 05333"
                          value={bookingForm.phone}
                          onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        />
                      </label>
                    </div>

                    <label>
                      Email Address *
                      <input
                        required
                        type="email"
                        placeholder="your.email@example.com"
                        value={bookingForm.email}
                        onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
                      />
                    </label>

                    <label>
                      Consultation Focus
                      <select
                        value={bookingForm.service}
                        onChange={e => setBookingForm({ ...bookingForm, service: e.target.value })}
                      >
                        <option value="Personal Numerology Consultation">
                          Personal Numerology Consultation
                        </option>
                        <option value="Business Numerology & Brand Name">
                          Business Numerology &amp; Brand Name
                        </option>
                        <option value="Relationship & Marriage Guidance">
                          Relationship &amp; Marriage Guidance
                        </option>
                        <option value="Career & Financial Forecast">
                          Career &amp; Financial Forecast
                        </option>
                        <option value="Name Correction & Baby Name">
                          Name Correction &amp; Baby Name
                        </option>
                      </select>
                    </label>

                    <label>
                      Date of Birth &amp; Any Specific Questions (Optional)
                      <textarea
                        placeholder="e.g. DOB: 14 Aug 1994, 08:30 AM. Seeking guidance on career change."
                        value={bookingForm.notes}
                        onChange={e => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      />
                    </label>

                    <div className="booking-modal-actions">
                      <button type="submit" className="booking-btn-primary">
                        Confirm Booking &amp; Reserve Slot <CalendarDays size={16} />
                      </button>

                      <a
                        href={`https://wa.me/919983305333?text=${encodeURIComponent(
                          `Hello Numerixx, I want to book a consultation session for ${sessionCardDate} at ${selectedTime} (${bookingForm.service}). My name is ${bookingForm.name || 'a client'}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booking-btn-whatsapp"
                      >
                        <MessageCircle size={16} /> Instant Booking on WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="booking-success-box">
                <div className="booking-success-icon">
                  <CheckCircle2 size={34} />
                </div>
                <h4>Consultation Slot Confirmed!</h4>
                <span className="booking-ref-tag">Booking Ref: {bookingRef}</span>
                <p>
                  Thank you, <strong>{bookingForm.name || 'Client'}</strong>. Your consultation with{' '}
                  <strong>Dr. Harpreet Kaur</strong> has been reserved.
                </p>

                <div className="booking-success-summary">
                  <div>
                    <strong>Date &amp; Time</strong>
                    <span>
                      {sessionCardDate}
                      <br />
                      {timeRange} (IST)
                    </span>
                  </div>
                  <div>
                    <strong>Consultation Focus</strong>
                    <span>{bookingForm.service}</span>
                  </div>
                  <div>
                    <strong>Platform</strong>
                    <span>Google Meet (Invite to {bookingForm.email || 'your email'})</span>
                  </div>
                  <div>
                    <strong>Contact Phone</strong>
                    <span>{bookingForm.phone || '+91 99833 05333'}</span>
                  </div>
                </div>

                <div className="booking-modal-actions" style={{ width: '100%', marginTop: '6px' }}>
                  <a
                    href={`https://wa.me/919983305333?text=${encodeURIComponent(
                      `Hello Numerixx Consulting! I have confirmed my session booking (Ref: ${bookingRef}) for ${sessionCardDate} at ${selectedTime} via Google Meet.\n\n• Name: ${bookingForm.name}\n• Service: ${bookingForm.service}\n• Phone: ${bookingForm.phone}\n• Email: ${bookingForm.email}${bookingForm.notes ? `\n• Notes: ${bookingForm.notes}` : ''}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-btn-whatsapp"
                  >
                    <MessageCircle size={16} /> Confirm on WhatsApp with Harpreet
                  </a>

                  <a
                    href={getGoogleCalendarUrl(
                      selectedDateObj,
                      selectedTime,
                      bookingForm.name,
                      bookingForm.service
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-btn-secondary"
                  >
                    <CalendarDays size={15} /> Add to Google Calendar
                  </a>

                  <button
                    type="button"
                    className="booking-btn-outline"
                    onClick={() => {
                      setIsSuccess(false);
                      setIsModalOpen(false);
                    }}
                  >
                    Done &amp; Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  );
}
