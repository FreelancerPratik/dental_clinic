/**
 * DoctorTeaser.jsx — Doctor profile card on Home page
 */
import { Link } from 'react-router-dom';
import doctorImg from '../assets/images/doctor.jpg';

const FEATURES = [
  { text: 'आधुनिक तंत्रज्ञान',          sub: 'Digital X-Ray, OPG, Modern Equipment' },
  { text: 'अचूक निदान',                 sub: 'Comprehensive dental diagnosis' },
  { text: 'वैयक्तिक काळजी',            sub: 'Personalized treatment for every patient' },
  { text: 'दीर्घकाळ टिकणारे उपचार',   sub: 'Long-lasting, quality dental treatments' },
];

export default function DoctorTeaser() {
  return (
    <section className="section section--cream" id="about-teaser" aria-label="About Doctor">
      <div className="container">
        <div className="doctor-card">
          {/* Image */}
          <div className="doctor-card__image-wrap reveal reveal--left">
            <img
              src={doctorImg}
              alt="Dr. Manthan P. Javardikar — BDS MDS Prosthodontics"
              className="doctor-card__image"
              loading="lazy"
            />
            <div
              className="doctor-card__badge"
              style={{ position: 'absolute', bottom: '-1.25rem', right: '-1.25rem' }}
            >
              <div className="doctor-card__badge-years">10+</div>
              <div className="doctor-card__badge-label">वर्षांचा अनुभव</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal--right">
            <div className="section-label">आपले डॉक्टर</div>
            <h2 className="doctor-card__name-marathi">डॉ. मंथन प्र. जवर्डीकर</h2>
            <p className="doctor-card__name-en">Dr. Manthan P. Javardikar</p>
            <p className="doctor-card__qualifications">B.D.S., M.D.S.</p>
            <div className="doctor-card__specialization">
              <span>🏆</span> Prosthodontics, Crown &amp; Bridge and Implantology
            </div>

            <div className="doctor-card__features">
              {FEATURES.map(({ text, sub }) => (
                <div key={text} className="doctor-feature">
                  <div className="doctor-feature__check">✓</div>
                  <div>
                    <div className="doctor-feature__text">{text}</div>
                    <div className="doctor-feature__sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link to="/about"   className="btn btn--primary" id="learn-more-doctor-btn">अधिक जाणून घ्या</Link>
              <Link to="/contact" className="btn btn--outline" id="book-appointment-doctor-btn">📅 भेट बुक करा</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
