/**
 * Contact.jsx — Appointment form + contact info + map
 */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import PageHero from '../components/PageHero';

const SERVICE_LABELS = {
  checkup:      'दातांची तपासणी (Dental Checkup)',
  cleaning:     'दातांची स्वच्छता (Scaling & Polishing)',
  rct:          'रूट कॅनाल उपचार (Root Canal Treatment)',
  'crown-bridge': 'क्राऊन व ब्रिज (Crown & Bridge)',
  cosmetic:     'कॉस्मेटिक डेंटिस्ट्री (Smile Design)',
  implants:     'डेंटल इम्प्लांट्स (Dental Implants)',
  dentures:     'कबळी (Dentures)',
  fmr:          'पूर्ण तोंड पुनर्वसन (Full Mouth Rehabilitation)',
  other:        'इतर (Other)',
};

function validate(fields) {
  const errors = {};
  if (!fields.name || fields.name.trim().length < 2)
    errors.name = 'कृपया आपले पूर्ण नाव प्रविष्ट करा';
  if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\s/g, '')))
    errors.phone = 'कृपया वैध 10-अंकी मोबाईल नंबर प्रविष्ट करा';
  if (!fields.service)
    errors.service = 'कृपया उपचार निवडा';
  if (!fields.date || new Date(fields.date) < new Date(new Date().toDateString()))
    errors.date = 'कृपया आजची किंवा भविष्यातील तारीख निवडा';
  return errors;
}

