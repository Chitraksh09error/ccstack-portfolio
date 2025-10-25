import React from 'react'
import { FiTool } from "react-icons/fi";
import { PROJECTS1 } from '../constants'
import { FaGithub } from "react-icons/fa";


function Projects({ mode, setMode }) {
  return (
    <div className=' lg:mb-6 space-y-14 ' id='project'>
      <h1 className={`lg:text-left md:text-left   text-center lg:text-4xl text-2xl ${mode == "dark" ? "text-white" : "text-black"}  font-tit font-bold`}>
        Projects
      </h1>
      <h2 className={`  lg:text-justify md:text-left  text-center ${mode == "dark" ? "text-gray-400/70" : "text-gray-500/80"} font-medium  lg:text-2xl text-lg font-tit `}>
        These projects are carefully crafted to deliver a highly <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>responsive</span> experience across all devices.
        Each one is built to provide a truly <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>user-friendly</span> interface while maintaining <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>clean</span> and <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>efficient</span> code.
        They bring ideas to life in an <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>interactive</span> way that engages users and enhances usability.
      </h2>


      <div className=' w-full  flex flex-wrap lg:gap-8 gap-1 justify-evenly'>


        {PROJECTS1.map((pro) => (
          <div
            key={pro.id} className='  w-80   '>
            <div className='w-full flex justify-center  '>

              <img src={pro.image} alt="" className={` w-full lg:h-56  h-52 rounded-lg border ${mode == "dark" ? "border-zinc-400/30 " : "border-zinc-400/80 "} `} />
            </div>
            <div className='w-full p-2 mt-2 space-y-2 h-56'>

              

              <div className='flex mb-5 items-center justify-between gap-7'>
                <h1 className={` lg:text-xl text-lg text-wrap font-tit font-bold ${mode == "dark"? "text-white":"text-black"} `} >{pro.title}</h1>

                {
                  pro.gitLink === "none" ? (<></>):
                  (<a href={pro.gitLink} className={`flex gap-2 items-center font-tit ${mode == "dark" ? "text-zinc-400/90 hover:text-zinc-400/100":""}  `} >Repo  <FaGithub className='  lg:text-xl text-lg ' /></a>)
                }
                
              </div>



              <div className='flex gap-3 items-center justify-left '>
                <div>

                <FiTool className='lg:text-xl text-sm text-cyan-600' />
                </div>
                <h5 className='text-cyan-400 text-xs  font-tit '>{pro.technologies}</h5>

              </div>
              <p className='text-justify font-tit lg:text-sm text-xs'>{pro.description}</p>
            </div>
          </div>
        ))}


      </div>

    </div>
  )
}

export default Projects
