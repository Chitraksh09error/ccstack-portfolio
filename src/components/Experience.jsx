import React from 'react'
import cosmos from '../assets/cosmos.png'
import rotaract from '../assets/rotaract.png'


function Experience() {
  return (
    <div className=' pb-14 ' id='experience'>
      <h2 className='  text-center lg:text-3xl text-xl underline decoration-wavy decoration-2  decoration-cyan-400 mb-8 text-white font-ti underline-offset-8 font-light'>Experience</h2>

      <div
       className='w-full flex justify-evenly flex-wrap'>


        <div className='w-96  flex justify-start mt-3 bg-zinc-950 rounded-2xl p-6 lg:pl-9'>
          <div className='mr-7'>

            <img src={cosmos} className=' md:w-16 w-12' alt="" />
          </div>
          <div>
            <h1 className='lg:text-lg text-base font-ti font-semibold text-white '>Designer</h1>
            <p className='lg:text-sm text-xs text-white font-tit '>COSMOS</p>
            <p className='lg:text-sm text-xs text-zinc-400 font-medium font-tit mt-1'>Aug 2024 - Present . 4 mos</p>
            <h4 className='lg:text-sm text-xs mt-2 text-white font-mono font-bold'>Canva</h4>

          </div>
        </div>


        <div className='w-96  flex justify-start mt-3 bg-zinc-950 rounded-2xl p-6 lg:pl-9'>
          <div className='mr-7'>

            <img src={rotaract} className=' md:w-16 w-12' alt="" />
          </div>
          <div>
            <h1 className='lg:text-lg text-base font-ti font-semibold text-white '>Designer</h1>
            <p className='lg:text-sm text-xs text-white font-tit '>Rotaract Club of YCCE</p>
            <p className='lg:text-sm text-xs text-zinc-400 font-medium font-tit mt-1'>Aug 2023 - June 2024 . 11 mos</p>
            <h4 className='lg:text-sm text-xs mt-2 text-white font-mono font-bold'>Canva</h4>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Experience
