/**
 * Services.jsx — All 10 dental services as full detailed cards
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero          from '../components/PageHero';
import AppointmentBanner from '../components/AppointmentBanner';

const SERVICES = [
  {
    id: 'checkup', icon: '🔍',
    mr: 'दातांची तपासणी व सर्वसाधारण दंत उपचार',
    en: 'Dental Examination & General Treatment',
    desc: 'आपल्या दातांच्या सर्वांगीण तपासणीसाठी डॉ. जवर्डीकर आधुनिक साधनांचा वापर करतात. प्रत्येक रुग्णाच्या दातांची, हिरड्यांची व तोंडाची संपूर्ण तपासणी करून योग्य उपचार योजना तयार केली जाते.',
    points: ['Digital X-Ray द्वारे अचूक तपासणी', 'हिरड्यांची व दातांची संपूर्ण तपासणी', 'व्यक्तिगत उपचार योजना', 'दातांचे आरोग्य राखण्यासाठी सल्ला'],
  },
  {
    id: 'cleaning', icon: '✨',
    mr: 'दातांची स्वच्छता व पॉलिशिंग',
    en: 'Scaling & Polishing',
    desc: 'प्रोफेशनल स्केलिंग व पॉलिशिंगद्वारे दातांवरील प्लॅक, टार्टर व डाग काढले जातात. यामुळे दात चमकदार होतात व हिरड्यांचे आजार (Gum Disease) रोखले जातात.',
    points: ['अल्ट्रासॉनिक स्केलिंग', 'डाग व पिवळसरपणा दूर', 'हिरड्यांचे आरोग्य सुधारणे', 'श्वासाची दुर्गंधी कमी करणे'],
  },
  {
    id: 'rct', icon: '🦷',
    mr: 'रूट कॅनाल उपचार',
    en: 'Root Canal Treatment (RCT)',
    desc: 'आधुनिक रोटरी एंडोडोंटिक्स तंत्राने वेदनारहित रूट कॅनाल उपचार केले जातात. संक्रमित किंवा मृत दाताचा गर (Pulp) काढून दात वाचवला जातो.',
    points: ['Rotary Endodontics तंत्र', 'वेदनारहित व जलद उपचार', 'एकाच बैठकीत RCT शक्य', 'उपचारानंतर क्राऊन बसवणे'],
  },
  {
    id: 'crown', icon: '👑',
    mr: 'क्राऊन व ब्रिज',
    en: 'Crown & Bridge',
    desc: 'तुटलेले, खराब झालेले किंवा RCT झालेल्या दातांवर उच्च दर्जाचे Zirconia, PFM किंवा Metal Crown बसवले जाते. शेजारच्या दातांचा आधार घेऊन ब्रिज बनवला जातो.',
    points: ['Zirconia, PFM, Metal Crown उपलब्ध', 'नैसर्गिक दिसणारे व टिकाऊ', 'गेलेल्या दाताऐवजी ब्रिज', 'डिजिटल इम्प्रेशन तंत्र'],
  },
  {
    id: 'cosmetic', icon: '😊',
    mr: 'कॉस्मेटिक डेंटिस्ट्री व स्माईल डिझाईन',
    en: 'Cosmetic Dentistry & Smile Design',
    desc: 'तुमचे हास्य अधिक सुंदर, आत्मविश्वासपूर्ण बनवण्यासाठी डिजिटल स्माईल डिझाईन, व्हिनिअर्स, टीथ व्हाईटनिंग आणि बॉन्डिंग सेवा उपलब्ध.',
    points: ['Digital Smile Design', 'Porcelain Veneers', 'Teeth Whitening / Bleaching', 'Composite Bonding'],
  },
  {
    id: 'implants', icon: '🔩',
    mr: 'डेंटल इम्प्लांट्स',
    en: 'Dental Implants',
    desc: 'गेलेल्या दाताऐवजी टायटॅनियम इम्प्लांट हाडात बसवला जातो, ज्यावर क्राऊन लावले जाते. डॉ. जवर्डीकर MDS Implantology विशेषज्ञ आहेत.',
    points: ['Titanium Implant — दीर्घकाळ टिकाऊ', 'नैसर्गिक दातासारखा अनुभव', 'Single & Multiple Implants', 'MDS Implantology विशेषज्ञ डॉक्टर'],
  },
  {
    id: 'dentures', icon: '🦴',
    mr: 'पूर्ण व अंशत: कबळी',
    en: 'Complete & Partial Dentures',
    desc: 'सर्व किंवा काही दात गेलेल्यांसाठी उच्च दर्जाची Removable व Fixed Dentures बनवल्या जातात. आरामदायक, नैसर्गिक दिसणाऱ्या व टिकाऊ कबळी.',
    points: ['Acrylic & Flexible Partial Dentures', 'Complete Dentures (Upper & Lower)', 'Implant-Supported Dentures', 'आरामदायक व नैसर्गिक दिसणारे'],
  },
  {
    id: 'wear', icon: '⚙️',
    mr: 'दातांची झीज व चावण्याशी संबंधित उपचार',
    en: 'Teeth Wear & Bite Treatment',
    desc: 'दात झिजणे (Bruxism), चावणे कठीण जाणे, जबड्यात दुखणे या समस्यांसाठी विशेष उपचार. Occlusal Splint, Bite Rehabilitation आणि इतर उपचार उपलब्ध.',
    points: ['Bruxism (दात घासणे) उपचार', 'Night Guard / Occlusal Splint', 'Bite Correction', 'TMJ विकार उपचार'],
  },
  {
    id: 'fixed-removable', icon: '🔧',
    mr: 'फिक्सड व रिमूव्हेबल दंत उपचार',
    en: 'Fixed & Removable Prosthetics',
    desc: 'रुग्णाच्या गरजेनुसार Fixed (कायमस्वरूपी) किंवा Removable (काढता येण्याजोगे) दंत उपचार उपलब्ध. Prosthodontics मध्ये MDS असलेले डॉ. जवर्डीकर सर्वोत्तम सल्ला देतात.',
    points: ['Fixed Partial Denture (Bridge)', 'Removable Partial Denture', 'Overdenture', 'Prosthodontics विशेषज्ञ सल्ला'],
  },
  {
    id: 'fmr', icon: '🌟',
    mr: 'पूर्ण तोंडाचे पुनर्वसन',
    en: 'Full Mouth Rehabilitation',
    desc: 'संपूर्ण तोंडाच्या दातांची झीज, गळती, तुटणे अशा जटिल समस्यांसाठी सर्वसमावेशक Full Mouth Rehabilitation केली जाते.',
    points: ['सर्वसमावेशक उपचार योजना', 'Implants + Crowns + Veneers', 'संपूर्ण हास्याचे रूपांतर', 'Prosthodontics विशेषज्ञ डॉक्टरांकडून'],
  },
];

export default function Services() {
  useScrollReveal([]);
  useEffect(() => {
    document.title = 'सेवा | डॉ. जवर्डीकर दातांचा दवाखाना';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero
        badge="Our Services"
        titleEn="आमच्या <span>दंत सेवा</span>"
        subtitle="आधुनिक तंत्रज्ञान • अचूक उपचार • वैयक्तिक काळजी"
        breadcrumb="सेवा"
      />

      <section className="section section--cream" aria-label="All dental services">
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: 700, margin: '0 auto var(--space-12)' }}>
            <div className="section-label">संपूर्ण दंत काळजी</div>
            <h2 className="section-title">आमच्या येथे <span>उपलब्ध उपचार</span></h2>
            <div className="gold-divider gold-divider--center" />
            <p className="section-subtitle">
              डॉ. मंथन प्र. जवर्डीकर यांच्या मार्गदर्शनाखाली सर्व प्रकारचे दंत उपचार एकाच ठिकाणी
            </p>
          </div>

          <div className="services-full-grid">
            {SERVICES.map(({ id, icon, mr, en, desc, points }, i) => (
              <article
                key={id}
                id={id}
                className={`service-full-card reveal reveal-delay-${(i % 2) + 1}`}
              >
                <div className="service-full-card__header">
                  <div className="service-full-card__icon-big">{icon}</div>
                  <div className="service-full-card__header-text">
                    <div className="service-full-card__marathi">{mr}</div>
                    <div className="service-full-card__en">{en}</div>
                  </div>
                </div>
                <div className="service-full-card__body">
                  <p className="service-full-card__desc">{desc}</p>
                  <div className="service-full-card__points">
                    {points.map(pt => (
                      <div key={pt} className="service-full-card__point">{pt}</div>
                    ))}
                  </div>
                </div>
                <div className="service-full-card__footer">
                  <Link to="/contact" className="btn btn--primary btn--sm">भेट बुक करा</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
