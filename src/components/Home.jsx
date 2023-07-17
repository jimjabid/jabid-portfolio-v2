import {useRef, useEffect, useState} from 'react'
import SplitTextJS from '../utils/SplitTextJS'
import { styles } from '../styles'
import {socialIcons} from '../constants'
import { gsap } from 'gsap'


const Home = () => {
  const [active, setActive] = useState("") 
  const heroRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(()=>{
    const titles = gsap.utils.toArray('.hero-title');
    const titleTL = gsap.timeline({ repeat: -1});

    titles.forEach((title) => { 
    const splitTitle = new SplitTextJS(title);
      
    titleTL
      .from(
        splitTitle.chars,
        { y: 16, opacity: 0, rotateX: -90, stagger: 0.02 },
        "<0.8"
      )
      .to(
        splitTitle.chars,
        { y: -16, opacity: 0, rotateX: 90, stagger: 0.02 },
        "<2"
      );
      
  });
   
    },heroRef);
    return () => ctx.revert();
  }, [])

  return (
    <section className=' w-full h-screen
    mx-auto' ref={heroRef}>
     <div className={`${styles.padding} 
       lg:flex lg:flex-row xs:flex xs:flex-col xs:items-center lg:items-center  lg:justify-around 
        `}
      >
         <div className='flex flex-col text-center lg:text-start font-title'
          >
          <h2 className={`${styles.heroSubText}  text-tertiary font-greeting 
          lg:mb-[100px] sm:mb-[60px] md:mb-[80px] mb-[50px] greeting z-0`} >I am</h2>

          <h1 className={`${styles.heroHeadText} hero-title`}  >Jabid Jimenez</h1>
          <h1 className={`${styles.heroHeadText} hero-title`} >Web Designer</h1>
          <h1 className={`${styles.heroHeadText} hero-title`}>Web Developer</h1>
          <div className="flex justify-center lg:justify-start md:mt-[100px] sm:mt-[60px] mt-[50px]">
              <ul className=' list-none flex items-center gap-16 z-0'>
                {socialIcons.map((icon)=> (
                  <li key={icon.id} >
                    <a href={`${icon.url}`} className={styles.iconsSize} 
                    > 
                      {icon.icon}
                    </a>
                  </li>
                ))}
             </ul>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center
        img-container bg-body-color relative
        md:mt-[50px] sm:mt-[30px] mt-[25px] xs:w-[300px] xs:h-[325px]
        sm:w-[400px] sm:h-[450px]'> 
          
        </div>       
      </div>

    </section>
  )
}

export default Home