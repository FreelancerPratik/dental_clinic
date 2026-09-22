/**
 * About.jsx — Doctor profile, qualifications, mission, technology
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCounter }      from '../hooks/useCounter';
import PageHero            from '../components/PageHero';
import AppointmentBanner   from '../components/AppointmentBanner';
import doctorImg           from '../assets/images/doctor.jpg';

const DOCTOR_FEATURES = [
  { text: 'आधुनिक तंत्रज्ञान',         sub: 'Digital X-Ray, OPG, Modern Equipment' },
  { text: 'अचूक निदान',                sub: 'Comprehensive dental diagnosis' },
  { text: 'वैयक्तिक काळजी',           sub: 'Personalized treatment for every patient' },
  { text: 'दीर्घकाळ टिकणारे उपचार',  sub: 'Long-lasting, quality dental treatments' },
];

const QUALIFICATIONS = [
  { icon: '🎓', degree: 'B.D.S.',  detail: 'Bachelor of Dental Surgery\nदंत शल्यचिकित्सा पदवी' },
  { icon: '🏅', degree: 'M.D.S.',  detail: 'Master of Dental Surgery\nदंत शल्यचिकित्सा पदव्युत्तर पदवी' },
];

const MISSION = [
  { icon: '🖥️', title: 'आधुनिक तंत्रज्ञान', desc: 'नवीनतम दंत तंत्रज्ञान व साधनांचा वापर करून अचूक व जलद उपचार देण्यावर आमचा भर.' },
  { icon: '💙', title: 'रुग्ण केंद्रित काळजी', desc: 'प्रत्येक रुग्ण आमच्यासाठी महत्त्वाचा आहे. त्यांचा आराम, विश्वास व समाधान हे आमचे प्राथमिक ध्येय.' },
  { icon: '⚡', title: 'दीर्घकालीन परिणाम', desc: 'तात्पुरते उपाय नाही — उच्च दर्जाचे साहित्य व तंत्रज्ञान वापरून दीर्घकाळ टिकणारे उपचार.' },
];

const TECH = [
  { icon: '📡', name: 'Digital X-Ray' }, { icon: '🦷', name: 'OPG Machine' },
  { icon: '⚙️', name: 'Rotary Endodontics' }, { icon: '💡', name: 'LED Curing Light' },
  { icon: '🔬', name: 'Ultrasonic Scaler' }, { icon: '🏥', name: 'Implant System' },
  { icon: '💻', name: 'Digital Smile Design' }, { icon: '🧪', name: 'Sterilization Unit' },
];

const ABOUT_STATS = [
  { target: 5000, suffix: '+', duration: 2200, label: 'समाधानी रुग्ण' },
  { target: 10,   suffix: '+', duration: 1800, label: 'वर्षांचा अनुभव', delay: 1 },
  { target: 500,  suffix: '+', duration: 2000, label: 'डेंटल इम्प्लांट्स', delay: 2 },
  { target: 98,   suffix: '%', duration: 2000, label: 'यशस्वी उपचार दर', delay: 3 },
];

function StatItem({ target, suffix, duration, label, delay }) {
  const ref = useCounter(target, suffix, duration);
  return (
    <div className={`stat-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
      <div className="stat-card__number" ref={ref}>0</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

export default function About() {
  useScrollReveal([]);
  useEffect(() => {
    document.title = 'डॉक्टरांबद्दल | डॉ. जवर्डीकर दातांचा दवाखाना';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        badge="About The Doctor"
        titleEn='डॉ. मंथन प्र. <span>जवर्डीकर</span>'
        subtitle="B.D.S., M.D.S. | Prosthodontics, Crown & Bridge & Implantology"
        breadcrumb="डॉक्टरांबद्दल"
      />

      {/* Doctor Profile */}
      <section className="section section--cream" aria-label="Doctor Profile">
        <div className="container">
          <div className="doctor-card">
            <div className="doctor-card__image-wrap reveal reveal--left">
              <img
                src={doctorImg}
                alt="Dr. Manthan P. Javardikar BDS MDS Prosthodontics"
                className="doctor-card__image"
              />
              <div className="doctor-card__badge" style={{ position: 'absolute', bottom: '-1.25rem', right: '-1.25rem' }}>
                <div className="doctor-card__badge-years">10+</div>
                <div className="doctor-card__badge-label">Years of Excellence</div>
              </div>
            </div>
            <div className="reveal reveal--right">
              <div className="section-label">आपले डॉक्टर</div>
              <h2 className="doctor-card__name-marathi">डॉ. मंथन प्र. जवर्डीकर</h2>
              <p className="doctor-card__name-en">Dr. Manthan P. Javardikar</p>
              <div className="doctor-card__specialization">
                <span>🏆</span> Prosthodontics, Crown &amp; Bridge and Implantology
              </div>
              <p style={{ fontSize: 'var(--fs-base)', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                डॉ. मंथन प्र. जवर्डीकर हे अंजनगाव सुर्जी येथील एक अनुभवी दंत विशेषज्ञ आहेत. त्यांनी BDS व MDS (Prosthodontics, Crown &amp; Bridge and Implantology) या उच्च शिक्षणानंतर आधुनिक तंत्रज्ञानाचा वापर करून रुग्णांना सर्वोत्तम दंत उपचार देण्याचे व्रत घेतले आहे.
              </p>
              <p style={{ fontSize: 'var(--fs-base)', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                त्यांचा विश्वास आहे की प्रत्येक रुग्णास वैयक्तिक लक्ष व काळजी मिळायला हवी. म्हणूनच ते प्रत्येक रुग्णाच्या समस्येचे सखोल निदान करून, त्यांच्या जीवनशैलीस अनुरूप दीर्घकाळ टिकणाऱ्या उपचारांचा पर्याय सुचवतात.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn btn--primary" id="about-book-btn">📅 भेट बुक करा</Link>
                <Link to="/services" className="btn btn--outline" id="about-services-btn">आमच्या सेवा</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section section--dark" aria-label="Qualifications">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label" style={{ color: 'var(--color-gold)' }}>Education</div>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              शैक्षणिक <span style={{ color: 'var(--color-gold)' }}>पात्रता</span>
            </h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid grid-2" style={{ maxWidth: 800, margin: '0 auto', gap: 'var(--space-5)' }}>
            {QUALIFICATIONS.map(({ icon, degree, detail }, i) => (
              <div key={degree} className={`qual-card reveal reveal-delay-${i + 1}`}>
                <div className="qual-card__icon">{icon}</div>
                <div>
                  <div className="qual-card__degree">{degree}</div>
                  <div className="qual-card__detail" style={{ whiteSpace: 'pre-line' }}>{detail}</div>
                </div>
              </div>
            ))}
            <div className="qual-card reveal reveal-delay-3" style={{ gridColumn: '1 / -1' }}>
              <div className="qual-card__icon">🦷</div>
              <div>
                <div className="qual-card__degree">Prosthodontics, Crown &amp; Bridge and Implantology</div>
                <div className="qual-card__detail">विशेषज्ञता — कृत्रिम दंत, क्राऊन-ब्रिज व डेंटल इम्प्लांट्स</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--cream" aria-label="Mission">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">आमचे तत्त्व</div>
            <h2 className="section-title">आमचे <span>ध्येय व मूल्ये</span></h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid grid-3">
            {MISSION.map(({ icon, title, desc }, i) => (
              <div key={title} className={`mission-card reveal reveal-delay-${i + 1}`}>
                <div className="mission-card__icon">{icon}</div>
                <h3 className="mission-card__title">{title}</h3>
                <p className="mission-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section section--navy" aria-label="Technology Used">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label" style={{ color: 'var(--color-gold)' }}>Equipment</div>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              आधुनिक <span style={{ color: 'var(--color-gold)' }}>यंत्रसामग्री</span>
            </h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <div className="grid grid-4">
            {TECH.map(({ icon, name }, i) => (
              <div key={name} className={`tech-item reveal reveal-delay-${(i % 4) + 1}`}>
                <span className="tech-item__icon">{icon}</span>
                <span className="tech-item__name" style={{ color: 'var(--color-white)' }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar" aria-label="About stats">
        <div className="container">
          <div className="stats-bar__grid">
            {ABOUT_STATS.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
