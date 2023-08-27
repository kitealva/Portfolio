import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      }  w-full flex items-center py-6 fixed top-0 z-20 ${
        scrolled ? "bg-tertiary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[26px] font-bold cursor-pointer flex '>
            Brady &nbsp;
            <span className='sm:block hidden'> | Software Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

          {/* this is mobile nav below */}
          <div onClick={()=>setToggle(!toggle)} className='text-3xl absolute right-8 top-6 cursor-pointer sm:hidden'>
          <ion-icon name={toggle ? 'close':'menu'}></ion-icon>
          </div>

          <ul className={`md:hidden pb-6 absolute bg-primary z-[-1] left-0 w-full transition-all duration-500 ease-in pl-12 ${toggle ? 'top-20 ':'top-[-490px]'}`}>
          {
          navLinks.map((nav)=>(
            <li key={nav.title} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={`#${nav.id}`} className='text-secondary hover:text-white duration-500'>{nav.title}</a>
            </li>
          ))
        }
        
      </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;