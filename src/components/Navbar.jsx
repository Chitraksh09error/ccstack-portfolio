import React, { useEffect, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import cctack from '../assets/stackwhite.png'
import { Link } from 'react-scroll'
import { RiGithubLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar({ mode, setMode }) {
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
    { to: "edu", label: "Education" },
    { to: "project", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <Disclosure as="nav" className={` fixed w-full top-0  backdrop-blur-sm lg:px-16 z-50  ${isScrolled ? mode == "dark" ? "border-b border-gray-700/50" : "border-b border-gray-500/20" : "border-b border-transparent"
      }  ${mode == "dark" ? "bg-[#040404]/95 " : "bg-white/95"} 
 `} >
      {({ open }) => (
        <>
          <div className="mx-auto flex justify-between items-center   max-w-7xl px-4 sm:px-6 lg:px-8 font-tit">

            <div className='hidden md:block'>
              <h1 className={` ${mode == "dark" ? "text-white" : "text-gray-950"}  text-xl`}>chitraksh.dev</h1>
            </div>

            <div className="flex items-center justify-between py-4 gap-6 lg:px-24">

              {/* Desktop Menu */}
              <div className={`hidden md:flex items-center gap-5  font-medium ${mode == "dark" ? "text-gray-400/100" : "text-gray-500"}  transition-all duration-300 text-sm `}>
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
              <div className="flex md:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <div className={`flex gap-2 items-center  ${mode == "dark" ? "text-gray-400/100 " : "text-gray-600/90 "}      `}>
              <div className='p-2'>
              < RiGithubLine className='text-xl   cursor-pointer' />

              </div>
              <div className='p-2'>
              <RiDiscordLine className='text-xl   cursor-pointer' />  

              </div>
              <div onClick={changeMode} className={`text-center cursor-pointer p-2 rounded-lg bg-transparent ${mode == "dark" ? " text-gray-400/100   hover:bg-gray-600/40  " : " text-gray-600/90 hover:bg-gray-200/100"} transition-all `}>
                {mode == "dark" ? <MdOutlineLightMode className='text-xl ' onClick={() => setMode("light")} /> : <MdOutlineDarkMode className='text-xl  cursor-pointer' onClick={() => setMode("dark")} />}
              </div>
            </div>

          </div>

          {/* Mobile Menu */}
          <Transition
            show={open}
            enter="transition-all duration-500 ease-out"
            enterFrom="max-h-0 opacity-20"
            enterTo="max-h-96 opacity-100"
            leave="transition-all duration-500 ease-in"
            leaveFrom="max-h-96 opacity-100"
            leaveTo="max-h-0 opacity-20"
          >
            <Disclosure.Panel className="md:hidden  overflow-hidden"> 
              <div className="space-y-1 px-4 pb-4 ">

                <h1 className={` ${mode == "dark" ? "text-white" : "text-gray-950"}  text-xl`}>chitraksh.dev</h1>

                <Link to="hero" smooth={true} duration={500} offset={-100} className="block text-base font-medium text-cyan-400  hover:text-white">
                  HOME
                </Link>
                <Link to="skills" smooth={true} duration={500} offset={-100} className="block text-base font-medium text-cyan-400 hover:text-white">
                  SKILLS
                </Link>
                <Link to="edu" smooth={true} duration={500} offset={-100} className="block text-base font-medium text-cyan-400  hover:text-white">
                  EDUCATION
                </Link>
                <Link to="project" smooth={true} duration={500} offset={-100} className="block text-base font-medium text-cyan-400  hover:text-white">
                  PROJECTS
                </Link>
                <Link to="experience" smooth={true} duration={500} offset={-100} className="block text-base font-medium  text-cyan-400  hover:text-white">
                  EXPERIENCE
                </Link>
                <Link to="contact" smooth={true} duration={500} offset={-100} className="block text-base font-medium text-cyan-400  hover:text-white">
                  CONTACT
                </Link>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
