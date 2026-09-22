/**
 * useCounter.js
 * Animated number counter triggered when element enters viewport.
 * Usage: const ref = useCounter(target, suffix, duration)
 */
import { useEffect, useRef } from 'react';

export function useCounter(target, suffix = '', duration = 2000) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const update = (now) => {
            const elapsed  = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target).toLocaleString('en-IN') + suffix;
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target.toLocaleString('en-IN') + suffix;
          };

          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration]);

  return ref;
}
