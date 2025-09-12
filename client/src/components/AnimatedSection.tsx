import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 600
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`;
      case 'slideUp':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`;
      case 'slideLeft':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`;
      case 'slideRight':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`;
      case 'scale':
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`;
      default:
        return `${baseClasses} ${durationClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
}