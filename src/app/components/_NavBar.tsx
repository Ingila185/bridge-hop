'use client';
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../api/navLinks";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () =>{
    const [nav, setNav] = useState(false);


return (
    <div className="flex justify-between items-center w-full h-20 p-5 text-white bg-transparent fixed nav">
      {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
       <div className="flex flex-col">  
          <svg className="w-20 h-20" viewBox="0 0 138 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M110.924 33.7362H138C124.608 13.0654 81.7519 -19.5422 17.4684 15.3945C37.2658 8.69828 83.6734 2.99196 110.924 33.7362Z" fill="#001DB6"/>
<path d="M0 43.3439H17.4684C24.7468 31.116 48.2126 10.3287 83.8481 25.0021C66.3797 13.3565 25.1544 0.721087 0 43.3439Z" fill="#3C5BFF"/>
</svg>
<h1>BRIDGEHOP</h1>
</div>
          


    <ul className="hidden md:flex text-white ">
      {navLinks.map((link, idx ) => (
        <li
          key={idx}
          className="nav-links px-4 cursor-pointer capitalize font-medium font-white  
          hover:scale-105  duration-200 link-underline"
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
       
      ))}
<li>
<a href="#" className="inline-flex justify-center bg-blue
             hover:text-gray-900 items-center px-2 py-1 sm:ms-4 text-base 
             font-medium text-center text-white rounded-3xl border border-transparent hover:bg-gray-
              focus:ring-4 focus:ring-gray-400">
                Connect Wallet
            </a>  
</li>

       
    </ul>

    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
    >
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className="px-4 cursor-pointer capitalize py-6 text-lg"
          >
            <Link onClick={() => setNav(!nav)} href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}

      </ul>
    )}
  </div>
)
}
export default NavBar;