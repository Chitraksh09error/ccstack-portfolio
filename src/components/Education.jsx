import React from 'react'
import ycce from '../assets/yccepng.png'
import mohota from '../assets/mohota.png'
import sanskar from '../assets/sanskar.png'


function Education({mode, setMode}) {


  const EDUCATION = [
  {
    id: 1,
    image: ycce,
    degree: "BTech - CSE",
    institute: "Yeshwantrao Chavan College of Engineering",
    duration: "Oct 2022 - Present",
    result: "CGPA: 8.52"
  },
  {
    id: 2,
    image: mohota,
    degree: "State Board",
    institute: "Shri Mathuradas Mohota Science College",
    duration: "2021 - 22",
    result: "Percentage: 81.17%"
  },
  {
    id: 3,
    image: sanskar,
    degree: "CBSE Board",
    institute: "Sanskar Vidya Sagar",
    duration: "2019 - 20",
    result: "Percentage: 94.2%"
  }
]

  return (
    <div className='space-y-14 rounded-3xl   ' id='edu'>
      <h1 className={`lg:text-left md:text-left   text-center lg:text-4xl text-2xl ${mode == "dark" ? "text-white" : "text-black"}  font-tit font-bold`}>
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
    
      <div className='w-full flex justify-around flex-wrap lg:gap-12 gap-6'>
      {EDUCATION.map((edu) => (
        <div
          key={edu.id}
          className={`lg:w-96 w-72 border flex justify-start items-start 
          ${mode === "dark"
            ? "bg-zinc-400/10 border-zinc-400/20 hover:bg-zinc-400/15 hover:border-zinc-400/30"
            : "bg-[#f1f1f1]/40 border-zinc-400/35 hover:bg-slate-50 hover:border-zinc-400/70"} 
          rounded-2xl p-6 lg:pl-9 `}
        >
          <div>
            <p className={`lg:text-lg text-sm font-bold ${mode === "dark" ? "text-white" : "text-black"} font-tit`}>
              {edu.institute}
            </p>
            <p className={`lg:text-sm text-xs font-tit font-semibold ${mode === "dark" ? "text-gray-300/50" : "text-black"}`}>
              {edu.degree}
            </p>
            <p className={`lg:text-sm text-xs ${mode === "dark" ? "text-zinc-400" : "text-zinc-500"} font-medium font-tit mt-1`}>
              {edu.duration}
            </p>
            <h4 className={`lg:text-sm text-xs mt-2 ${mode === "dark" ? "text-white" : "text-black"} font-tit font-semibold`}>
              {edu.result}
            </h4>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Education
