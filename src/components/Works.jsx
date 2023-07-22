import React from "react";
import { styles } from "../styles";
import { projects } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  const projectContentRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const projectContentRef = document.querySelectorAll(".project-content");
      const projects = document.querySelectorAll(".show-project");

    gsap.set(projects, { opacity: 0 });
  
    projectContentRef.forEach((project) => {
      const animation = gsap.to(project.querySelector(".show-project"), {
        paused: true,
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        ease: "power4.out",
      });
      project.addEventListener("mouseenter", () => animation.play());
      project.addEventListener("mouseleave", () => animation.reverse());
    })
    }, projectContentRef); 
    return () => ctx.revert();   
  }, []);
  return (
  <div ref={projectContentRef} className='project-content w-full h-full relative overflow-hidden '>
    <div className="absolute w-full h-full p-5  
    bg-secondary flex justify-center items-center
    flex-col inset-0 top-0 left-0 z-10 scale-y-0 show-project
    origin-top-left">
      <h1 className="sm:text-[30px] text-center
      tracking-[1.5px]">{name}</h1>
      <p className='font-body md:text-[20.8px] text-center p-5'>
        {description}
      </p>
      <div className='flex flex-col justify-center items-center gap-5'>
       <a href={source_code_link}
        target="_blank"> VISIT SITE</a>
       <a href={source_code_link}
         target="_blank"> VIEW CODE</a>
      </div>
    </div>
    <img src={image} 
    className=" slider-img w-[200%] h-full
     bg-cover absolute inset-0 top-0 right-0
     max-w-none"/>
  </div>
  );
};

const Works = () => {
  const sliderWrapperRef = useRef(null);
  

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const items = document.querySelectorAll(".slider-item");
      const width = (items.length - 1) * 100;   
      const section = document.querySelector("#work");
      
      gsap.to(".slider-item", {
        xPercent: -width,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "20% top",
          end: () => "+=" + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true,
        },
      });

      items.forEach((item) => {
        gsap.to(item.querySelector(".slider-img"), {
          xPercent: -50,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + section.offsetWidth,
            scrub: true,
          },
        });
      });
      
    }, sliderWrapperRef); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
  }, []);
  

  return (
    <section className={`${styles.paddingSection}
    max-w-7xl mx-auto relative z-0` } id="work">

       <div  className=' xs:w-1/2 lg:w-1/3 flex justify-end 
       px-8 rounded-r-[20px] shadow-card bg-secondary absolute
       left-0 lg:-left-[10%] '>
        <p className={styles.sectionHeadText}>Projects</p>
      </div>
      <div ref={sliderWrapperRef} className="lg:mt-[300px] mt-56 flex flex-wrap gap-5 
      justify-center items-center overflow-hidden pl-[50%] sticky ">
      <ul className='flex'>
          {projects.map((project, index) => (
            <li key={index} className=" slider-item w-[25rem] h-[28rem] py-0 px-[1rem]" >
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Works;