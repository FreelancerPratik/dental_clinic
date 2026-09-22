/**
 * TestimonialSlider.jsx — Auto-playing slider with dots and touch support
 */
import { useState, useEffect, useRef, useCallback } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    stars: '★★★★★',
    text: '"डॉ. जवर्डीकर यांनी माझ्या रूट कॅनालचे उपचार इतक्या काळजीपूर्वक केले की मला जवळजवळ वेदनाच जाणवल्या नाहीत. खूप व्यावसायिक आणि दयाळू डॉक्टर आहेत."',
    avatar: 'रा',
    name: 'राजेश पाटील',
    location: 'अंजनगाव सुर्जी',
  },
  {
    id: 2,
    stars: '★★★★★',
    text: '"माझे डेंटल इम्प्लांट्स इथे झाले. डॉक्टरांनी संपूर्ण प्रक्रिया नीट समजावून सांगितली. आता हास्यात खूप आत्मविश्वास आला आहे!"',
    avatar: 'सु',
    name: 'सुनीता देशमुख',
    location: 'अमरावती',
  },
  {
    id: 3,
    stars: '★★★★★',
    text: '"कॉस्मेटिक डेंटिस्ट्री नंतर माझे हास्य पूर्णपणे बदलले. डॉ. जवर्डीकर यांचे कौशल्य आणि आधुनिक तंत्रज्ञान वापर खरोखरच प्रभावशाली आहे."',
    avatar: 'प्र',
    name: 'प्रिया शिंदे',
    location: 'अंजनगाव सुर्जी',
  },
  {
    id: 4,
    stars: '★★★★★',
    text: '"क्राऊन व ब्रिजचे उपचार अत्यंत उत्तम झाले. दवाखान्याची स्वच्छता व डॉक्टरांची आपुलकी खूप चांगली आहे. मी सर्व नातेवाइकांना इथे पाठवतो."',
    avatar: 'वि',
    name: 'विजय कुलकर्णी',
    location: 'चांदूर बाजार',
  },
  {
    id: 5,
    stars: '★★★★★',
    text: '"माझ्या मुलाच्या दातांचे उपचार इथे झाले. डॉक्टरांनी मुलाला खूप सहजतेने हाताळले. मुलाला बिलकुल भीती वाटली नाही. धन्यवाद डॉक्टर!"',
    avatar: 'अ',
    name: 'अनिता जोशी',
    location: 'परतवाडा',
  },
];

function getSlidesPerView() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

export default function TestimonialSlider() {
  const [current,       setCurrent]       = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);
  const trackRef  = useRef(null);
  const timerRef  = useRef(null);
  const startXRef = useRef(0);

  const total = Math.max(1, TESTIMONIALS.length - slidesPerView + 1);

  const goTo = useCallback((idx) => {
    setCurrent(Math.min(Math.max(idx, 0), total - 1));
  }, [total]);

  /* Auto-play */
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1 >= total ? 0 : prev + 1));
    }, 4500);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  /* Resize */
  useEffect(() => {
    const onResize = () => {
      setSlidesPerView(getSlidesPerView());
      setCurrent(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Track translate */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideW = track.parentElement.offsetWidth / slidesPerView;
    track.style.transform = `translateX(-${current * slideW}px)`;
  }, [current, slidesPerView]);

  /* Touch swipe */
  const onTouchStart = (e) => { startXRef.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
      resetTimer();
    }
  };

  const dotCount = total;

  return (
    <div>
      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          ref={trackRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-card__stars">{t.stars}</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__location">{t.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots" role="tablist" aria-label="Testimonial navigation">
        {Array.from({ length: dotCount }).map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === current ? ' active' : ''}`}
            role="tab"
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => { goTo(i); resetTimer(); }}
          />
        ))}
      </div>
    </div>
  );
}
