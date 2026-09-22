/**
 * useScrollReveal.js
 * Attaches IntersectionObserver to all .reveal elements on mount.
 * Usage: call this hook once in a layout component or per-page.
 */
import { useEffect } from 'react';

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach(el => {
      el.classList.remove('revealed'); // reset on navigation
      observer.observe(el);
    });

    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
