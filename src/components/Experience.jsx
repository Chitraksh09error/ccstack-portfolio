import React from 'react'
import cosmos from '../assets/cosmos.png'
import rotaract from '../assets/rotaract.png'
import AIG from '../assets/AIG.png'
import GDG from '../assets/GDG.png'


function Experience({ mode, setMode }) {

   const EXPERIENCES = [
  {
    id: 1,
    image: cosmos,
    role: "Designer (Head)",
    company: "COSMOS",
    duration: "Aug 2025 - Present . 3 mos",
    tech: "Canva"
  },
  {
    id: 2,
    image: GDG,
    role: "Designer",
    company: "GDG Cloud Nagpur",
    duration: "Apr 2025 - Present . 7 mos",
    tech: "Canva"
  },
  {
    id: 3,
    image: AIG,
    role: "Full-Stack Developer",
    company: "AIGuruKul (Internship)",
    duration: "Feb 2025 - Jul 2025 . 6 mos",
    tech: "MERN STACK / Next.js"
  },
  {
    id: 4,
    image: rotaract,
    role: "Designer (Member)",
    company: "Rotaract Club of YCCE",
    duration: "Aug 2023 - June 2024 . 11 mos",
    tech: "Canva"
  }
]

  return (
    <div className=' space-y-14 ' id='experience'>
      <h1 className={`lg:text-left md:text-left   text-center lg:text-4xl text-3xl ${mode == "dark" ? "text-white" : "text-black"}  font-tit font-bold`}>
        Experience
      </h1>
      <h2 className={`lg:text-justify md:text-justify text-center ${mode == "dark" ? "text-gray-400/70" : "text-gray-500/80"} font-medium lg:text-2xl text-lg font-tit`}>
        My journey blends <span className={`${mode == "dark" ? "text-white" : "text-black"}`}>full-stack development</span> with a passion for
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> creative design</span>. I focus on building
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> intuitive </span> and
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> scalable </span> solutions that balance functionality and aesthetics.
        Every project reflects my aim to deliver a truly
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> seamless </span>user experience through
        <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> innovative </span> and detail-driven development.
      </h2>


   <div className='w-full flex justify-around flex-wrap lg:gap-12 gap-6'>
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className={`lg:w-96 w-72 border flex justify-start  ${mode == "dark" ? "bg-zinc-400/10 border-zinc-400/20  hover:bg-zinc-400/15 hover:border-zinc-400/30" : "bg-[#f1f1f1]/40 border-zinc-400/35 hover:bg-slate-50 hover:border-zinc-400/70"} rounded-2xl p-6 lg:pl-9`}>
          <div className='mr-7'>
            <img src={exp.image} className={`md:w-16 w-12 border rounded-md ${mode == "dark" ? " ":"border-zinc-400/60"}   `} alt={exp.company} />
          </div>
          <div>
            <h1 className={`lg:text-lg text-base font-tit font-semibold ${mode == "dark" ? "text-white" : "text-black"}`}>{exp.role}</h1>
            <p className={`lg:text-sm text-xs ${mode == "dark" ? "text-white" : "text-black"} font-tit`}>{exp.company}</p>
            <p className={`lg:text-sm text-xs ${mode == "dark" ? "text-zinc-400" : "text-zinc-500"} font-medium font-tit mt-1`}>{exp.duration}</p>
            <h4 className={`lg:text-sm text-xs mt-2 ${mode == "dark" ? "text-white" : "text-black"} font-tit font-semibold`}>{exp.tech}</h4>
          </div>
        </div>
      ))}
    </div>

    </div>
  )
}

export default Experience
