import React, { useState } from "react";
import { NavItem } from "../types/nav";
import { Link } from "react-router-dom";
import {scroller} from 'react-scroll';

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Destination",
    href: "destination",
  },
  {
    name: "Tour",
    href: "tour",
  },
  {
    name: "Blog",
    href: "blogs",
  },
  {
    name: "Login",
    href: "/login",
  },
];
const Navbar:React.FC = () => {
  const [active, setActive] = useState<string>("/")

  const setActiveAndScrollto = (id:string) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    setActive(id)
  }

  return (
    <div id="home" className="flex justify-between py-5 px-10 border-b shadow-sm sticky top-0 bg-white opacity-100 z-50">
      <Link to="/" className="flex-2 font-semibold font-poppins text-xl pt-2 cursor-pointer ">Tesfa-Tour</Link>
      <div className="flex-3 flex gap-5">
        <ul className="flex gap-10 pt-2 pr-4">
          {navItems.map((navItem, index)=>
          <Link 
            key={index} 
            to="#" 
            onClick={()=>{setActiveAndScrollto(navItem.href)}}
            className={`${active == navItem.href? 'text-secondary':'text-primary'}`}
          >
            {navItem.name}
          </Link>
            )}
        </ul>
        <button className="bg-secondary px-5 py-2 text-white rounded-md">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
