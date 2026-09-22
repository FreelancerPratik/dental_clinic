/**
 * ServicesPreview.jsx — 6-card services grid on home page
 */
import { Link } from 'react-router-dom';

const SERVICES = [
  { id: 'service-checkup',  icon: '🔍', mr: 'दातांची तपासणी',          en: 'Dental Examination',              desc: 'सर्वसाधारण दंत तपासणी व उपचार. आपल्या दातांच्या समस्येचे योग्य निदान करून दीर्घकाळ टिकणारे उपचार.' },
  { id: 'service-cleaning', icon: '✨', mr: 'दातांची स्वच्छता व पॉलिशिंग', en: 'Scaling & Polishing',           desc: 'प्रोफेशनल दात स्वच्छता व पॉलिशिंगद्वारे दातांची चमक वाढवा आणि हिरड्यांचे आजार रोखा.' },
  { id: 'service-rct',      icon: '🦷', mr: 'रूट कॅनाल उपचार',          en: 'Root Canal Treatment',            desc: 'आधुनिक तंत्रज्ञानाने वेदनारहित रूट कॅनाल उपचार. दात वाचवा, सुंदर हास्य जपा.' },
  { id: 'service-crown',    icon: '👑', mr: 'क्राऊन व ब्रिज',             en: 'Crown & Bridge',                  desc: 'उच्च दर्जाचे क्राऊन व ब्रिज उपचार. तुटलेले किंवा खराब झालेले दात पुन्हा सुंदर बनवा.' },
  { id: 'service-cosmetic', icon: '😊', mr: 'कॉस्मेटिक डेंटिस्ट्री',    en: 'Cosmetic Dentistry & Smile Design', desc: 'स्माईल डिझाईन, व्हिनिअर्स, टीथ व्हाईटनिंगद्वारे आपले हास्य अधिक सुंदर बनवा.' },
  { id: 'service-implants', icon: '🔩', mr: 'डेंटल इम्प्लांट्स',         en: 'Dental Implants',                 desc: 'गेलेल्या दाताऐवजी कायमस्वरूपी इम्प्लांट. टायटॅनियम इम्प्लांटद्वारे नैसर्गिक दातासारखा अनुभव.' },
];

const delays = [1, 2, 3, 1, 2, 3];

export default function ServicesPreview() {
  return (
    <section className="section section--cream" id="services-preview" aria-label="Our Services">
      <div className="container">
        <div className="text-center reveal">
          <div className="section-label">आमच्या सेवा</div>
          <h2 className="section-title">
            आमच्या येथे उपलब्ध<br /><span>दंत उपचार</span>
          </h2>
          <div className="gold-divider gold-divider--center" />
          <p className="section-subtitle">आधुनिक तंत्रज्ञान व वैयक्तिक काळजीसह सर्वोत्तम दंत उपचार</p>
        </div>

        <div className="services-preview-grid">
          {SERVICES.map(({ id, icon, mr, en, desc }, i) => (
            <article key={id} className={`service-card reveal reveal-delay-${delays[i]}`} id={id}>
              <div className="service-card__icon">{icon}</div>
              <div className="service-card__title-marathi">{mr}</div>
              <div className="service-card__title-en">{en}</div>
              <p className="service-card__desc">{desc}</p>
            </article>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
          <Link to="/services" className="btn btn--primary btn--lg" id="view-all-services-btn">
            सर्व सेवा पाहा →
          </Link>
        </div>
      </div>
    </section>
  );
}
