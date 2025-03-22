import React, { useEffect } from 'react'
import pp from "../assets/chitrakshchavanpp.jpeg"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { ABOUT_TEXT, HERO_CONTENT } from '../constants'
import { delay, motion } from 'framer-motion'


const childVariants = {
    hidden : {
        opacity : 0 , x : -100
    },
    visible : {
        opacity : 1, x:0, transition:{duration : 0.5 , delay : 1}
    }
}



function Herosection() {

    const [text] = useTypewriter({
        words: ['MERN Developer', 'Frontend Dev'],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 100,
        delaySpeed: 1000
    })


   
    return (
        <div className=' lg:mt-16 mt-24 ' id='hero'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='flex justify-center items-center w-full lg:w-1/2 '>
                    <div className='flex justify-center   '>
                        <motion.img className='gsap_pp w-80 border  border-stone-900 rounded-3xl' src={pp} 
                        initial={{x:100 , opacity : 0}}
                        whileInView ={{x:0 , opacity : 1}}
                        transition={ {duration : 1, delay : 0.5}} />
                    </div>

                </div>

                <motion.div  
                initial={{x:-100 , opacity : 0}}
                whileInView ={{x:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10 '>
                        <motion.h2 variants={childVariants}  className='pb-2 text-4xl tracking-tighter lg:text-6xl text-cyan-400 font-till'>
                            Hi, I am
                        </motion.h2>
                        <motion.h2 variants={childVariants} className='pb-2 text-3xl tracking-tighter lg:text-6xl font-til font-medium text-white'>
                            Chitraksh Chavan
                        </motion.h2>
                        <motion.span variants={childVariants} className='lg:text-3xl text-xl tracking-tight py-5'>
                            I'm a {' '}
                            <span className='text-white lg:text-3xl text-xl'>{text}</span>
                            <Cursor />
                        </motion.span>

                        <motion.p variants={childVariants} className="my-2 w-full py-2 text-base leading-relaxed tracking-tighter text-justify font-tit font-thin">
                            {HERO_CONTENT.split('MERN stack')[0]}{' '}
                            <span className="text-cyan-400 font-semibold">MERN stack</span>{' '}
                            {HERO_CONTENT.split('MERN stack')[1]}
                        </motion.p>
                        <br></br>
                        <motion.p variants={childVariants} className='mb-4 w-full  text-base leading-relaxed tracking-tighter text-justify font-tit font-thin' >{ABOUT_TEXT}</motion.p>

                        <motion.a variants={childVariants} href="/chitraksh.pdf" rel='noopener noreferrer' download className=' border-solid border-2 rounded-full p-4  lg:text-sm text-xs text-white mb-10 hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 '>Download Resume</motion.a>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Herosection
