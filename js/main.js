/**
 * main.js — Shared navigation, scroll effects, and shared utilities
 * Dr. Javardikar Dental Clinic
 */

'use strict';

/* ================================
   NAVBAR SCROLL BEHAVIOR
   ================================ */
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (!navbar) return;
  if (window.scrollY > 60) {
    navbar.classList.remove('navbar--transparent');
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
    navbar.classList.add('navbar--transparent');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll(); // Run on load

/* ================================
   MOBILE HAMBURGER MENU
   ================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    if (isOpen) {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ================================
   ACTIVE NAV LINK (current page)
   ================================ */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link, .navbar__mobile .navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

setActiveNavLink();

/* ================================
   SCROLL TO TOP BUTTON
   ================================ */
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '80');
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ================================
   TESTIMONIAL SLIDER
   ================================ */
function initTestimonialSlider() {
  const track  = document.getElementById('testimonialTrack');
  const dots   = document.querySelectorAll('.slider-dot');
  if (!track) return;

  const slides     = track.querySelectorAll('.testimonial-slide');
  let currentIndex = 0;
  let autoplayTimer;
  let slidesPerView = getSlidesPerView();

  function getSlidesPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function totalSlides() {
    return Math.max(1, slides.length - slidesPerView + 1);
  }

  function goToSlide(index) {
    currentIndex = Math.min(Math.max(index, 0), totalSlides() - 1);
    const slideWidth = track.parentElement.offsetWidth / slidesPerView;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoplay();
    });
  });

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      const next = (currentIndex + 1) >= totalSlides() ? 0 : currentIndex + 1;
      goToSlide(next);
    }, 4500);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    goToSlide(0);
  });

  goToSlide(0);
  startAutoplay();

  // Touch / swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToSlide(currentIndex + 1) : goToSlide(currentIndex - 1);
      resetAutoplay();
    }
  });
}

initTestimonialSlider();

/* ================================
   PHONE LINKS (click-to-call)
   ================================ */
document.querySelectorAll('[data-phone]').forEach(el => {
  const num = el.getAttribute('data-phone');
  el.addEventListener('click', () => {
    window.location.href = `tel:+91${num}`;
  });
});

/* ================================
   YEAR IN FOOTER
   ================================ */
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ================================
   PAGE LOAD FADE-IN
   ================================ */
document.documentElement.classList.add('js-loaded');
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-transition');
});
