export const slideLeft = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 50,
    y: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
}

export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
    },
  },
}
