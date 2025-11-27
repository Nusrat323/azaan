import { useState, useEffect, useRef, useCallback } from "react";
import { scheduleAzaan } from "../utils/scheduleAzaan";
import { PrayerTimes as AdhanPrayerTimes, Coordinates, CalculationMethod } from "adhan";

export default function usePrayerTimes() {
  const [location, setLocation] = useState(null);
  const [timings, setTimings] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [userTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const fajrAudio = useRef(null);
  const otherAudio = useRef(null);

  
  const playAzaan = useCallback((prayer) => {
    setCurrentPrayer(prayer);

    let audio = prayer === "Fajr" ? fajrAudio.current : otherAudio.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play()
      .catch((err) => console.log(`${prayer} play error:`, err))
      .finally(() => {
        audio.onended = () => setCurrentPrayer(null);
      });
  }, []);

  
  const stopAzaan = useCallback(() => {
    if (!currentPrayer) return;

    let audio = currentPrayer === "Fajr" ? fajrAudio.current : otherAudio.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setCurrentPrayer(null);
  }, [currentPrayer]);

 
  useEffect(() => {
    window.testAzaan = {
      Fajr: () => playAzaan("Fajr"),
      Dhuhr: () => playAzaan("Dhuhr"),
      Asr: () => playAzaan("Asr"),
      Maghrib: () => playAzaan("Maghrib"),
      Isha: () => playAzaan("Isha"),
      stop: () => stopAzaan(),
    };
    console.log("Test Azaan via console: testAzaan.Fajr(), testAzaan.stop(), etc.");
  }, [playAzaan, stopAzaan]);

  
  useEffect(() => {
    const detectLocation = () => {
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          if (!location || location.lat !== lat || location.lng !== lng) {
            setLocation({ lat, lng });
          }
        },
        (err) => console.log("Geolocation error:", err)
      );
    };

    detectLocation();
    const interval = setInterval(detectLocation, 600000); 
    return () => clearInterval(interval);
  }, [location]);

 
  useEffect(() => {
    if (!location) return;

    const calculatePrayerTimes = () => {
      const coords = new Coordinates(location.lat, location.lng);
      const params = CalculationMethod.MuslimWorldLeague();
      const date = new Date();
      const prayerTimes = new AdhanPrayerTimes(coords, date, params);

      setTimings({
        Fajr: prayerTimes.fajr,
        Dhuhr: prayerTimes.dhuhr,
        Asr: prayerTimes.asr,
        Maghrib: prayerTimes.maghrib,
        Isha: prayerTimes.isha,
      });
    };

    calculatePrayerTimes();

   
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() - now.getTime();
    const timeout = setTimeout(() => calculatePrayerTimes(), msUntilMidnight);

    return () => clearTimeout(timeout);
  }, [location]);

  
  useEffect(() => {
    if (!timings) return;

    const playWithAutoStop = (prayer) => {
      playAzaan(prayer);
    };

    scheduleAzaan(timings, playWithAutoStop);
  }, [timings, playAzaan]);

  return {
    fajrAudio,
    otherAudio,
    timings,
    currentPrayer,
    playAzaan,
    stopAzaan,
    userTimeZone,
  };
}
