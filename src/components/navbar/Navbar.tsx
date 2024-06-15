"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const itemStyles = "hover:text-accent-300 transition-all duration-300"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [  
{
     id: 1,
     tittle: "Home",
     path: "#HomeSection",
},
 {
     id: 2,
     tittle: "Benefits",
     path: "#BenefitSection"
 },
  
{
     id: 3,
     tittle: "Our Classes",
     path: "#ClassSection",
},
{
     id: 4,
     tittle: "Contact Us",
     path: "#ContactSection",
},

];

  
  
  return (
  <header className="w-full h-[60px] flex items-center fixed font-semibold text-white md:text-primary-500
   bg-gray-200 z-50">
    <div className="container flex justify-between items-center">
      <div>
        <Image
           width={150}
           height={34}
         src="/images/logo/mikegym.svg" 
        alt="Logo" 
        />
      </div>
    <div 
    onClick={() => setOpen(!open)} 
    className="block md:hidden cursor-pointer z-10">
    { open ? <IoMdClose size={30}   /> : <RxHamburgerMenu size={30} />  }
    </div>
      <nav 
      className={`${open ? "right-0" : "right-[-100%]"
      } w-[70%] md:w-auto h-screen md:h-auto px-5 
      md:px-0 pt-20 md:pt-0 absolute md:static top-0 duration-500 ease-in bg-primary-400 md:bg-transparent`}
      >
        <ul className="flex flex-col md:flex-row gap-5">
          {links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.id}>
                <Link href={link.path}>{link.tittle}</Link>
              </li>
            ))}
        </ul>
     </nav>
     <div className=" hidden md:flex items-center gap-5">
        <Link href="#AboutSection" className={`${itemStyles}`}
        >
          About us</Link>
        <button className="font-bold px-10 py-2 rounded-full
        cursor-pointer text-white bg-primary-400"
        >
          Join
        </button>
      </div>
    </div>
    </header>
  )
};

export default Navbar;