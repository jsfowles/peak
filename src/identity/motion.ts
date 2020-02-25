export const motionTiming = {
  animationTiming: [0.23, 1, 0.32, 1],
  animationDurationXl: 0.75,
  animationDurationL: 0.5,
  animationDurationM: 0.25,
  animationDurationS: 0.1,
};

export const mainMotion = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: {
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: motionTiming.animationTiming,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
    },
  },
};
