import React from 'react'
// import con from '../assets/contact.png'
import { FiGithub ,FiLinkedin ,FiInstagram} from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'; 

function Contact() {

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
    <div className=' pt-6 ' id='contact'>
      <h2 className='  text-center lg:text-3xl text-xl underline decoration-wavy decoration-2  decoration-cyan-400 mb-8 text-white font-ti underline-offset-8 font-light'>CONTACT</h2>

      <div className='flex flex-wrap lg:flex-row'>
        <motion.div  
        initial={{x:-100 , opacity : 0}}
        whileInView ={{x:0 , opacity : 1}}
        transition={ {duration : 1, delay : 0.5}}
        className="w-full lg:w-1/2 flex justify-center ">
          <section className=" contact  p-6 w-full max-w-lg">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="input-box">
                <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
                <input
                  type="text"
                  className="field w-full rounded-lg px-4 py-2 border border-gray-600 hover:border-white bg-black text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Enter your name" name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  className="field w-full border border-gray-600  bg-black text-white rounded-lg hover:border-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Enter your email" name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label className="block text-sm font-medium mb-1">Your Message</label>
                <textarea
                  className="w-full border border-gray-600  rounded-lg bg-black text-white hover:border-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Enter your message" name="message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-500 text-white font-medium py-2 rounded-lg hover:bg-slate-600"
              >
                Send Message
              </button>
            </form>
          </section>
        </motion.div>

        <motion.div 
        initial={{x:100 , opacity : 0}}
        whileInView ={{x:0 , opacity : 1}}
        transition={ {duration : 1, delay : 0.5}}
        className=' w-full lg:w-1/2 '>

          <div className='flex justify-center lg:p-2 '>
            <div className=' w-full h-96'>
              <div className=' w-full h-20 flex p-7 gap-3'>
                <div className='border-solid border-2 rounded-xl border-white flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8  cursor-pointer   hover:bg-[#333333]  hover:border-[#333333]'>
                  <a href="https://github.com/Chitraksh09error">
                    <FiGithub  className='lg:text-2xl  text-lg text-white z-10 ' />
                  </a>
                </div>
                <div className='border-solid border-2  rounded-xl border-white flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8 hover:bg-[#0077B5] hover:border-[#0077B5]'>
                  <a href="https://www.linkedin.com/in/chitraksh-chavan">
                    <FiLinkedin className='lg:text-2xl  text-lg text-white cursor-pointer ' />
                  </a>
                </div>
                <div className='border-solid border-2  rounded-xl border-white flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8 hover:bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] hover:border-black'>
                  <a href="https://www.instagram.com/chitraksh_9/profilecard/?igsh=MXFqOXI3emZrNHhuOQ==">
                    <FiInstagram className='lg:text-2xl  text-lg text-white cursor-pointer ' />
                  </a>
                </div>
                <div className='border-solid border-2  rounded-xl border-white flex justify-center items-center lg:h-10 lg:w-10 h-8 w-8 hover:bg-[#5865f2] hover:border-[#5865f2]'  >
                  <a href="https://discord.com/channels/1147115423339384854">
                    <RiDiscordLine className='lg:text-2xl  text-lg text-white cursor-pointer' />
                  </a>
                </div>
              </div  >
              <div className='  w-full p-7'>
                  <h1  className=' lg:text-xl text-lg font-tit text-cyan-400 '>Get in Touch</h1>
                  <br />
                  <p className='text-white lg:text-base text-sm text-justify font-tit font-light'>Have a question or just want to connect? I'd ❤️ to hear from you! Feel free to reach out through any of the channels above or send me message through above form and let's start a conversation.</p>
              </div>


            </div>
          </div>


        </motion.div>

      </div>
      <div className=' h-10  text-xl font-tit text-white flex  justify-center items-center'>
          <h2 className='text-lg' >Developed By Chitraksh</h2>
      </div>

    </div>
  )
}

export default Contact
