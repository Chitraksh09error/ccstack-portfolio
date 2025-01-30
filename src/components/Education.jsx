import React from 'react'
import ycce from '../assets/yccepng.png'
import mohota from '../assets/mohota.png'
import sanskar from '../assets/sanskar.png'
import { motion } from 'framer-motion'

function Education() {
  return (
    <div className='lg:mb-4  pb-20 rounded-3xl pt-2  ' id='edu'>
      <h2 className='  text-center lg:text-3xl text-xl underline decoration-wavy decoration-2  decoration-cyan-400 mb-8 text-white font-ti underline-offset-8 font-light'>EDUCATION</h2>

      <motion.div  
       initial={{x:100 , opacity : 0}}
       whileInView ={{x:0 , opacity : 1}}
       transition={ {duration : 1, delay : 1}}
      className='flex lg:justify-between justify-center gap-4 flex-wrap'>


        <div className='w-80 h-40 flex justify-start items-center mt-3 bg-zinc-950 rounded-2xl p-3 lg:pl-9'>
          <div className='mr-7'>

            <img src={ycce} className=' md:w-20 w-20' alt="" />
          </div>
          <div>
            <p className='lg:text-sm text-xs text-white  '>BTech - CSE</p>
            <p className='lg:text-sm text-xs text-zinc-400 font-medium font-tit mt-1'>Oct 2022 - Present</p>
            <h4 className='lg:text-sm text-xs mt-2 text-white font-mono'>CGPA: 8.515</h4>

          </div>
        </div>


        <div className='w-80 h-40  flex justify-start items-center mt-3 bg-zinc-950 rounded-2xl p-3 lg:pl-9'>
          <div className='mr-7'>

            <img src={mohota} className=' md:w-20 w-20' alt="" />
          </div>
          <div>
            <p className='lg:text-sm text-xs text-white  '>State Board</p>
            <p className='lg:text-sm text-xs text-zinc-400 font-medium font-tit mt-1'>2021 - 22</p>
            <h4 className='lg:text-sm text-xs mt-2 text-white font-mono'>Percentage: 81.17 %</h4>

          </div>
        </div>


        <div className='w-80 h-40 flex justify-start items-center mt-3 bg-zinc-950 rounded-2xl p-3 lg:pl-9'>
          <div className='mr-7'>

            <img src={sanskar} className=' md:w-20 w-20' alt="" />
          </div>
          <div>
            <p className='lg:text-sm text-xs text-white  '>CBSE Board</p>
            <p className='lg:text-sm text-xs text-zinc-400 font-medium font-tit mt-1'>2019 - 20</p>
            <h4 className='lg:text-sm text-xs mt-2 text-white font-mono'>Percentage: 94.2 %</h4>

          </div>
        </div>
        

      </motion.div>
    </div>
  )
}

export default Education
