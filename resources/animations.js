const faqVariants = {
  hidden: {
    opacity: 0,
    maxHeight: "0vh",
    overflow: "hidden",
    transition: {
      opacity: { duration: 1 },
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    maxHeight: "30vh",
    overflow: "hidden",
    transition: {
      opacity: { duration: 0.5 },
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

const vacancyMenuVariants = {
  open: {
    maxHeight: "200vh",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    maxHeight: "0vh",
    overflow: "hidden",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};

const overlayMobileMenu = {
  open: {
    maxWidth: "100%",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    maxWidth: "0vh",
    overflow: "hidden",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};

const overlayModal = {
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    pointerEvents: "none",
    overflow: "hidden",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};

const vacrncyMenuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.4 } },
};

const animations = {
  faqVariants,
  hoverMenuVariants,
  hoverMenuItemVariants,
  vacancyMenuVariants,
  vacrncyMenuItemVariants,
  overlayMobileMenu,
  overlayModal,
};

export default animations;
