import React, { useEffect, useState} from "react";

import { navLinks } from "../constants";
import { insta, twitter, linkedin, youtube } from "../assets";


const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
        
        <footer className=" text-white p-6 rounded-t-lg">
            <div className="flex justify-center gap-14"> 
                <a href="https://www.instagram.com/bradenaalva/?hl=en"><img className="w-9 h-9" src={insta} alt="instagram"/></a>
                <a href="https://twitter.com/kitealva"><img className="w-9 h-9" src={twitter} alt="twitter"/></a>
                <a href="https://www.linkedin.com/in/brady-alva-a94437251/"><img className="w-9 h-9" src={linkedin} alt="twitter"/></a>
                <a href="https://www.youtube.com/"><img className="w-9 h-9" src={youtube} alt="twitter"/></a>
            </div>

      <ul className='list-none sm: hidden justify-center gap-16 pt-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      <div className="container mx-auto text-center pt-8 text-lg">
        <p>&copy; {new Date().getFullYear()} Brady. All rights reserved</p>
      </div>
    </footer>
    )
}

export default Footer;