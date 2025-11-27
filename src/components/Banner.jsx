
import React, { useState, useEffect } from "react";

export default function Banner() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeOptions = { hour: "numeric", minute: "numeric", second: "numeric", hour12: true };
  const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return (
    <div
      className="relative w-full flex items-center justify-center text-center text-white overflow-hidden  shadow-lg
                 h-80 sm:h-96 md:h-[500px] lg:h-[600px]"
    >
      
      <img
        src="https://i.ibb.co.com/Jw2Y07Mw/kevin-olson-WPw-A0-Pi-MZo-I-unsplash.jpg"
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <div className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]">
          {currentTime.toLocaleTimeString([], timeOptions)}
        </div>
        <div className="text-lg md:text-2xl lg:text-3xl mt-2 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
          {currentTime.toLocaleDateString([], dateOptions)}
        </div>
      </div>
    </div>
  );
}

