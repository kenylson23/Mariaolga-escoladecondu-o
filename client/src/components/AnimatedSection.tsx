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
    const baseClasses = `transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]`;
    const durationClass = `duration-${duration}`;
    
    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
        }`;
      case 'slideUp':
        return `${baseClasses} ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`;
      case 'slideLeft':
        return `${baseClasses} ${
          isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 rotate-1'
        }`;
      case 'slideRight':
        return `${baseClasses} ${
          isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-12 -rotate-1'
        }`;
      case 'scale':
        return `${baseClasses} ${
          isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-md'
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