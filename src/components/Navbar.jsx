import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";


const Navbar = () => {
  
  const navigate = useNavigate();

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false); // this is for the toggle

  return (
    <header className="justify-between flex justify-between py-5 uppercase hover:bg-white/10 header"> {/* this all are ultiitys form tailwind classes , navbar is a special navbar org.*/}
      <img src={logo} alt="hoobank" className=" flex w-[130px] h-[32px]" />   {/* be carful there is a diffrenet between div and nav, lear how to use it */}
      
      <ul className="list-none sm:flex  justify-end items-center text-dimWhite flex-1"> {/* for the mobile unorederd list <<<i used hidden couse it must be hidden for the mobiles >>>*/}
        {navLinks.map((nav, index) => ( 
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px]${ 
              active === nav.title ? "text-white" : "text-dimWhite" 
            } ${index === navLinks.length - 1 ? "mr-10" : "mr-10"}`} //  for the contacts in the navbar and so on
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            
          </li>
          
        ))}
      </ul>
      
      <ul className="list-none sm:flex justify-end items-center text-dimWhite">
        <li>
            <button  onClick={() => navigate('/LogIn')} className="bg-cyan-800 hover:bg-cyan-500 font-bold text-white py-2 px-10 rounded-full">
                LogIn
            </button>    
        </li>
            
          
        
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center uppercase">
        <img
          src={toggle ? close : menu} // open and close the menu par
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex" // make it hidden
          } p-6 bg-black-gradient absolute top-20 right-5 mx-10 my-5 min-w-[140px] rounded-xl sidebar`}>

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}>

                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;