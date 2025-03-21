import { Variants } from "framer-motion"

export const motionHero = (delay: number) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

export const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})