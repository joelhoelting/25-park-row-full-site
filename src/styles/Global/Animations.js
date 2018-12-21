// Global Animations
const animations = {
  
  // Global hidden class that gets removed from containers on render
  '.hidden': {
    opacity: 0,
    transition: 'all 300ms ease'
  },
  '.animate-reveal-delay-0': {
    opacity: 1,
    transition: 'opacity 600ms ease'
  },
  '.animate-reveal-delay-1': {
    opacity: 1,
    transition: 'opacity 600ms ease 300ms'
  },
  '.animate-reveal-delay-2': {
    opacity: 1,
    transition: 'opacity 600ms ease 600ms'
  },
  '.animate-reveal-delay-3': {
    opacity: 1,
    transition: 'opacity 600ms ease 900ms'
  },
  '.animate-reveal-delay-4': {
    opacity: 1,
    transition: 'opacity 600ms ease 1200ms'
  },
  '.animate-reveal-delay-5': {
    opacity: 1,
    transition: 'opacity 600ms ease 1500ms'
  },
  '.animate-reveal-delay-6': {
    opacity: 1,
    transition: 'opacity 600ms ease 1800ms'
  },
  '.animate-reveal-delay-7': {
    opacity: 1,
    transition: 'opacity 600ms ease 2100ms'
  },
  '.animate-reveal-delay-8': {
    opacity: 1,
    transition: 'opacity 600ms ease 2400ms'
  },
  '.animate-reveal-delay-9': {
    opacity: 1,
    transition: 'opacity 600ms ease 2700ms'
  },
  '.animate-reveal-delay-10': {
    opacity: 1,
    transition: 'opacity 600ms ease 3000ms'
  },
  '.animate-reveal-delay-11': {
    opacity: 1,
    transition: 'opacity 600ms ease 3300ms'
  },
  '.animate-reveal-delay-12': {
    opacity: 1,
    transition: 'opacity 600ms ease 3600ms'
  },
  '.animate-reveal-delay-13': {
    opacity: 1,
    transition: 'opacity 600ms ease 3900ms'
  },
  '.animate-reveal-delay-14': {
    opacity: 1,
    transition: 'opacity 600ms ease 4200ms'
  },
  '.animate-reveal-delay-15': {
    opacity: 1,
    transition: 'opacity 600ms ease 4500ms'
  },
  '.animate-reveal-delay-16': {
    opacity: 1,
    transition: 'opacity 600ms ease 4800ms'
  },
  '.press-reveal-delay-0': {
    opacity: 1,
    transition: 'opacity 600ms ease, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-1': {
    opacity: 1,
    transition: 'opacity 600ms ease 300ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-2': {
    opacity: 1,
    transition: 'opacity 600ms ease 600ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-3': {
    opacity: 1,
    transition: 'opacity 600ms ease 900ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-4': {
    opacity: 1,
    transition: 'opacity 600ms ease 1200ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-5': {
    opacity: 1,
    transition: 'opacity 600ms ease 1500ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-6': {
    opacity: 1,
    transition: 'opacity 600ms ease 1800ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-7': {
    opacity: 1,
    transition: 'opacity 600ms ease 2100ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-8': {
    opacity: 1,
    transition: 'opacity 600ms ease 2400ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-9': {
    opacity: 1,
    transition: 'opacity 600ms ease 2700ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-10': {
    opacity: 1,
    transition: 'opacity 600ms ease 3000ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-11': {
    opacity: 1,
    transition: 'opacity 600ms ease 3300ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-12': {
    opacity: 1,
    transition: 'opacity 600ms ease 3600ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-13': {
    opacity: 1,
    transition: 'opacity 600ms ease 3900ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-14': {
    opacity: 1,
    transition: 'opacity 600ms ease 4200ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-15': {
    opacity: 1,
    transition: 'opacity 600ms ease 4500ms, background 300ms ease, color 300ms ease'
  },
  '.press-reveal-delay-16': {
    opacity: 1,
    transition: 'opacity 600ms ease 4800ms, background 300ms ease, color 300ms ease'
  },
  '.fade-up-hidden': {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 300ms ease'
  },
  '.fade-up-reveal-delay-0': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease'
  },
  '.fade-up-reveal-delay-1': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 300ms'
  },
  '.fade-up-reveal-delay-2': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 600ms'
  },
  '.fade-up-reveal-delay-3': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 900ms'
  },
  '.fade-up-reveal-delay-4': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 1200ms'
  },
  '.fade-up-reveal-delay-5': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 1500ms',
  },
  '.fade-up-reveal-delay-6': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 1800ms'
  },
  '.fade-up-reveal-delay-7': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 2100ms'
  },
  '.fade-up-reveal-delay-8': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 2400ms'
  },
  '.fade-up-reveal-delay-9': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 2700ms'
  },
  '.fade-up-reveal-delay-10': {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 500ms ease 3000ms'
  }
};

export default animations;