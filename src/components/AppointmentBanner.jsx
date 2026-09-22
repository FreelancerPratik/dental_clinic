/**
 * AppointmentBanner.jsx — Gold CTA strip used across pages
 */
import { Link } from 'react-router-dom';

export default function AppointmentBanner() {
  return (
    <section className="appt-banner" aria-label="Book Appointment">
      <div className="container">
        <div className="appt-banner__inner">
          <div className="appt-banner__text reveal reveal--left">
            <h2>तपासणीसाठी आजच भेट द्या!</h2>
            <p>आमच्याशी संपर्क करा आणि आपल्या दातांच्या समस्येतून मुक्त व्हा.</p>
          </div>
          <div className="appt-banner__actions reveal reveal--right">
            <div className="appt-banner__phone">
              <span>📞</span>
              <div>
                <a
                  href="tel:+919404338713"
                  style={{ color: 'var(--color-brown)', fontSize: 'var(--fs-xl)', fontWeight: 800, display: 'block' }}
                >
                  9404338713
                </a>
                <a
                  href="tel:+919404338713"
                  style={{ color: 'rgba(45,27,0,0.7)', fontSize: 'var(--fs-base)', fontWeight: 600 }}
                >
                  9404338713
                </a>
              </div>
            </div>
            <Link to="/contact" className="btn btn--white btn--lg" id="cta-book-btn">
              📅 अपॉइंटमेंट बुक करा
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
