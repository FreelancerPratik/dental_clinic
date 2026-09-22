/**
 * animations.js — Scroll-reveal & counter animations
 * Dr. Javardikar Dental Clinic
 */

'use strict';

/* ================================
   INTERSECTION OBSERVER (Scroll Reveal)
   ================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* ================================
   ANIMATED COUNTER
   ================================ */
function animateCounter(el, target, suffix = '', duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current.toLocaleString('en-IN') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString('en-IN') + suffix;
    }
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target  = parseInt(el.getAttribute('data-counter'), 10);
          const suffix  = el.getAttribute('data-suffix') || '';
          const duration = parseInt(el.getAttribute('data-duration') || '2000', 10);
          animateCounter(el, target, suffix, duration);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

/* ================================
   GOLD DIVIDER ANIMATION
   ================================ */
function initGoldDividers() {
  const dividers = document.querySelectorAll('.gold-divider');
  if (!dividers.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'goldLineExpand 0.7s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  dividers.forEach(el => {
    el.style.width = '0';
    observer.observe(el);
  });
}

/* ================================
   SERVICE CARD TILT EFFECT
   ================================ */
function initCardTilt() {
  const cards = document.querySelectorAll('.service-card, .glass-card');
  if (window.matchMedia('(hover: none)').matches) return; // Skip on touch devices

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width / 2;
      const cy     = rect.height / 2;
      const rotX   = ((y - cy) / cy) * -5;
      const rotY   = ((x - cx) / cx) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(() => { card.style.transition = ''; }, 400);
    });
  });
}

/* ================================
   INIT ALL
   ================================ */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounters();
  initGoldDividers();
  // Defer tilt to avoid blocking render
  requestAnimationFrame(initCardTilt);
});
