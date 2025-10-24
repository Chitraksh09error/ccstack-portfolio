import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'

export default function App() {

  const [mode, setMode] = useState("dark");
  return (
    <div className={`overflow-x-hidden text-stone-300 ${mode == "dark" ? "bg-[#040404] " : "bg-white "} antialiased`}>
      {/* <div className='fixed inset-0 -z-10'>
        <div class="relative h-full w-full bg-black">

          <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div> */}

        <Navbar mode={mode} setMode={setMode} />
      <div className='container mx-auto px-5 sm:px-10 md:px-1 lg:px-20 xl:px-24'>
        <Herosection  mode={mode} setMode={setMode} />
        <Skills/>
        <Education/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>

    </div>
  )
}
