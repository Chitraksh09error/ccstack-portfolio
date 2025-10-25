import React from 'react'
import ycce from '../assets/yccepng.png'
import mohota from '../assets/mohota.png'
import sanskar from '../assets/sanskar.png'


function Education({mode, setMode}) {
  return (
    <div className='space-y-14 rounded-3xl   ' id='edu'>
      <h1 className={`lg:text-left md:text-left   text-center lg:text-4xl text-3xl ${mode == "dark" ? "text-white" : "text-black"}  font-tit font-bold`}>
        Education
      </h1>

      <h2 className={`lg:text-justify md:text-left text-center ${mode == "dark" ? "text-gray-400/70" : "text-gray-500/80"} font-medium lg:text-2xl text-lg font-tit`}>
        My educational journey began with a strong foundation in
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> academics </span> during my
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> 10th </span> and
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> 12th </span> grades, where I developed a passion for
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> technology </span> and 
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> logical </span> thinking. Pursuing a degree in
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> Computer Science and Engineering </span> further enhanced my
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> technical </span> expertise and problem-solving mindset.
      </h2>


      <div

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


      </div>
    </div>
  )
}

export default Education
