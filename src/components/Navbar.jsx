import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

   
    const navbarHeight = 70;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300
          ${scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent text-white"}
        `}
      >
       
        <div
          className={`font-bold text-2xl tracking-wide transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link to="/">Azaan</Link>
        </div>

       
        <div className="hidden lg:flex gap-8">
          {["home", "prayer", "hadith", "dua"].map((route) => (
            <button
              key={route}
              onClick={() => scrollTo(route)}
              className={`capitalize font-medium transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {route}
            </button>
          ))}
        </div>

        
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className={`focus:outline-none p-2 rounded-md transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <SideMenu open={menuOpen} setOpen={setMenuOpen} handleScroll={scrollTo} />
    </>
  );
}
