import React from 'react'
import { RiReactjsLine, RiNodejsLine } from 'react-icons/ri'
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Marquee from 'react-fast-marquee'
import python from '../assets/python.png'
import java from '../assets/java.png'
import sql from '../assets/mysql.png'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import c from '../assets/C.png'
import boot from '../assets/Boot.png'
import tail from '../assets/Tail.png'
import canva from '../assets/Canva.png'
import shad from '../assets/shadcn.png'
import magic from '../assets/magic.png'
import ace from '../assets/aceui.png'


function Skills() {
    return (
        <div className='lg:mb-20 mt-44 mb-10 pt-2' id='skills'>
            <h2 className='  text-center lg:text-3xl text-xl  underline decoration-wavy decoration-2  decoration-cyan-400 mb-8 text-white font-ti underline-offset-8 font-semibold'>Skills</h2>
            <div 
            className='flex flex-wrap items-center justify-center lg:pt-12 lg:pb-12'>
                <div className='flex flex-wrap items-center  justify-center w-full   gap-8 '>
                    <Marquee autoFill speed={25} pauseOnHover >
                    <div  className='flex justify-center items-center'> 
                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2 ">
                            <RiReactjsLine className="lg:text-4xl text-2xl text-cyan-400 mr-3"  />
                            React.js
                        </div>

                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <RiNodejsLine className="lg:text-4xl text-2xl text-green-500 mr-3" />
                           Node.js
                        </div>

                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={python} alt="python" />
                            Python
                        </div>
                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={shad} alt="shad" />
                            Shadcn/ui
                        </div>

                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-8  w-5 mr-3" src={sql} alt="sql" />
                            SQL
                        </div>

                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={css} alt="css" />
                            CSS
                        </div>

                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={c} alt="c" />
                            C
                        </div>
                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={ace} alt="ace" />
                            Aceternity UI
                        </div>

                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={tail} alt="tail" />
                            Tailwind
                        </div>
                        </div> 
                    </Marquee>

                    <Marquee direction='right' autoFill speed={25} loop={0} pauseOnHover>

                    <div  className='flex '>  
                        <div className="rounded-3xl bg-zinc-900 flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <SiMongodb className='lg:text-4xl text-2xl text-green-400  mr-3' />MongoDB
                        </div>
                        <div className="rounded-3xl bg-zinc-900 flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <RiNextjsFill className='lg:text-4xl text-2xl text-white   mr-3' />Next.js
                        </div>    
                        <div className="rounded-3xl bg-zinc-900  flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <SiExpress className='lg:text-4xl text-2xl text-cyan-400 mr-3 ' />Express
                        </div>
                        <div className="rounded-3xl bg-zinc-900 text-sm lg:text-base flex space-x-5 justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className="lg:w-7  w-5 mr-3" src={magic} alt="shad" />
                            Magic UI
                        </div>
                        <div className="rounded-3xl bg-zinc-900  flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className='lg:w-8  w-5 mr-3 ' src={java} alt="java--v1" />Java
                        </div>

                        <div className="rounded-3xl bg-zinc-900  flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className='lg:w-7  w-5 mr-3 ' src={html} alt="html--v1" />HTML
                        </div>

                        <div className="rounded-3xl bg-zinc-900  flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className='lg:w-7  w-5 mr-3 ' src={js} alt="js--v1" />Javascript
                        </div>

                        <div className="rounded-3xl bg-zinc-900  flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className='lg:w-7  w-5 mr-3 ' src={boot} alt="boot--v1" />Bootstrap
                        </div>

                        <div className="rounded-3xl bg-zinc-900  flex space-x-5 text-sm lg:text-base justify-center items-center lg:h-12 h-9 px-4 lg:mr-5 mr-2">
                            <img className='lg:w-7  w-5 mr-3 ' src={canva} alt="canva--v1" />Canva
                        </div>
                        </div>
                    </Marquee>
                </div>

            </div>
        </div>
    )
}

export default Skills
