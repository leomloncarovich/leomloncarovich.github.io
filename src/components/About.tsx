import AboutPic from '/assets/ImagemAbout.jpeg'
import { ABOUT_ME } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl select-none pointer-events-none">
        About
        <span className="text-neutral-500 select-none pointer-events-none"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center select-none pointer-events-none">
            <img className='rounded-2xl w-full h-auto max-w-xs 
            lg:max-w-md select-none pointer-events-none' 
            src={AboutPic} alt="About" draggable="false"/>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100}}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className='text-center lg:text-left font-poppins my-2 max-w-xl py-6 
            pointer-events-none'>{ABOUT_ME}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
