import React from 'react'
import { styles } from '../styles'
import {about} from '../constants'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({title, description, icon, index}) => (
  <div className='xs:w-[300px] lg:w-[400px]  w-full'>
    <div className="w-full p-5 rounded-[20px] shadow-card
    bg-secondary flex justify-center items-center flex-col
    min-h-[360px]">
      <div className="text-primary text-[60px]
       md:text-[80px] ">{icon}</div>
      <h3 className=' sm:text-[30px] text-center
      tracking-[1.5px]'>
        {title}
      </h3>
      <p className='font-body md:text-[20.8px] text-center p-5'>
        {description}
      </p>
    </div>
  </div>
)

const About = () => {
  return (
    <>
         <div className='xs:w-1/2 lg:w-1/3 flex justify-end 
       px-8 rounded-r-[20px] shadow-card bg-secondary absolute
       left-0 lg:-left-[10%] '>
        <p className={styles.sectionHeadText}>About</p>
      </div>
      <div className="lg:mt-[300px] mt-56 flex flex-wrap gap-5 
      justify-center">
        {about.map((aboutItem, index) => (
          <ServiceCard key={aboutItem.title} index={index}
          {...aboutItem}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about') 