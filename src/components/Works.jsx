import React from "react";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


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
    <img src={image} 
    className="w-[200%] h-full
     bg-cover absolute inset-0 top-0 right-0
     max-w-none"/>
  </div>
  );
};

const Works = () => {
  return (
    <>
       <div className='xs:w-1/2 lg:w-1/3 flex justify-end 
       px-8 rounded-r-[20px] shadow-card bg-secondary absolute
       left-0 lg:-left-[10%] '>
        <p className={styles.sectionHeadText}>Projects</p>
      </div>
      <div className="lg:mt-[300px] mt-56 flex flex-wrap gap-5 
      justify-center items-center overflow-hidden pl-[50%] sticky ">
      <ul className='flex'>
          {projects.map((project, index) => (
            <li className="w-[25rem] h-[28rem] py-0 px-[1rem]" >
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");