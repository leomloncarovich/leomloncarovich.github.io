import { HERO_CONTENT } from "../constants";
import fotoperfil from '../assets/PERFILPORT.jpeg'

const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-poppins pb-16 text-5xl tracking-tight 
          lg:mt-16 lg:text-8xl select-none pointer-events-none">
            Léo M. Loncarovich
          </h1>
          <span className="bg-gradient-to-r from-rose-200 via-purple-300 
          to-violet-500 bg-clip-text text-4xl tracking-tight 
          text-transparent font-poppins select-none pointer-events-none">
            Full Stack Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-poppins-light 
          tracking-tighter select-none pointer-events-none">
            {HERO_CONTENT}
          </p>
        </div>
      </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img src={fotoperfil}  
          className="w-full h-auto max-w-xs lg:max-w-md rounded-md
          select-none pointer-events-none"
          alt="Foto De Perfil" />
      </div>
    </div>
  </div>
  )
}

export default Hero;
