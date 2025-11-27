import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Dua() {
  const duas = [
    { title: "For Increasing Knowledge", text: "Rabbi zidni ilma" },
    { title: "For Ease", text: "Allahumma yassir li amri wa la tu’assir alayya" },
    { title: "For Forgiveness", text: "Rabbighfir li" },
    { title: "For Mercy", text: "Rabbi ighfir warhamni" },
    { title: "For Protection", text: "Allahumma inni a’udhu bika minash-shaytanir-rajim" },
    { title: "For Guidance", text: "Ihdinas-siratal mustaqeem" },
    { title: "For Strength & Help", text: "Hasbunallahu wa ni’mal wakeel" },
    { title: "For Good in This World & Hereafter", text: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar" },
    { title: "For Patience", text: "Rabbi habli sabran" },
    { title: "For Protection of Heart", text: "Allahumma tahhir qalbi minan-nifaq" },
    { title: "For Rizq (Sustenance)", text: "Allahumma arzuqni rizqan halal an tayyiban" },
    { title: "For Healing", text: "Allahumma rabban-nas adhhibal-ba’sa ishfi anta ash-shafi la shifa’a illa shifa’uk" },
    { title: "For Sadness & Worry", text: "Allahumma inni a’udhu bika minal-hammi wal-huzn" },
    { title: "For Protection from Harm", text: "Allahumma inni a’udhu bika min kulli sharrin" },
    { title: "For Forgiveness of Sins", text: "Astaghfirullaha rabbi wa atubu ilayh" },
    { title: "For A Good End (Death on Faith)", text: "Allahumma tawaffani musliman wa alhiqni bis-salihin" },
    { title: "For Parents", text: "Rabbir hamhuma kama rabbayani sagheera" },
    { title: "Before Eating", text: "Bismillah" },
    { title: "After Eating", text: "Alhamdulillahil-ladhi at’amani wa saqani waja‘alani minal-muslimeen" },
    { title: "Before Sleeping", text: "Bismika Allahumma amutu wa ahya" },
    { title: "When Waking Up", text: "Alhamdulillahilladhi ahyana ba’da ma amatana wa ilayhin-nushoor" },
    { title: "For Entering Home", text: "Bismillahi walajna wa bismillahi kharajna wa ‘alallahi rabbina tawakkalna" },
    { title: "For Leaving Home", text: "Bismillah, tawakkaltu ‘ala Allah, la hawla wa la quwwata illa billah" },
    { title: "For Protection During Travel", text: "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin wa inna ila rabbina lamunqalibun" },
    { title: "For Anger", text: "A’udhu billahi minash-shaytanir-rajim" },
    { title: "For Success", text: "Rabbi yassir li wa barik li" },
    { title: "For Purity of the Soul", text: "Allahumma zakki nafsi anta khayru man zakkaha" },
    { title: "For Ease in Exams or Work", text: "Rabbi yassir wala tu’assir watammim bil-khayr" },
    { title: "For Protection in Morning", text: "Allahumma inni as’aluka khayra hadhal-yawm wa khayra ma fihi wa a’udhu bika min sharri ma fihi" },
    { title: "For Protection in Evening", text: "Allahumma inni as’aluka khayra hadhihil-laylah wa khayra ma fiha wa a’udhu bika min sharri ma fiha" },
    { title: "For Removing Hardship", text: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin" },
    { title: "For Saying Thanks", text: "Alhamdulillah ala kulli hal" },
    { title: "For Protection from Evil Eye", text: "Allahumma barik wa ihfazhu" },
    { title: "For Increase in Rizq", text: "Rabbi inni lima anzalta ilayya min khayrin faqir" },
    { title: "For Barakah", text: "Allahumma barik li fima razaqtani" },
    { title: "For Trust in Allah", text: "Tawakkaltu alallah" },
    { title: "For Forgiving Others", text: "Allahumma inni a’fu anhum" },
    { title: "For Protection from Hellfire", text: "Allahumma ajirni minan-nar" },
    { title: "For a Good Spouse", text: "Rabbi hab li min ladunka zawjan salihan" },
    { title: "For Good Character", text: "Allahumma ahsin khuluqi" }
  ];

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 6 : 4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(duas.length / itemsPerPage);
  const paginatedDuas = duas.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="py-20 px-6 lg:px-20  bg-gradient-to-b from-indigo-50 to-purple-50">
      <motion.h1
        className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Everyday Duas
      </motion.h1>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {paginatedDuas.map((dua, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-5 rounded-xl border border-indigo-200 hover:shadow-lg hover:border-indigo-400 transition-all duration-300"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-indigo-700 mb-2">
              {dua.title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-800">{dua.text}</p>
            <span className="absolute top-4 right-4 text-indigo-300 text-4xl select-none opacity-20">✦</span>
          </motion.div>
        ))}
      </div>

      
      <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`px-4 py-1 rounded-full font-semibold transition shadow-md 
            ${page === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 rounded-full font-semibold transition shadow-md 
              ${page === num ? "bg-indigo-700 text-white" : "bg-indigo-200 text-indigo-700 hover:bg-indigo-400"}`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className={`px-4 py-1 rounded-full font-semibold transition shadow-md 
            ${page === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
        >
          Next
        </button>
      </div>
    </section>
  );
}

