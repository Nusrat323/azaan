{/*import React from "react";
import { motion } from "framer-motion";


import img1 from "../assets/images/islamicabout1.jpg";
import img2 from "../assets/images/islamicabout2.jpg";
import img3 from "../assets/images/islamicabout3.jpg";
import img4 from "../assets/images/islamicabout4.jpg";


const preloadImages = [img1, img2, img3, img4];
preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

export default function IntroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center lg:items-start px-6 lg:px-20 py-16 ">

      
      <div className="flex-1 flex flex-col items-center lg:items-start mb-10 lg:mb-0 relative">

        
        <motion.img
          src={img1}
          alt="Islamic Scene"
          className="w-full max-w-md rounded-xl shadow-2xl mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        
        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {[img2, img4, img3].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Small ${i + 1}`}
              className="w-full h-28 rounded-lg shadow-lg object-cover"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}   
            />
          ))}
        </div>
      </div>

      
      <div className="flex-1 lg:pl-12 text-center lg:text-left mt-4 mb-8 lg:mt-10 lg:mb-2">

        
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900"
          style={{ fontFamily: "'Amiri', serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Assalamualaikum
        </motion.h1>

        
        <motion.div
          className="w-24 h-1 bg-indigo-600 mx-auto lg:mx-0 rounded-full mb-6"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
        />

        
        <motion.h2
          className="text-2xl lg:text-3xl font-semibold text-indigo-700 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Azaan
        </motion.h2>

        <motion.p
          className="text-lg lg:text-xl text-gray-800 font-medium mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your daily guide to Islamic prayer times
        </motion.p>

       
        <motion.p
          className="text-gray-700 text-base lg:text-md leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Salah purifies the heart, strengthens the soul, and brings peace into our daily life.
          Islam is a path of mercy, balance, and serenity.
          Azaan aims to help you stay connected to your prayers and
          deepen your connection with the deen with ease and beauty.
        </motion.p>

      </div>
    </section>
  );
}*/}





import React from "react";

import img1 from "../assets/images/islamicabout1.jpg";
import img2 from "../assets/images/islamicabout2.jpg";
import img3 from "../assets/images/islamicabout3.jpg";
import img4 from "../assets/images/islamicabout4.jpg";

// Preload small images (optional, they load immediately anyway)
const preloadImages = [img2, img3, img4];
preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

export default function IntroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center lg:items-start px-6 lg:px-20 py-16 ">

      {/* Left Side: Images */}
      <div className="flex-1 flex flex-col items-center lg:items-start mb-10 lg:mb-0 relative">

        {/* First Big Image */}
        <img
          src={img1}
          alt="Islamic Scene"
          className="w-full max-w-md rounded-xl shadow-2xl mb-4"
        />

        {/* Grid of Small Images */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {[img2, img4, img3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Small ${i + 1}`}
              className="w-full h-28 rounded-lg shadow-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="flex-1 lg:pl-12 text-center lg:text-left mt-4 mb-8 lg:mt-10 lg:mb-2">

        <h1
          className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900"
          style={{ fontFamily: "'Amiri', serif" }}
        >
          Assalamualaikum
        </h1>

        <div className="w-24 h-1 bg-indigo-600 mx-auto lg:mx-0 rounded-full mb-6" />

        <h2 className="text-2xl lg:text-3xl font-semibold text-indigo-700 mb-4">
          Welcome to Azaan
        </h2>

        <p className="text-lg lg:text-xl text-gray-800 font-medium mb-4">
          Your daily guide to Islamic prayer times
        </p>

        <p className="text-gray-700 text-base lg:text-md leading-relaxed">
          Salah purifies the heart, strengthens the soul, and brings peace into our daily life.
          Islam is a path of mercy, balance, and serenity.
          Azaan aims to help you stay connected to your prayers and
          deepen your connection with the deen with ease and beauty.
        </p>

      </div>
    </section>
  );
}



