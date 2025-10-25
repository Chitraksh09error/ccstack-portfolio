import { div } from 'framer-motion/client'
import React from 'react'

function Footer({mode,setMode}) {
  return (
    <div  className={`  w-full  backdrop-blur-sm py-5 px-10 z-50  ${ mode == "dark" ? "border-t border-gray-700/50" : "border-t border-gray-500/20"}
        ${mode == "dark" ? "bg-[#040404]/95 " : "bg-white/95"} 
 `} >
        
     <div className={` flex-col lg:text-sm text-xs text-center font-tit space-y-1 ${mode == "dark" ? "text-zinc-400":"text-zinc-500/70"} flex  justify-center items-center`}>
        <h2>©2025 · Built with <span className={` ${mode == "dark" ? "text-white " : "text-black"}`}> React.js</span>  and <span className={` ${mode == "dark" ? "text-white " : "text-black"}`}> Tailwind CSS</span>  · Coded in <span className={` ${mode == "dark" ? "text-white " : "text-black"}`}> VsCode</span>  and deployed using <span className={` ${mode == "dark" ? "text-white " : "text-black"}`}> Vercel</span> </h2>
        <h2 className='' >Developed By <span className={` ${mode == "dark" ? "text-white " : "text-black"}`}> Chitraksh Chavan</span></h2>
      </div>
    </div>
  )
}

export default Footer
