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
  return (
  <div className='w-full h-full relative overflow-hidden '>
    <div className="absolute w-full h-full p-5  
    bg-secondary flex justify-center items-center
    flex-col inset-0 top-0 left-0 z-10 scale-y-0">
      <h1 className="sm:text-[30px] text-center
      tracking-[1.5px]">{name}</h1>
      <p className='font-body md:text-[20.8px] text-center p-5'>
        {description}
      </p>
      <div className='flex flex-col justify-center items-center gap-5'>
       <a className=""> VISIT SITE</a>
       <a className=""> VIEW CODE</a>
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