/**
 * ProcessSteps.jsx — 4-step appointment process
 */
const STEPS = [
  { n: '1', title: 'फोन करा',         desc: '8308465188 किंवा 9404338713 वर संपर्क करा' },
  { n: '2', title: 'वेळ निश्चित करा', desc: 'आपल्या सोयीनुसार वेळ व तारीख बुक करा' },
  { n: '3', title: 'तपासणी',          desc: 'डॉ. जवर्डीकर संपूर्ण तपासणी करतील' },
  { n: '4', title: 'उपचार',           desc: 'आधुनिक तंत्रज्ञानाने वेदनारहित उपचार' },
];

export default function ProcessSteps() {
  return (
    <section className="section section--navy" id="process" aria-label="Appointment Process">
      <div className="container">
        <div className="text-center reveal">
          <div className="section-label" style={{ color: 'var(--color-gold)' }}>सोपी प्रक्रिया</div>
          <h2 className="section-title" style={{ color: 'var(--color-white)' }}>भेट कशी घ्यावी?</h2>
          <div className="gold-divider gold-divider--center" />
        </div>

        <div className="process-steps reveal">
          {STEPS.map(({ n, title, desc }) => (
            <div key={n} className="process-step">
              <div className="process-step__number">{n}</div>
              <h3 className="process-step__title" style={{ color: 'var(--color-white)' }}>{title}</h3>
              <p className="process-step__desc" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
