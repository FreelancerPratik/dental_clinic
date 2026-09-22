/**
 * PageHero.jsx — Reusable inner-page hero banner
 */
import { Link } from 'react-router-dom';

export default function PageHero({ badge, titleEn, titleMr, subtitle, breadcrumb }) {
  return (
    <section className="page-hero" aria-label={`${titleEn} Page Hero`}>
      <div className="container page-hero__content">
        {badge && (
          <div className="section-label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-3)' }}>
            {badge}
          </div>
        )}
        <h1 className="page-hero__title" dangerouslySetInnerHTML={{ __html: titleEn }} />
        {titleMr && <p className="page-hero__subtitle">{titleMr}</p>}
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">मुखपृष्ठ</Link>
            <span className="breadcrumb-sep">›</span>
            <span>{breadcrumb}</span>
          </nav>
        )}
      </div>
    </section>
  );
}
