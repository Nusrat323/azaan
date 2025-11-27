import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function HadithSection() {
  const sectionRef = useRef(null);

  const hadiths = [
    { id: 1, text: "Actions are judged by intentions, and every person will get the reward according to what he intended.", reference: "Sahih al-Bukhari 1" },
    { id: 2, text: "The best among you are those who have the best manners and character.", reference: "Sahih al-Bukhari 6029" },
    { id: 3, text: "Make things easy, do not make things difficult.", reference: "Sahih al-Bukhari 6125" },
    { id: 4, text: "None of you truly believes until he loves for his brother what he loves for himself.", reference: "Sahih al-Bukhari 13" },
    { id: 5, text: "The strongest among you is the one who controls himself when angry.", reference: "Sahih al-Bukhari 6114" },
    { id: 6, text: "The believer is not the one who eats his fill while his neighbor is hungry.", reference: "Sahih al-Bukhari 112" },
    { id: 7, text: "He who does not thank people, does not thank Allah.", reference: "Sahih al-Bukhari 5977" },
    { id: 8, text: "The most beloved of people to Allah on the Day of Judgment and the closest to Him will be the just leader.", reference: "Sahih al-Bukhari 893" },
    { id: 9, text: "The merciful are shown mercy by the Merciful.", reference: "Sahih al-Bukhari 7371" },
    { id: 10, text: "Feed the hungry, visit the sick, and free the captive.", reference: "Sahih al-Bukhari 5649" },
    { id: 11, text: "When a man dies, his deeds come to an end except for three: a continuing charity, knowledge from which others benefit, or a righteous child who prays for him.", reference: "Sahih al-Bukhari 2277" },
    { id: 12, text: "The Prophet  Muhammad ( SAW ) said: Whoever removes a worldly grief from a believer, Allah will remove one of his griefs on the Day of Judgment.", reference: "Sahih al-Bukhari 2448" },
  ];

  const isLargeScreen = typeof window !== "undefined" ? window.innerWidth >= 1024 : true;
  const itemsPerPage = isLargeScreen ? 6 : 4;

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(hadiths.length / itemsPerPage);
  const paginatedHadiths = hadiths.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  
  const scrollToSectionTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToSectionTop();
  }, [page]);

  return (
    <section ref={sectionRef} className="px-6 lg:px-20 py-20">
      <motion.h1
        className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Beautiful Hadith 
      </motion.h1>

      <p className="text-center text-gray-700 text-lg mb-12">
         Hadith from <span className="font-semibold">Sahih al-Bukhari</span>
      </p>

      
      <div className="flex flex-col gap-6">
        {paginatedHadiths.map((h) => (
          <motion.div
            key={h.id}
            className="flex flex-col gap-2 px-6 py-4 rounded-xl border-l-4 border-indigo-500 bg-white shadow-sm
                       hover:shadow-lg hover:translate-x-1 transition-all duration-300 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gray-900 text-lg font-medium leading-relaxed">“{h.text}”</p>
            <p className="text-sm font-semibold text-indigo-600">{h.reference}</p>
          </motion.div>
        ))}
      </div>

      
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`px-5 py-2 rounded-full font-semibold transition shadow-md ${
            page === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Previous
        </button>

        <span className="text-lg font-medium text-gray-700">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className={`px-5 py-2 rounded-full font-semibold transition shadow-md ${
            page === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}

