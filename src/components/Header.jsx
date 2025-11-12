import React, { useState } from "react";
import logo1 from "../assets/images/logo1.png";
import Sloy31 from "../assets/images/Sloy31.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-999 bg-[#0c151c]">
      <header className="max-w-[1748px] mx-auto w-[90%] text-white gap-5 py-4 px-6 flex flex-wrap justify-between items-center">
        <a href="/" className="md:block hidden">
          <img src={logo1} alt="" />
        </a>
        <a href="/" className="md:hidden block">
          <img src={Sloy31} alt="" className="h-8" />
        </a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
          >
            Services
          </a>
          <a
            href="#works"
            className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
          >
            Our works
          </a>
          <a
            href="#about"
            className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
          >
            About us
          </a>
          <a
            href="#contact"
            className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
          >
            Contact us
          </a>
        </nav>
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer z-10"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 mb-[2px] bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 mb-[2px] bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 mb-[2px] bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        <div
          className={`fixed inset-0 bg-black/90 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 w-full max-w-sm h-screen bg-[#0c151c] z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 gap-6">
            <button
              className="self-end mr-5 text-white text-2xl"
              onClick={toggleMenu}
            >
              ×
            </button>
            <nav className="flex flex-col gap-6 mt-8">
              <a
                href="#services"
                className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#works"
                className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
                onClick={toggleMenu}
              >
                Our works
              </a>
              <a
                href="#about"
                className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
                onClick={toggleMenu}
              >
                About us
              </a>
              <a
                href="#contact"
                className="font-normal text-xl leading-[130%] text-white font-family hover:text-[#0089bd] transition-colors"
                onClick={toggleMenu}
              >
                Contact us
              </a>
            </nav>

            <button
              className="w-full h-[45px] px-5 py-3 rounded-2xl flex cursor-pointer items-center justify-center bg-[#018abe] hover:bg-blue-700 transition-colors mt-8"
              onClick={toggleMenu}
            >
              GET STARTED
            </button>
          </div>
        </div>
        <button className="hidden md:flex w-[135px] h-[45px] px-5 py-3 font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-center text-white font-second-family rounded-2xl flex cursor-pointer items-center justify-center bg-[#018abe] hover:bg-blue-700 transition-colors">
          GET STARTED
        </button>
      </header>
    </div>
  );
};

export default Header;
