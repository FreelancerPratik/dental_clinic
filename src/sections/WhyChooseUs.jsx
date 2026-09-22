/**
 * WhyChooseUs.jsx — 4 feature cards on dark background
 */
const FEATURES = [
  { id: 'feature-modern',      icon: '🖥️', mr: 'आधुनिक तंत्रज्ञान', en: 'Modern Technology',    desc: 'डिजिटल एक्स-रे, OPG, आधुनिक यंत्रसामग्री वापरून अचूक निदान व उपचार.', delay: 1 },
  { id: 'feature-accurate',    icon: '🎯', mr: 'अचूक निदान',         en: 'Accurate Diagnosis',   desc: 'प्रत्येक रुग्णाच्या समस्येचा सखोल अभ्यास करून अचूक व योग्य उपचार योजना.', delay: 2 },
  { id: 'feature-personal',    icon: '🤝', mr: 'वैयक्तिक काळजी',    en: 'Personal Care',        desc: 'प्रत्येक रुग्णास वैयक्तिक लक्ष देऊन उपचार. तुमच्या आरामाची आमची जबाबदारी.', delay: 3 },
  { id: 'feature-longlasting', icon: '⏳', mr: 'दीर्घकाळ टिकणारे', en: 'Long-lasting Results', desc: 'उच्च दर्जाचे साहित्य व तंत्र वापरून दीर्घकाळ टिकणारे उपचार परिणाम.', delay: 4 },
];

export default function WhyChooseUs() {
  return (
    <section className="section section--dark" id="why-us" aria-label="Why Choose Us">
      <div className="container">
        <div className="text-center reveal">
          <div className="section-label" style={{ color: 'var(--color-gold)' }}>आमची वैशिष्ट्ये</div>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>आम्हाला का निवडावे?</h2>
          <div className="gold-divider gold-divider--center" />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>
            आपल्या दातांच्या समस्येचे योग्य निदान करून आपल्यासाठी योग्य आणि दीर्घकाळ टिकणाऱ्या उपचारांचा पर्याय
          </p>
        </div>

        <div className="why-grid">
          {FEATURES.map(({ id, icon, mr, en, desc, delay }) => (
            <article key={id} className={`feature-card reveal reveal-delay-${delay}`} id={id}>
              <div className="feature-card__icon">{icon}</div>
              <h3 className="feature-card__title">{mr}</h3>
              <div className="feature-card__title-en">{en}</div>
              <p className="feature-card__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
