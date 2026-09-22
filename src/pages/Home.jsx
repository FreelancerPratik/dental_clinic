/**
 * Home.jsx — Composes all home page sections
 */
import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroSection        from '../sections/HeroSection';
import StatsBar           from '../sections/StatsBar';
import ServicesPreview    from '../sections/ServicesPreview';
import WhyChooseUs        from '../sections/WhyChooseUs';
import DoctorTeaser       from '../sections/DoctorTeaser';
import ProcessSteps       from '../sections/ProcessSteps';
import TestimonialSlider  from '../components/TestimonialSlider';
import AppointmentBanner  from '../components/AppointmentBanner';

export default function Home() {
  /* Scroll reveal — re-run on page mount */
  useScrollReveal([]);

  useEffect(() => {
    document.title = 'डॉ. जवर्डीकर दातांचा दवाखाना | Dr. Javardikar Dental Clinic';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <WhyChooseUs />
      <DoctorTeaser />
      <ProcessSteps />

      {/* Testimonials */}
      <section className="section section--cream" id="testimonials" aria-label="Patient Testimonials">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">रुग्णांचे अनुभव</div>
            <h2 className="section-title">आमचे <span>समाधानी रुग्ण</span></h2>
            <div className="gold-divider gold-divider--center" />
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <AppointmentBanner />
    </>
  );
}
