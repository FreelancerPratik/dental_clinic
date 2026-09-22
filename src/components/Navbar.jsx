/**
 * Navbar.jsx — Sticky navigation with scroll detection and mobile menu
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/',         label: 'मुखपृष्ठ',      mobileLabel: '🏠 मुखपृष्ठ' },
  { to: '/services', label: 'सेवा',           mobileLabel: '🦷 सेवा' },
  { to: '/about',    label: 'डॉक्टरांबद्दल', mobileLabel: '👨‍⚕️ डॉक्टरांबद्दल' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const { pathname }                  = useLocation();

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <nav
      id="navbar"
      className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Dr. Javardikar Dental Clinic Home">
          <div className="navbar__logo-icon" aria-hidden="true">🦷</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">डॉ. जवर्डीकर</span>
            <span className="navbar__logo-sub">Dental Clinic</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Page links">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link${isActive(to) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`navbar__link navbar__cta${pathname === '/contact' ? ' active' : ''}`}
            id="nav-contact"
          >
            📅 अपॉइंटमेंट
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile${menuOpen ? ' open' : ''}`}
        id="mobileMenu"
        role="menu"
      >
        {navLinks.map(({ to, mobileLabel }) => (
          <Link
            key={to}
            to={to}
            className={`navbar__link${isActive(to) ? ' active' : ''}`}
            role="menuitem"
            onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
          >
            {mobileLabel}
          </Link>
        ))}
        <Link
          to="/contact"
          className="navbar__link"
          role="menuitem"
          onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
        >
          📅 अपॉइंटमेंट घ्या
        </Link>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <a href="tel:+918308465188" className="btn btn--primary btn--sm">📞 8308465188</a>
          <a href="tel:+919404338713" className="btn btn--ghost btn--sm">📞 9404338713</a>
        </div>
      </div>
    </nav>
  );
}
