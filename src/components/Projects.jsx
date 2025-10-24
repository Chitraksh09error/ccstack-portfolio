import React from 'react'
import { FiTool } from "react-icons/fi";
import { PROJECTS1 } from '../constants'
import { FaGithub } from "react-icons/fa";


function Projects() {
  return (
    <div className=' lg:mb-6  ' id='project'>
      <h2 className='  text-center lg:text-3xl text-xl underline decoration-wavy decoration-2  decoration-cyan-400 mb-8 text-white font-ti underline-offset-8 font-light'>PROJECTS</h2>


      <div className=' w-full mt-14 flex flex-wrap gap-2 justify-evenly'>
        

        {PROJECTS1.map((pro) => (
          <div 
           key={pro.id} className='  w-96   '>
            <div className='w-full flex justify-center '>

              <img src={pro.image} alt="" className=' w-96 lg:h-60  h-56 rounded-2xl border border-zinc-800 ' />
            </div>
            <div className='w-full p-2 mt-2 h-56'>
              <div className='flex mb-5 items-center gap-7'>
                <h1 className=' text-xl  font-tit font-bold text-white ' >{pro.title}</h1>
                <a href={pro.gitLink} className='flex gap-2 items-center hover:text-cyan-300' >  <FaGithub className=' text-xl ' />Repo / url</a> 
              </div>
              <div className='flex gap-3 items-center mb-3'>
                <FiTool className='lg:text-xl text-sm text-cyan-600' />
                <h5 className='text-cyan-400 text-xs font-tit '>{pro.technologies}</h5>

              </div>
              <p className='text-justify lg:text-sm text-xs'>{pro.description}</p>
            </div>
          </div>
        ))}


      </div>

    </div>
  )
}

export default Projects
