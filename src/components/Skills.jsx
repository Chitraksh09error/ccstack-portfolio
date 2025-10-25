import React from 'react'
import StackIcon from "tech-stack-icons";
import python from '../assets/python.png'
import c from '../assets/C.png'
import magic from '../assets/magic.png'
import ace from '../assets/aceui.png'

function Skills({ mode, setMode }) {

    const skillsData = [
        { name: "React.js", icon: <StackIcon name="react" className='lg:w-5 w-4' /> },
        { name: "Node.js", icon: <StackIcon name="nodejs" className='lg:w-5 w-4' /> },
        { name: "Next.js", icon: <StackIcon name="nextjs2" className='lg:w-5 w-4' /> },
        { name: "Express", icon: <StackIcon name="expressjs" className='lg:w-6 w-4 ' variant={mode == "dark" ? 'dark' : 'light'} /> },
        { name: "MongoDB", icon: <StackIcon name="mongodb" className='lg:w-5 w-4' /> },
        { name: "Python", img: python },
        { name: "Java", icon: <StackIcon name="java" className='lg:w-5 w-4' /> },
        { name: "SQL", icon: <StackIcon name="mysql" className='lg:w-5 w-4' /> },
        { name: "HTML", icon: <StackIcon name="html5" className='lg:w-5 w-4' /> },
        { name: "CSS", icon: <StackIcon name="css3" className='lg:w-5 w-4' /> },
        { name: "Javascript", icon: <StackIcon name="js" className='lg:w-5 w-4' /> },
        { name: "C", img: c },
        { name: "Vercel", icon: <StackIcon name="vercel" variant={mode == "dark" ? 'dark' : 'light'} className='lg:w-5 w-4' /> },
        { name: "Tailwind", icon: <StackIcon name="tailwindcss" className='lg:w-5 w-4' /> },
        { name: "Canva", icon: <StackIcon name="canva" className='lg:w-5 w-4' /> },
        { name: "Shadcn/ui", icon: <StackIcon name="shadcnui" variant={mode == "dark" ? 'dark' : 'light'} className='lg:w-5 w-4' /> },
        { name: "Render", icon: <StackIcon name="render" variant={mode == "dark" ? 'dark' : 'light'} className='lg:w-5 w-4' /> },
        { name: "Magic UI", img: magic },
        { name: "Aceternity UI", img: ace },
        { name: "GitHub", icon: <StackIcon name="github" variant={mode == "dark" ? 'dark' : 'light'} className='lg:w-5 w-4' /> },
        { name: "Git", icon: <StackIcon name="git" className='lg:w-5 w-4' /> },
        { name: "Cloudinary", icon: <StackIcon name="cloudinary" className='lg:w-5 w-4' /> },
        { name: "Postman", icon: <StackIcon name="postman" className='lg:w-5 w-4' /> },
        { name: "Replit", icon: <StackIcon name="replit" className='lg:w-5 w-4' /> },
        { name: "Perplexity AI", icon: <StackIcon name="perplexity" className='lg:w-5 w-4' /> },
        { name: "Spring", icon: <StackIcon name="spring" className='lg:w-5 w-4' /> },
    ];

    return (
        <div className='lg:mb-20 mt-44 mb-10 pt-2  space-y-10 ' id='skills'>
            <h1 className={`lg:text-left md:text-left   text-center lg:text-4xl text-2xl ${mode == "dark" ? "text-white" : "text-black"}  font-tit font-bold`}>
                Tech Arsenal
            </h1>
            <h2 className={`  lg:text-justify md:text-left  text-center ${mode == "dark" ? "text-gray-400/70" : "text-gray-500/80"} font-medium  lg:text-2xl text-lg font-tit `}>
                I specialize in crafting <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}> responsive  </span> and <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>dynamic </span>  web applications using modern technologies. From front-end design to back-end logic, I focus on creating <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>seamless </span> user experiences. These tools represent the <span className={` ${mode == "dark" ? "text-white" : "text-black"}
                    `}>core </span> of my development journey.
            </h2>


            <div className='flex flex-wrap justify-center gap-5 '>
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className={`rounded-3xl border  ${mode == "dark" ? "bg-zinc-800/100  border-zinc-300/30 text-white " : "bg-zinc-100/90 text-black border-zinc-300 "}  flex items-center space-x-3 lg:h-12 h-9 px-4  text-sm lg:text-base transition-transform duration-300 hover:scale-105 font-tit  `}
                    >
                        {skill.icon ? (
                            <>

                                {skill.icon}
                            </>
                        ) : (
                            <img src={skill.img} alt={skill.name} className='lg:w-5 w-4 mr-1' />
                        )}
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
