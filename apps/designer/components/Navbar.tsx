import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="shadow">
      <div className="container flex items-center justify-between px-10 py-6 mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-orange-500 hover:border-b-2 hover:cursor-pointer">
            Logo
          </h1>
        </div>

        <div>
          <div
            className="hover:cursor-pointer sm:hidden"
            onClick={() => {
              console.log("clicked");
            }}
          ></div>
          <div className="flex items-center">
            <ul className="items-center hidden space-x-4 sm:flex">
              <Link href="/">
                <a className="text-lg text-gray-700 border-orange-500 hover:border-b-2 hover:text-orange-500 text-md ">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="text-lg text-gray-700 border-orange-500 hover:text-orange-500 hover:border-b-2 text-md ">
                  About
                </a>
              </Link>
              <Link href="/services">
                <a className="text-lg text-gray-700 border-orange-500 hover:border-b-2 hover:text-orange-500 text-md ">
                  Services
                </a>
              </Link>
              <Link href="/products">
                <a className="text-lg text-gray-700 border-orange-500 hover:border-b-2 hover:text-orange-500 text-md ">
                  Products
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-lg text-gray-700 border-orange-500 hover:border-b-2 hover:text-orange-500 text-md ">
                  Contact
                </a>
              </Link>
            </ul>
            {/* Mobile Button */}
            <div onClick={handleNav} className="z-10 block sm:hidden">
              {nav ? (
                <AiOutlineClose size={30} className="text-orange-500" />
              ) : (
                <AiOutlineMenu size={30} className="text-orange-500" />
              )}
            </div>
            {/* Mobile Menu */}
            <div
              className={
                nav
                  ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                  : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              }
            >
              <ul>
                <li
                  onClick={handleNav}
                  className="p-4 text-xl text-white border-orange-500 hover:border-b-2 hover:text-orange-500"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-xl text-white border-orange-500 hover:border-b-2 hover:text-orange-500"
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-xl text-white border-orange-500 hover:border-b-2 hover:text-orange-500"
                >
                  <Link href="/products">Products</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-xl text-white border-orange-500 hover:border-b-2 hover:text-orange-500"
                >
                  <Link href="/services">Services</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-2xl text-white border-orange-500 hover:border-b-2 hover:text-orange-500"
                >
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="items-center hidden ml-8 space-x-4 md:flex lg:ml-12">
                <h1 className="py-2 text-text-gray-600 hover:cursor-pointer hover:text-orange-500">
                  LOGIN
                </h1>
                <h1 className="px-4 py-2 text-white bg-orange-500 rounded text-text-gray-600 hover:cursor-pointer hover:shadow-lg">
                  SIGNUP
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
