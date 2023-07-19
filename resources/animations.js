const faqVariants = {
  hidden: {
    opacity: 0,
    maxHeight: "0vh",
    overflow: "hidden",
  },
  visible: {
    opacity: 1,
    maxHeight: "27vh",
    overflow: "visible",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: {
      duration: 0.5,
    },
  },
};

const vacancyVariants = {
  ...faqVariants,
  visible: {
    ...faqVariants.visible,
    maxHeight: "200vh",
    transition: {
      duration: 1,
    },
  },
};

const hoverMenuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 100% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const hoverMenuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const animations = {
  faqVariants,
  vacancyVariants,
  hoverMenuVariants,
  hoverMenuItemVariants,
};

export default animations;
