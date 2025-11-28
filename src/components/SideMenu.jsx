import React from "react";
import { Link } from "react-router-dom";

export default function SideMenu({ open, setOpen, handleScroll }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue-800/80 backdrop-blur-md text-white transform transition-transform duration-300 z-50 shadow-xl ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-bold text-xl tracking-wide"
        >
          Azaan
        </Link>

        <button
          onClick={() => setOpen(false)}
          className="text-white hover:text-gray-300 text-2xl font-bold transition"
        >
          ✕
        </button>
      </div>

      
      <ul className="flex flex-col gap-3 mt-6 ml-4 text-lg">
        {["prayer", "hadith", "dua", "surah"].map((route) => (
          <li key={route}>
            <button
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
              onClick={() => handleScroll(route)}
            >
              {route.charAt(0).toUpperCase() + route.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

