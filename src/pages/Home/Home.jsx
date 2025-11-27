import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import PrayerTimeCard from "../../components/PrayerTimeCard";
     
import IntroSection from "../../components/IntroSection";
import HadithSection from "../../components/HadithSection";
import Dua from "../../components/Dua";
import Footer from "../../components/Footer";

export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      
      <section id="home">
        <Banner />
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <IntroSection />

       
        <section id="prayer">
          <PrayerTimeCard />
        </section>

        
        <section id="hadith">
          <HadithSection />
        </section>

        
        <section id="dua">
          <Dua />
        </section>

        <Footer />
      </div>
    </>
  );
}


