import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl select-none pointer-events-none">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className="text-7xl text-yellow-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandTypescript className="text-7xl text-blue-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandTailwind className="text-7xl text-teal-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-lime-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandMysql className="text-7xl text-sky-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaPython className="text-7xl text-gray-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandDjango className="text-7xl text-green-700"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
