import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

import pro2 from '../assets/scipy.png'
import pro3 from '../assets/chat.png'
import pro4 from '../assets/port.png'
import pro5 from '../assets/mern.png'
import pro6 from '../assets/airkicks.png'
import pro7 from '../assets/yash2k25.png'

export const HERO_CONTENT = `I am an aspiring MERN stack developer with a focus on creating scalable and user-friendly web applications. I have hands-on experience with React.js for building interactive front-end interfaces, Express.js for developing robust back-end APIs, and MySQL and MongoDB for efficient database management.`


export const ABOUT_TEXT = `Though I’m early in my career, I am committed to growing my skills and applying my knowledge to develop innovative solutions that enhance user experiences and contribute to business success. I am excited to collaborate on impactful projects and further my expertise in the MERN stack.`;



export const PROJECTS1 = [
  {
    id: 1,
    title: "AirKicks",
    image: pro6,
    description:
      "A modern MERN stack e-commerce platform offering the latest Air Jordans and a curated selection of pre-owned sneakers. It features a seamless shopping experience, secure authentication, and a dynamic product gallery",
    technologies: ["Next.js", " / TailwindCSS", " / Shadcnui"," / Magic UI"," / Aceternity UI" ," / Supabase"," / Framer-Motion"],
    gitLink : "https://github.com/Chitraksh09error/AirKicks"
  },
  {
    id: 2,
    title: "Chat App",
    image: pro3,
    description:
    "A MERN stack chat app enabling users to send and receive messages and images instantly. It provides a seamless, interactive, and real-time communication experience between multiple users.",
    technologies: ["MERN STACK", " / Socket.io", " / TailwindCSS"," / Cloudinary"],
    gitLink : "https://github.com/Chitraksh09error/ChatApp"
  },
  {
    id: 3,
    title: "YASH 25.0",
    image: pro7,
    description:
      "A group project providing event details, schedules, and organizer contacts for YASH 25.0. Designed for easy navigation, real-time updates, and seamless event coordination.",
    technologies: ["React.js", " / TailwindCSS", " / Framer-Motion"," / CSS"],
    gitLink : "https://github.com/Chitraksh09error/YASH-25.0"
  },
  {
    id: 4,
    title: "Portfolio",
    image: pro4,
    description:
      "A personal portfolio website showcasing my skills, experience, and projects in web development and design. It includes an interactive project gallery, details about my expertise in MERN stack and other technologies, and a contact section for collaboration or inquiries.",
    technologies: ["React.js", " / TailwindCSS", " / CSS"," / Framer-Motion"],
    gitLink : "https://github.com/Chitraksh09error/ccstack-portfolio"
  },
  {
    id: 5,
    title: "Authentication",
    image: pro5,
    description:
      "A secure and scalable authentication system built with the MERN stack, featuring user registration, login, and password management. It includes functionalities like email verification, OTP-based authentication, password reset, and JWT-based session handling for enhanced security.",
    technologies: ["MERN STACK", " / TailwindCSS"],
    gitLink : "none"
  },
  {
    id: 6,
    title: "Billing System",
    image: pro2,
    description:
    "A billing system designed to simplify the billing process for businesses. It offers an intuitive interface for managing items, calculating totals, and generating invoices efficiently, ensuring accuracy and ease of use.",
    technologies: ["Python", " / TKinter", " / SQLite"],
    gitLink : "https://github.com/Chitraksh09error/Scipy_Dmart"
  },
];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
