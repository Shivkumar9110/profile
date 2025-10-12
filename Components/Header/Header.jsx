import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faTimes} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';


export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  
// signUp and login button 
const AlertMessage = () => alert("Thank you for Clicking button will be start  soon"); // Replace with your desired alert message

  // Close the menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);
  

  return (
   <>
    <div className='bg-black text-white w-full h-10 flex items-center px-5 justify-between md:h-16  '>
      {/* logo  */}
      <div className='text-white text-2xl font-bold md:text-3xl md:font-bold'>Logo</div>


{/*  desktop navigation */}

       <div className='hidden  md:flex  gap-4 items-center transition-all duration-500 ease-in-out   list-none '>
              
                <li>
                  <NavLink
                    to="/"
                    
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold  text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       Home
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/about"
                   
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       About
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/Contact"
                    
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold  text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       Contact
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/gallary"                    
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold  text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       Gallery
                  </NavLink>
                </li>


                   




              
      </div>


{/* mobile navigation */}
     {menuOpen && ( <div className='md:hidden flex flex-col items-center gap-4 items-center transition-all duration-500 ease-in  border-2 border-gray-300 rounded-md w-full h-40 bg-black  text-white absolute top-10 left-0 list-none  '>
              
                <li>
                  <NavLink
                    to="/"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold  text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       Home
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/About"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       About
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/Contact"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold  text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       Contact
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/Gallary"
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                    `${isActive ? "font-semibold  text-orange-400 cuursor-pointer" : "hover:underline font-bold text-black-400"}`
                    }
                    >
                       Gallary
                  </NavLink>
                </li>

                   




              
      </div>
     )}



      



{/* buttons logIN signUp */}
      <div className='hidden md:flex gap-4 '>

        <button onClick={AlertMessage} className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 sm: flex hidden md:flex  ' >Sign Up</button>  

        <button onClick={AlertMessage} className='bg-gray-800 text-white px-4 py-2 rounded-md ml-4 hover:bg-gray-900 sm: flex hidden md:flex'>Login</button>
      </div>

{/* hamburger */}
      <div className='md:hidden sm:flex  '> 
            <button  onClick={() => setMenuOpen(!menuOpen)} className=" focus:outline-none ">
              <FontAwesomeIcon 
              icon={menuOpen ? faTimes : faBars}  
              className=" text-white text-2xl cursor-pointer " />
              
            </button>
        
      </div>

    </div>
    
   </>
  )
}
