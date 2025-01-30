import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import cctack from '../assets/stackwhite.png'
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" fixed w-full top-0  backdrop-blur lg:px-16 z-50"  style={{background : " rgb(4, 4, 4)" }} >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-tit">
            <div className="flex items-center justify-between py-5 gap-6 lg:px-24">
              {/* Logo Section */}
              <div className="flex items-center text-2xl font-bold">
                <a href="/" aria-label="Home">
                  <img src={cctack} className='lg:w-32 w-24' alt="" />
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-4  font-tit ">
                <Link to="hero" smooth={true} duration={500} offset={-100} className='cursor-pointer text-white hover:text-cyan-400'>HOME</Link>
                <Link to="skills" smooth={true} duration={500} offset={-100} className='cursor-pointer  text-white hover:text-cyan-400'>SKILLS</Link>
                <Link to="edu" smooth={true} duration={500} offset={-100} className='cursor-pointer  text-white hover:text-cyan-400'>EDUCATION</Link>
                <Link to="project" smooth={true} duration={500} offset={-100} className='cursor-pointer  text-white hover:text-cyan-400'>PROJECTS</Link>
                <Link to="experience" smooth={true} duration={500} offset={-100} className='cursor-pointer  text-white hover:text-cyan-400'>EXPERIENCE</Link>
                <Link to="contact" smooth={true} duration={500} offset={-100} className='cursor-pointer  text-white hover:text-cyan-400'>CONTACT</Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button 
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
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
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-4 pb-4">
              <Link to="hero" smooth={true} duration={500} offset={-100}  className="block text-base font-medium text-cyan-400  hover:text-white">
                HOME
              </Link>
              <Link to="skills" smooth={true} duration={500} offset={-100}  className="block text-base font-medium text-cyan-400 hover:text-white">
                SKILLS
              </Link>
              <Link to="edu" smooth={true} duration={500} offset={-100}  className="block text-base font-medium text-cyan-400  hover:text-white">
                EDUCATION
              </Link>
              <Link to="project" smooth={true} duration={500} offset={-100}  className="block text-base font-medium text-cyan-400  hover:text-white">
                PROJECTS
              </Link>
              <Link to="experience" smooth={true} duration={500} offset={-100}  className="block text-base font-medium  text-cyan-400  hover:text-white">
                EXPERIENCE
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-100}  className="block text-base font-medium text-cyan-400  hover:text-white">
                CONTACT
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
