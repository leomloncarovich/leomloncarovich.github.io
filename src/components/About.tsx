import AboutPic from '../assets/ImagemAbout.jpeg'
import { ABOUT_ME } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl select-none pointer-events-none">
        Sobre
        <span className="text-neutral-500 select-none pointer-events-none"> Mim</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className='rounded-2xl w-full h-auto max-w-xs 
            lg:max-w-md select-none pointer-events-none' 
            src={ AboutPic } alt="About" draggable="false"/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className='font-poppins my-2 max-w-xl py-6 select-none
              pointer-events-none'>{ABOUT_ME}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About;
