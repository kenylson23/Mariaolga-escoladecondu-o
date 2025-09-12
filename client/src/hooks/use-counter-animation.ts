import { useState, useEffect } from 'react';

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  isVisible?: boolean;
}

export function useCounterAnimation({ 
  end, 
  duration = 2000, 
  start = 0, 
  isVisible = true 
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = start;
    const change = end - start;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(startCount + change * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, start, isVisible]);

  return count;
}