import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import threejs from "../assets/threejs.svg";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";

export const navLinks = [
  { id: "home", title: "Home" },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const icons = [
  {
    id: "award",
    title: "Award",
    icon: "#",
  },
  {
    id: "code",
    title: "Code",
    icon:"#",
  },
  {
    id: "layout",
    title: "Layout",
    icon:"#" ,
  },
  {
    id: "design",
    title: "Design",
    icon:"#" ,
  },
  {
    id: "team",
    title: "Team",
    icon:"#",
  },
];

export const socialIcons = [
  {
    id: "github",
    url: "https://github.com/jimjabid",
    icon: <i className="ri-github-line"></i>,
  },

  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/jabid-jimenez-serrano-960215175/",
    icon: <i className="ri-linkedin-box-line"></i>,
  },

  {
    id: "whatsapp",
    url: "https://wa.me/573016666666",
    icon: <i className="ri-whatsapp-line"></i>,
  },
];

const about= [
  {
    title: "Experience",
    icon: <i className="ri-award-line about__icon"></i>,
    description:"3 years experienced IT professional with a passion for web design and development."
  },
  {
    title: "UI/UX",
    icon: <i className="ri-layout-2-line about__icon"></i>,
    description:"2 years background in sales. I understand the importance of creating user-friendly interfaces."
  },
  {
    title: "Collaboration",
    icon: <i className="ri-team-line about__icon"></i>,
    description:"Let's work together to create something beautiful and effective!"
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Project 1",
    description:
      "Web-based platform that allows users to search, books, .",
    
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project 2",
    description:
      "Web application that enables users to search for job openings, .",
   
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project 3",
    description:
      "A comprehensive travel booking platform that allows users to book flights,.",
    
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, projects ,about};
