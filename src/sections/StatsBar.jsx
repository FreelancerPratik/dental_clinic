/**
 * StatsBar.jsx — Animated counter stat strip below hero
 */
import { useCounter } from '../hooks/useCounter';

function StatItem({ target, suffix, duration, label, delay }) {
  const ref = useCounter(target, suffix, duration);
  return (
    <div className={`stat-card reveal${delay ? ` reveal-delay-${delay}` : ''}`}>
      <div className="stat-card__number" ref={ref}>0</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

const STATS = [
  { target: 5000, suffix: '+', duration: 2200, label: 'समाधानी रुग्ण' },
  { target: 10,   suffix: '+', duration: 1800, label: 'वर्षांचा अनुभव',  delay: 1 },
  { target: 10,   suffix: '',  duration: 1600, label: 'दंत उपचार सेवा',  delay: 2 },
  { target: 98,   suffix: '%', duration: 2000, label: 'यशस्वी उपचार दर', delay: 3 },
];

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Statistics">
      <div className="container">
        <div className="stats-bar__grid">
          {STATS.map(s => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
