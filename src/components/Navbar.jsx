import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom' 
import {styles} from '../styles'
import {navLinks} from '../constants'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'


const Navbar = () => {
  const [active, setActive] = useState("") 
  const [toggle, setToggle] = useState(false) //toggle is false by default so when we click on the menu icon it will change to true and the menu will be shown
  return (
    <nav
    className=  { `${styles.paddingX} w-full flex items-center py-8 fixed top-0 z-20` }
    >
      <div className=' flex items-center justify-end w-full max-w-7xl mx-auto'>
       <ul className='list-none hidden sm:flex flex-row sm:gap-16'>
        {navLinks.map((link)=> (
          <li key={link.id}
           className={`${
            active === link.title
            ? "text-primary"
            : "text-tertiary"} hover:text-primary text-[18px]
            font-medium cursor-pointer`}
            onClick={()=> setActive(link.title)}>
      
            <a href={`#${link.id}`}> {link.title} </a>
            </li>
        ))}
       </ul>
       <div className='sm:hidden flex flex-1
       justify-end items-center'>
        <img
         src={toggle ? close : menu}
         alt="menu"
         className='w-[28px] h-[28px] z-50
         object-contain cursor-pointer absolute top-5 right-5'
         onClick={() => setToggle((!toggle))} /> 

        <div className={`${!toggle ? "hidden" 
          : "flex"} p-6 bg-secondary absolute
          top-0 right-0 z-10 w-full h-screen justify-center `}>
            <ul className='list-none flex justify-center items-center
             flex-col gap-4'>
            {navLinks.map((link)=> (
              <li key={link.id}
                className={`${
                active === link.title
                ? "text-primary"
                : "text-tertiary"} hover:text-primary text-[58px]
                font-medium cursor-pointer`}
                onClick={()=>{
                 setToggle(!toggle) 
                 setActive(link.title)}}>
                 <a href={`#${link.id}`}> {link.title} </a>
                </li>
            ))}
            </ul>
          
        </div>
       
        </div>
      </div>
    </nav>
  )
}

export default Navbar