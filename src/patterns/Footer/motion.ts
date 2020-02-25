import { motionTiming } from '@identity/motion';

export const footerMotion = {
  hidden: { opacity: 0, y: '100%' },
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
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: motionTiming.animationDurationXl,
      ease: motionTiming.animationTiming,
      damping: 50,
      stiffness: 250,
    },
  },
};
