import { motionTiming } from '@identity/motion';

export const headerMotion = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTiming.animationDurationXl,
      ease: motionTiming.animationTiming,
      damping: 50,
      stiffness: 250,
    },
  },
};

export const logoMotion = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: motionTiming.animationDurationL,
      ease: motionTiming.animationTiming,
      damping: 50,
      stiffness: 250,
    },
  },
};

export const navMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.1,
    },
  },
};

export const navItemMotion = {
  hidden: { y: '-100vh' },
  visible: {
    y: 0,
    transition: {
      duration: motionTiming.animationDurationXl,
      ease: motionTiming.animationTiming,
    },
  },
};
