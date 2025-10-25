import React from 'react'
// import con from '../assets/contact.png'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { RiDiscordLine } from "react-icons/ri";
import Swal from 'sweetalert2'
function Contact({ mode, setMode }) {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "82783845-028f-4fac-8355-6ca033620e01");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }


  return (
    <div className=' space-y-14 ' id='contact'>
      <h1 className={`lg:text-left md:text-left   text-center lg:text-4xl text-2xl ${mode == "dark" ? "text-white" : "text-black"}  font-tit font-bold`}>
        Contact
      </h1>

      <h2 className={`lg:text-justify md:text-left text-center ${mode == "dark" ? "text-gray-400/70" : "text-gray-500/80"} font-medium lg:text-2xl text-lg font-tit`}>
        Let’s turn creative ideas into real <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> projects </span> together.
        I’m always open to <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> collaboration</span>, exciting discussions, or just a friendly <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> chat</span>.
        Drop a message anytime — let’s build something <span className={`${mode == "dark" ? "text-white" : "text-black"}`}> amazing </span>!
      </h2>


      <div className='flex flex-wrap lg:flex-row'>
        <div
          className="w-full lg:w-1/2 flex justify-center ">
          <section className=" contact  p-6 w-full max-w-lg">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="input-box">
                <label className={`block lg:text-lg text-sm font-semibold mb-1 ${mode == "dark" ? "text-white" : "text-black"} font-tit`}>Full Name</label>
                <input
                  type="text"
                  className={`field w-full rounded-lg px-4 py-2 border font-tit focus:outline-none ${mode == "dark" ? "text-white bg-zinc-600/10  border-zinc-400/25 " : "text-black bg-zinc-100/100 border-zinc-400/30 "}   `}
                  placeholder="Enter your name" name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label className={`block lg:text-lg text-sm font-semibold mb-1 ${mode == "dark" ? "text-white" : "text-black"} font-tit`}>Email Address</label>
                <input
                  type="email"
                  className={`field w-full rounded-lg px-4 py-2 border font-tit focus:outline-none ${mode == "dark" ? "text-white bg-zinc-600/10  border-zinc-400/25 " : "text-black bg-zinc-100/100 border-zinc-400/30 "}   `}
                  placeholder="Enter your email" name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label className={`block lg:text-lg text-sm font-semibold mb-1 ${mode == "dark" ? "text-white" : "text-black"} font-tit`}>Your Message</label>
                <textarea
                  className={`field w-full rounded-lg px-4 py-2 border font-tit focus:outline-none ${mode == "dark" ? "text-white bg-zinc-600/10  border-zinc-400/25 " : "text-black bg-zinc-100/100 border-zinc-400/30 "}   `}
                  placeholder="Enter your message" name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full border ${mode == "dark" ? "text-white bg-zinc-600/30 border-zinc-400/30 hover:bg-zinc-600/40 hover:border-zinc-400/50 " : "text-black  bg-zinc-400/60 border-zinc-400/90 hover:bg-zinc-600/40 hover:border-zinc-400/100 "}  font-tit font-medium py-2 rounded-md `}
              >
                Send Message
              </button>
            </form>
          </section>
        </div>

        <div
          className=' w-full lg:w-1/2 '>

          <div className='flex justify-center lg:p-2 '>
            <div className=' w-full h-96'>
              <div className=' w-full h-20 flex p-7 gap-3'>
                <div className={`border-solid border rounded-xl ${mode == "dark" ? "text-zinc-200 border-zinc-400/40 hover:bg-[#333333]  hover:border-[#333333] " : "text-zinc-700/70 border-zinc-700/40 hover:bg-zinc-300/30 hover:border-zinc-100/90"} flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8  cursor-pointer   `} >
                  <a href="https://github.com/Chitraksh09error">
                    <FiGithub className='lg:text-2xl  text-lg  z-10 ' />
                  </a>
                </div>
                <div className={`border-solid border rounded-xl ${mode == "dark" ? "text-zinc-200 border-zinc-400/40 hover:bg-[#333333]  hover:border-[#333333] " : "text-zinc-700/70 border-zinc-700/40 hover:bg-zinc-300/30 hover:border-zinc-100/90"} flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8  cursor-pointer   `}>
                  <a href="https://www.linkedin.com/in/chitraksh-chavan">
                    <FiLinkedin className='lg:text-2xl  text-lg cursor-pointer ' />
                  </a>
                </div>
                <div className={`border-solid border rounded-xl ${mode == "dark" ? "text-zinc-200 border-zinc-400/40 hover:bg-[#333333]  hover:border-[#333333] " : "text-zinc-700/70 border-zinc-700/40 hover:bg-zinc-300/30 hover:border-zinc-100/90"} flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8  cursor-pointer   `}>
                  <a href="https://www.instagram.com/chitraksh_9/profilecard/?igsh=MXFqOXI3emZrNHhuOQ==">
                    <FiInstagram className='lg:text-2xl  text-lg  cursor-pointer ' />
                  </a>
                </div>
                <div className={`border-solid border rounded-xl ${mode == "dark" ? "text-zinc-200 border-zinc-400/40 hover:bg-[#333333]  hover:border-[#333333] " : "text-zinc-700/70 border-zinc-700/40 hover:bg-zinc-300/30 hover:border-zinc-100/90"} flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8  cursor-pointer   `}  >
                  <a href="https://discord.com/channels/1147115423339384854">
                    <RiDiscordLine className='lg:text-2xl  text-lg  cursor-pointer' />
                  </a>
                </div>
                <div className={`border-solid border rounded-xl ${mode == "dark" ? "text-zinc-200 border-zinc-400/40 hover:bg-[#333333]  hover:border-[#333333] " : "text-zinc-700/70 border-zinc-700/40 hover:bg-zinc-300/30 hover:border-zinc-100/90"} flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8  cursor-pointer   `}  >
                  <a href="https://leetcode.com/u/chitrakshAI09">
                    <TbBrandLeetcode className='lg:text-2xl  text-lg  cursor-pointer' />
                  </a>
                </div>
              </div  >
              <div className='  w-full p-7'>
                <h1 className={`lg:text-xl text-lg font-tit font-semibold ${mode == "dark"? "text-cyan-400":"text-black"} `}>Get in Touch</h1>
                <br />
                <p className={`${mode == "dark" ? "text-gray-300":"text-gray-900"} lg:text-base text-sm text-justify font-tit font-medium`}>Have a question or just want to connect? I'd ❤️ to hear from you! Feel free to reach out through any of the channels above or send me message through above form and let's start a conversation.</p>
              </div>


            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Contact
