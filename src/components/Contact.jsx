import React from 'react'
import {styles} from "../styles"

const Contact = () => {
  return (
    <section className={`${styles.paddingSection}
    max-w-7xl mx-auto relative z-0` } id="contact">

       <div  className=' xs:w-1/2 lg:w-1/3 flex justify-end 
       px-8 rounded-r-[20px] shadow-card bg-secondary absolute
       left-0 lg:-left-[10%] '>
        <p className={styles.sectionHeadText}>Contact</p>
      </div>
      <div className="lg:mt-[300px] mt-56 flex gap-5 
      justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[4rem]">
        <div className="flex flex-col items-center">
          <h2 className={`${styles.heroSubText} 
             greeting z-0`} >
              Send me a Message</h2>
          <div className="w-max h-max text-center px-[1rem] py-[0.25rem]
          bg-secondary shadow-contact rounded">
            <a className=" font-body sm:text-[30px] text-center tracking-[1.5px]" 
               href="mailto:jabidandresjimenezserrano@gmail.com">
              hello@jabid.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className={`${styles.heroSubText} 
             greeting z-0`} >
              Or</h2>
          <h2 className={`${styles.heroSubText} 
             greeting z-0`} >
              Connect with me on Socials</h2>
          <div className='flex gap-x-20'>
            <div className="w-max flex h-max text-center px-[1rem] py-[0.25rem]
            bg-secondary shadow-contact rounded">
              <a target='_blank'  className=" font-body sm:text-[30px] text-center tracking-[1.5px]" 
                href="https://github.com/">
                GITHUB
              </a>
            </div>
            <div className="w-max flex gap-y-20 h-max text-center px-[1rem] py-[0.25rem]
            bg-secondary shadow-contact rounded">
              <a target='_blank' className=" font-body sm:text-[30px] text-center tracking-[1.5px]" 
                href="https://linkedin.com/">
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact