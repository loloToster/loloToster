import { useState, useEffect, useRef } from 'react';

export function useSticky() {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const cachedRef = ref.current;
    if (!cachedRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.intersectionRatio < 1);
      },
      {
        threshold: [1],
        rootMargin: '-1px 0px 0px 0px',
      }
    );

    observer.observe(cachedRef);

    return () => {
      observer.unobserve(cachedRef);
    };
  }, []);

  return { ref, isSticky };
}
