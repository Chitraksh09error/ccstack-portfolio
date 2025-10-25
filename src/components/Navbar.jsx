import React, { useEffect, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-scroll'
import { RiGithubLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

export default function Navbar({ mode, setMode, menuOpen, setMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  const links = [
    { to: "hero", label: "Home" },
    { to: "skills", label: "Skills" },
    { to: "project", label: "Projects" },
    { to: "edu", label: "Education" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <Disclosure as="nav" className={` fixed w-full top-0  backdrop-blur-sm  z-50  ${isScrolled ? mode == "dark" ? "border-b border-gray-700/50" : "border-b border-gray-500/20" : "border-b border-transparent"
      }  ${mode == "dark" ? "bg-[#040404]/95 " : "bg-white/95"} 
 `} >
      {({ }) => (
        <>
          <div className=" flex justify-between items-center relative z-50 lg:px-20 md:px-10 px-5 font-tit">

            <div className='hidden md:block'>

              <div className={` ${mode == "dark" ? "text-white" : "text-gray-950"}  text-xl flex items-center gap-2`}>
              <h1 >chitraksh.dev</h1>
              <FaCode/>

              </div>
            </div>

            <div className="flex items-center justify-between lg:py-4 md:py-3 py-2 lg:px-24">

              {/* Desktop Menu */}
              <div className={`hidden md:flex items-center  font-medium ${mode == "dark" ? "text-gray-400/100" : "text-gray-500"}  transition-all duration-300 text-sm `}>
                <div className="hidden md:flex items-center gap-5 font-medium  text-sm">
                  {links.map(link => (
                    <Link
                      key={link.to}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className={`cursor-pointer transition-colors duration-200 ${mode === "dark" ? "hover:text-white" : "hover:text-black"
                        }`}
                    >
                      {link.label}
                      
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden ">
                <Disclosure.Button
                  className={`inline-flex items-center justify-center rounded-md p-2 ${mode == "dark" ? "text-gray-400/100 " : "text-gray-600/90 "}`} onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {menuOpen ? (
                    <MdOutlineClose className="text-xl" aria-hidden="true" />
                  ) : (
                    <MdMenuOpen className="text-xl" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <div className={`flex gap-2 items-center  ${mode == "dark" ? "text-gray-400/100 " : "text-gray-600/90 "}      `}>
              <div className='p-2'>
                <a href="https://github.com/Chitraksh09error">

                < RiGithubLine className='text-xl   cursor-pointer' />
                </a>

              </div>
              <div className='p-2'>

                <a href="https://discord.com/channels/1147115423339384854">

                <RiDiscordLine className='text-xl   cursor-pointer' />
                </a>

              </div>
              <div onClick={changeMode} className={`text-center cursor-pointer p-2 rounded-lg bg-transparent ${mode == "dark" ? " text-gray-400/100   hover:bg-gray-600/40  " : " text-gray-600/90 hover:bg-gray-200/100"} transition-all `}>
                {mode == "dark" ? <MdOutlineLightMode className='text-xl ' onClick={() => setMode("light")} /> : <MdOutlineDarkMode className='text-xl  cursor-pointer' onClick={() => setMode("dark")} />}
              </div>
            </div>

          </div>

          {/* Mobile Menu */}
          <Transition
            show={menuOpen}
            enter="transition-all duration-300 ease-out"
            enterFrom="opacity-40 -translate-y-4 max-h-0"
            enterTo="opacity-100 translate-y-0 max-h-96"
            leave="transition-all duration-300 ease-in"
            leaveFrom="opacity-100 translate-y-0 max-h-96"
            leaveTo="opacity-100 -translate-y-4 max-h-0"
          >
            <Disclosure.Panel className={`md:hidden  ${mode == "dark" ? "bg-[#040404]":"bg-white"} overflow-hidden  z-50 border-b-[1px] border-b-zinc-600/50 rounded-b-lg `}>
              <div className="space-y-3 px-4 pb-4 ">
                <div className={` ${mode == "dark" ? "text-white" : "text-gray-950"} font-tit text-lg px-3 flex items-center gap-2`  }>

                <h1 >chitraksh.dev </h1>
                <FaCode/>
                </div>
                <div className={` w-full border  ${mode == "dark"? "border-zinc-700/40":""}  border-`}></div>
                <div className=' p-3 '>

                  <h1 className={` text-xl font-medium ${mode == "dark" ? "text-white":"text-gray-950"} font-tit text-center py-4 `}>Components</h1>

                {links.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className={`flex items-center justify-between text-sm font-normal border px-5 py-2 font-tit mb-1 rounded-sm ${mode == "dark" ? "bg-[#050505] text-white hover:bg-zinc-700/20 border-zinc-900/80 hover:border-zinc-500/20":"bg-zinc-50/90 text-gray-950 border-gray-200/90 hover:bg-zinc-100 hover:border-gray-300/100"}   cursor-pointer`}
                    onClick={() => setMenuOpen(false)} // close menu on select
                  >
                    {link.label}
                    <MdArrowOutward className={`  `}/>
                  </Link>
                ))}
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