export default function Contact() {
  useScrollReveal([]);
  useEffect(() => {
    document.title = 'संपर्क व अपॉइंटमेंट | डॉ. जवर्डीकर दातांचा दवाखाना';
    window.scrollTo(0, 0);
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const [fields,    setFields]    = useState({ name: '', phone: '', service: '', date: '', timePreference: '', message: '' });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const errs = validate(fields);
    if (errs[name]) setErrors(prev => ({ ...prev, [name]: errs[name] }));
    else setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const dateFormatted = new Date(fields.date).toLocaleDateString('mr-IN', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
    const msg = encodeURIComponent(
      `🦷 *नमस्कार डॉ. जवर्डीकर दवाखाना*\n\n` +
      `मी भेटीची विनंती करतो / करते.\n\n` +
      `👤 *नाव:* ${fields.name.trim()}\n` +
      `📱 *मोबाईल:* ${fields.phone}\n` +
      `🦷 *उपचार:* ${SERVICE_LABELS[fields.service] || fields.service}\n` +
      `📅 *तारीख:* ${dateFormatted}\n` +
      (fields.message ? `💬 *संदेश:* ${fields.message}\n` : '') +
      `\nधन्यवाद!`
    );
    setSubmitted(true);
    setTimeout(() => window.open(`https://wa.me/919404338713?text=${msg}`, '_blank'), 800);
  };

  return (
    <>
      <PageHero
        badge="Book Your Visit"
        titleEn='संपर्क व <span>अपॉइंटमेंट</span>'
        subtitle="तपासणीसाठी आजच भेट द्या — आम्ही आपल्यासाठी येथे आहोत"
        breadcrumb="संपर्क"
      />

      <section className="section section--cream" aria-label="Contact and appointment form">
        <div className="container">
          <div className="contact-layout">

            {/* FORM */}
            <div className="reveal">
              <div className="form-card">
                {submitted ? (
                  <div className="form-success" style={{ display: 'block' }}>
                    <div className="form-success__icon">✅</div>
                    <h2 className="form-success__title">नमस्कार, {fields.name}!</h2>
                    <p className="form-success__msg">
                      आपली भेट विनंती यशस्वीरीत्या पाठवली गेली.<br />
                      WhatsApp वर आमचा प्रतिसाद लवकरच येईल.<br /><br />
                      <strong>📞 9404338713 | 8308465188</strong>
                    </p>
                    <br />
                    <Link to="/" className="btn btn--primary">🏠 मुखपृष्ठावर परत</Link>
                  </div>
                ) : (
                  <>
                    <h2 className="form-card__title">भेट बुक करा</h2>
                    <p className="form-card__sub">खालील माहिती भरा — आम्ही WhatsApp वर लवकरच संपर्क करू.</p>
                    <form id="appointmentForm" onSubmit={handleSubmit} noValidate>
                      <div className="form-grid">
                        {/* Name */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">पूर्ण नाव *</label>
                          <input id="name" name="name" type="text" className={`form-input${errors.name ? ' input--error' : fields.name ? ' input--success' : ''}`}
                            placeholder="आपले पूर्ण नाव" value={fields.name} onChange={handleChange} onBlur={handleBlur} autoComplete="name" />
                          {errors.name && <span className="field-error" style={{ display: 'block' }}>{errors.name}</span>}
                        </div>
                        {/* Phone */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="phone">मोबाईल नंबर *</label>
                          <input id="phone" name="phone" type="tel" className={`form-input${errors.phone ? ' input--error' : fields.phone && !errors.phone ? ' input--success' : ''}`}
                            placeholder="10-अंकी मोबाईल नंबर" value={fields.phone} onChange={handleChange} onBlur={handleBlur} autoComplete="tel" />
                          {errors.phone && <span className="field-error" style={{ display: 'block' }}>{errors.phone}</span>}
                        </div>
                        {/* Service */}
                        <div className="form-group form-grid--full">
                          <label className="form-label" htmlFor="service">उपचार निवडा *</label>
                          <select id="service" name="service" className={`form-select${errors.service ? ' input--error' : fields.service ? ' input--success' : ''}`}
                            value={fields.service} onChange={handleChange} onBlur={handleBlur}>
                            <option value="">— उपचार निवडा —</option>
                            {Object.entries(SERVICE_LABELS).map(([val, label]) => (
                              <option key={val} value={val}>{label}</option>
                            ))}
                          </select>
                          {errors.service && <span className="field-error" style={{ display: 'block' }}>{errors.service}</span>}
                        </div>
                        {/* Date */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="date">पसंतीची तारीख *</label>
                          <input id="date" name="date" type="date" min={today} className={`form-input${errors.date ? ' input--error' : fields.date ? ' input--success' : ''}`}
                            value={fields.date} onChange={handleChange} onBlur={handleBlur} />
                          {errors.date && <span className="field-error" style={{ display: 'block' }}>{errors.date}</span>}
                        </div>
                        {/* Time preference */}
                        <div className="form-group">
                          <label className="form-label" htmlFor="timePreference">वेळेची पसंती</label>
                          <select id="timePreference" name="timePreference" className="form-select" value={fields.timePreference} onChange={handleChange}>
                            <option value="">— वेळ निवडा —</option>
                            <option value="morning">सकाळी (9 AM – 12 PM)</option>
                            <option value="afternoon">दुपारी (12 PM – 3 PM)</option>
                            <option value="evening">संध्याकाळी (3 PM – 7 PM)</option>
                          </select>
                        </div>
                        {/* Message */}
                        <div className="form-group form-grid--full">
                          <label className="form-label" htmlFor="message">संदेश / समस्या (ऐच्छिक)</label>
                          <textarea id="message" name="message" className="form-textarea" rows={4}
                            placeholder="आपल्या दातांच्या समस्येबद्दल थोडक्यात सांगा..." value={fields.message} onChange={handleChange} />
                        </div>
                        {/* Buttons */}
                        <div className="form-grid--full" style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                          <button type="submit" className="btn btn--primary btn--lg" id="submit-appointment-btn" style={{ flex: 1, justifyContent: 'center' }}>
                            📅 WhatsApp वर पाठवा
                          </button>
                          <a href="tel:+919404338713" className="btn btn--outline btn--lg" id="call-now-btn" style={{ flex: 1, justifyContent: 'center' }}>
                            📞 आत्ता फोन करा
                          </a>
                        </div>
                        <p className="form-grid--full" style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
                          * चिन्हांकित माहिती अनिवार्य आहे.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="reveal reveal--right">
              <div className="section-label" style={{ marginBottom: 'var(--space-4)' }}>संपर्क माहिती</div>
              <h2 style={{ fontSize: 'var(--fs-2xl)', color: 'var(--color-navy)', marginBottom: 'var(--space-8)' }}>
                आमच्याशी <span style={{ color: 'var(--color-gold)' }}>संपर्क साधा</span>
              </h2>
              <div className="contact-info">
                {[
                  { icon: '📍', label: 'पत्ता', value: 'शिक्षक कॉलनी, डी.पी.रोड,\nअंजनगाव सुर्जी, जि. अमरावती', sub: 'Shikshak Colony, D.P. Road, Anjangaon Surji' },
                  { icon: '📞', label: 'फोन नंबर', isPhone: true },
                  { icon: '🕐', label: 'दवाखाना वेळ', isHours: true },
                ].map(({ icon, label, value, sub, isPhone, isHours }) => (
                  <div key={label} className="contact-info-card">
                    <div className="contact-info-card__icon">{icon}</div>
                    <div>
                      <div className="contact-info-card__label">{label}</div>
                      {isPhone ? (
                        <div className="contact-info-card__value">
                          <a href="tel:+919404338713">📱 9404338713</a><br />
                          <a href="tel:+919404338713">📱 9404338713</a>
                        </div>
                      ) : isHours ? (
                        <div className="contact-info-card__value" style={{ fontSize: 'var(--fs-sm)' }}>
                          <div>सोम–शुक्र: 9:00 AM – 7:00 PM</div>
                          <div>शनिवार: 9:00 AM – 6:00 PM</div>
                          <div>रविवार: 9:00 AM – 1:00 PM</div>
                        </div>
                      ) : (
                        <>
                          <div className="contact-info-card__value" style={{ whiteSpace: 'pre-line' }}>{value}</div>
                          {sub && <div className="contact-info-card__sub">{sub}</div>}
                        </>
                      )}
                    </div>
                  </div>
                ))}

                {/* WhatsApp Card */}
                <a href="https://wa.me/919404338713" target="_blank" rel="noreferrer"
                   className="contact-info-card" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                  <div className="contact-info-card__icon" style={{ background: '#25D366' }}>💬</div>
                  <div>
                    <div className="contact-info-card__label">WhatsApp</div>
                    <div className="contact-info-card__value">9404338713</div>
                    <div className="contact-info-card__sub">क्लिक करा व अपॉइंटमेंट बुक करा</div>
                  </div>
                </a>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-6)', flexWrap: 'wrap' }}>
                <a href="tel:+919404338713" className="btn btn--primary" id="contact-call1-btn" style={{ flex: 1, justifyContent: 'center' }}>📞 9404338713</a>
                <a href="https://wa.me/919404338713" target="_blank" rel="noreferrer"
                   className="btn btn--outline" id="contact-whatsapp-btn"
                   style={{ flex: 1, justifyContent: 'center', borderColor: '#25D366', color: '#25D366' }}>💬 WhatsApp</a>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="map-section reveal" style={{ marginTop: 'var(--space-16)' }}>
            <div className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="section-label">आम्ही कुठे आहोत</div>
              <h2 className="section-title">आमचे <span>स्थान</span></h2>
              <div className="gold-divider gold-divider--center" />
              <p style={{ fontSize: 'var(--fs-base)', color: 'var(--color-text-muted)' }}>
                शिक्षक कॉलनी, डी.पी.रोड, अंजनगाव सुर्जी, जि. अमरावती
              </p>
            </div>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=21.168400292233347,77.31304483455727&z=17&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Javardikar Dental Clinic — Anjangaon Surji Location"
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-5)' }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=21.168400292233347,77.31304483455727"
                target="_blank" rel="noreferrer"
                className="btn btn--outline" id="get-directions-btn"
              >
                🗺️ Google Maps वर दिशानिर्देश मिळवा
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
