/**
 * App.jsx — Router setup with shared layout (Navbar + Footer + Floats)
 */
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollTopButton from './components/ScrollTopButton';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', paddingTop: '6rem' }}>
              <div style={{ fontSize: '4rem' }}>🦷</div>
              <h1 style={{ fontSize: '2rem', color: 'var(--color-navy)' }}>पृष्ठ सापडले नाही</h1>
              <p style={{ color: 'var(--color-text-muted)' }}>Page not found</p>
              <a href="/" className="btn btn--primary">मुखपृष्ठावर परत</a>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollTopButton />
    </>
  );
}
