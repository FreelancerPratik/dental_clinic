/**
 * HeroSection.jsx
 */
import { Link } from 'react-router-dom';

const PARTICLES = ['🦷', '✨', '🦷', '⭐', '🦷', '✨', '🦷', '⭐'];

export default function HeroSection() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="hero__bg-image" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span key={i} className={`particle particle--${i + 1}`}>{p}</span>
        ))}
      </div>

      <div className="hero__content container">
        <div className="hero-animate-1">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">अंजनगाव सुर्जी, जि. अमरावती</span>
          </span>
        </div>

        <h1 className="hero__title-marathi hero-animate-2">डॉ. जवर्डीकर</h1>
        <p className="hero__title-sub hero-animate-2">दातांचा दवाखाना</p>
        <p className="hero__tagline hero-animate-3">
          आपल्या दातांचे आरोग्य… आपल्या सुंदर हास्यासाठी!
        </p>

        <div className="hero-animate-4">
          <p className="hero__doctor">डॉ. मंथन प्र. जवर्डीकर</p>
          <p className="hero__credentials">
            B.D.S., M.D.S. &nbsp;|&nbsp; Prosthodontics, Crown &amp; Bridge and Implantology
          </p>
        </div>

        <div className="hero__actions hero-animate-5">
          <Link to="/contact" className="btn btn--primary btn--lg" id="hero-appointment-btn">
            📅 भेट बुक करा
          </Link>
          <Link to="/services" className="btn btn--ghost btn--lg" id="hero-services-btn">
            आमच्या सेवा पाहा
          </Link>
        </div>

        <div className="hero__phone hero-animate-5">
          <div className="hero__phone-item">
            <span>📞</span><a href="tel:+919404338713">9404338713</a>
          </div>
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.25)' }} />
          <div className="hero__phone-item">
            <span>📞</span><a href="tel:+919404338713">9404338713</a>
          </div>
        </div>

        {/* Mini stats */}
        <div className="hero-mini-stats hero-animate-5">
          {[
            { num: '5000+', label: 'समाधानी रुग्ण' },
            { num: '10+',   label: 'वर्षांचा अनुभव' },
            { num: '10',    label: 'उपचार सेवा' },
            { num: '98%',   label: 'यशस्वी उपचार' },
          ].map(({ num, label }) => (
            <div key={label} className="hero-mini-stat">
              <div className="hero-mini-stat__num">{num}</div>
              <div className="hero-mini-stat__label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>खाली स्क्रोल करा</span>
        <span style={{ fontSize: '1.2rem' }}>↓</span>
      </div>
    </section>
  );
}
