import { HERO_CONTENT } from "../constants";
import fotoperfil from '../assets/FotoPerfilPortfolio.jpg'
import { motion } from "framer-motion"; 
import { motionHero } from "./Animations";

const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1 
          variants={motionHero(0)}
          initial="hidden"
          animate="visible"
          className="font-poppins pb-16 text-4xl tracking-tight 
          lg:mt-16 lg:text-8xl select-none pointer-events-none">
            Léo M. Loncarovich
          </motion.h1>
          <motion.span
          variants={motionHero(0.2)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-rose-200 via-purple-300 
          to-violet-500 bg-clip-text text-3xl tracking-tight 
          text-transparent font-poppins select-none pointer-events-none">
            Full Stack Developer
          </motion.span>
          <motion.p
          variants={motionHero(0.4)}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left my-2 max-w-xl py-6 font-poppins-light 
          tracking-tighter pointer-events-none">
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <motion.img src={fotoperfil}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-auto max-w-xs lg:max-w-md rounded-md
          select-none pointer-events-none"
          alt="Foto De Perfil" />
      </div>
    </div>
  </div>
  )
}

export default Hero;
