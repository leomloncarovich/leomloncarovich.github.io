import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { iconVariants } from "./Animations";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl select-none pointer-events-none">
        Technologies
      </motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.0)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandTypescript className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(1.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-lime-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaPython className="text-7xl text-gray-600"/>
        </motion.div>
        <motion.div
        variants={iconVariants(1.6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandDjango className="text-7xl text-green-700"/>
        </motion.div>
        <motion.div
        variants={iconVariants(1.9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
