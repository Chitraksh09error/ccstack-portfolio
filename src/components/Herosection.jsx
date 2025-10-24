import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ABOUT_TEXT, HERO_CONTENT } from '../constants'
import { GoDownload } from "react-icons/go";
import { FaLink } from "react-icons/fa6";



function Herosection({ mode, setMode }) {

    const [text] = useTypewriter({
        words: ['MERN Developer', 'Frontend Dev'],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 100,
        delaySpeed: 1000
    })



    return (
        <div className=' lg:mt-16 mt-24 ' id='hero'>
            <div className='flex flex-wrap '>
                <div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='w-full '>
                    <div className='flex flex-col items-center lg:items-start mt-20 '>
                        <h2 className={`mb-4  lg:text-6xl lg:text-left md:text-left text-center text-4xl ${mode == "dark" ? "text-white" : "text-black"} font-medium`}>
                            Chitraksh Chavan
                        </h2>
                        <h2 className=' lg:text-5xl text-2xl font-til lg:text-left md:text-left text-center font-medium text-gray-400/80'>
                            Code, creativity, and coffee, that’s my daily stack
                        </h2>
                        <span className={`lg:text-3xl text-xl ${mode == "dark" ? "text-gray-300" : "text-gray-400"} py-5`}>
                            I'm a {' '}
                            <span className={` ${mode == "dark" ? "text-white" : "text-black"} lg:text-3xl text-xl font-bold`}>{text}</span>
                            <Cursor />
                        </span>

                        <p className={`my-2 w-full  lg:text-lg  text-sm  ${mode == "dark" ? "text-gray-400/100" : "text-gray-900"} text-justify font-tit font-thin`}>
                            {HERO_CONTENT.split('MERN stack')[0]}{' '}
                            <span className={` ${mode == "dark" ? "text-green-500" : "text-black"}       font-semibold`}>MERN stack</span>{' '}
                            {HERO_CONTENT.split('MERN stack')[1]}
                        </p>
                        <br></br>
                        <p className={`mb-4 w-full  lg:text-lg text-sm  ${mode == "dark" ? "text-gray-400/100" : "text-gray-900"}  text-justify font-tit font-thin`} >{ABOUT_TEXT}</p>

                    </div>
                    <div className='mt-4 flex items-center justify-between'>


                        <a href="/chitraksh.pdf" rel='noopener noreferrer' className={`border-solid flex items-center  border-[1px] rounded-lg py-3 px-5 lg:text-sm text-xs gap-2  ${mode == "dark" ? "bg-zinc-800 text-white hover:bg-zinc-700 transtion-colors duration-200  border-zinc-500" : "text-black border-gray-800 "} font-tit font-medium `}>
                            <h1>Download Resume</h1>
                            <GoDownload className='text-lg' />
                        </a>
                        <a href="https://www.linkedin.com/in/chitraksh-chavan" rel='noopener noreferrer' className={` flex items-center   rounded-lg  lg:text-sm text-xs gap-2 ${mode == "dark" ? "text-white" : "text-black  "} font-tit font-bold `}>
                            <h1>Let's Connect</h1>
                            <FaLink className='text-lg' />
                        </a>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Herosection
