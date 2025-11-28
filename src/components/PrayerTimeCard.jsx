{/*import React, { useState, useEffect, useRef, useCallback } from "react";
import { PrayerTimes as AdhanPrayerTimes, Coordinates, CalculationMethod } from "adhan";
import AzaanPlayer from "./AzaanPlayer";

export default function PrayerTimeCard() {
  const [location, setLocation] = useState(null);
  const [timings, setTimings] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState(null);

  const fajrAudio = useRef(null);
  const otherAudio = useRef(null);
  const timeoutsRef = useRef([]);

  const playAzaan = useCallback((prayer) => {
    setCurrentPrayer(prayer);
    const audio = prayer === "Fajr" ? fajrAudio.current : otherAudio.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch(err => console.log(`${prayer} play error:`, err));
    audio.onended = () => setCurrentPrayer(null);
  }, []);

  const stopAzaan = useCallback(() => {
    if (!currentPrayer) return;
    const audio = currentPrayer === "Fajr" ? fajrAudio.current : otherAudio.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setCurrentPrayer(null);
  }, [currentPrayer]);

  useEffect(() => {
    if (!navigator.geolocation) return;
    const detectLocation = () => {
      navigator.geolocation.getCurrentPosition(
        pos => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        err => console.log("Geolocation error:", err)
      );
    };
    detectLocation();
    const interval = setInterval(detectLocation, 600000);
    return () => clearInterval(interval);
  }, []);

  const calculatePrayerTimes = useCallback(() => {
    if (!location) return;

    const now = new Date();
    const coords = new Coordinates(location.lat, location.lng);
    const params = CalculationMethod.MuslimWorldLeague();

    let prayerDate = new Date(now);
    let prayerTimes = new AdhanPrayerTimes(coords, prayerDate, params);

    if (new Date(prayerTimes.isha) <= now) {
      prayerDate.setDate(prayerDate.getDate() + 1);
      prayerTimes = new AdhanPrayerTimes(coords, prayerDate, params);
    }

    return prayerTimes;
  }, [location]);

  const schedulePrayers = useCallback(() => {
    if (!location) return;

    const now = new Date();
    const prayerTimes = calculatePrayerTimes();

    const todayTimings = {
      Fajr: prayerTimes.fajr,
      Dhuhr: prayerTimes.dhuhr,
      Asr: prayerTimes.asr,
      Maghrib: prayerTimes.maghrib,
      Isha: prayerTimes.isha,
    };

    setTimings(todayTimings);

    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];

    Object.entries(todayTimings).forEach(([prayer, time]) => {
      const msUntilPrayer = new Date(time).getTime() - now.getTime();
      if (msUntilPrayer > 0) {
        const timeoutId = setTimeout(() => {
          playAzaan(prayer);
          if (prayer === "Isha") setTimeout(schedulePrayers, 60 * 1000);
        }, msUntilPrayer);
        timeoutsRef.current.push(timeoutId);
      }
    });
  }, [location, playAzaan, calculatePrayerTimes]);

  useEffect(() => {
    schedulePrayers();
  }, [location, schedulePrayers]);

  useEffect(() => {
    window.testAzaan = {
      Fajr: () => playAzaan("Fajr"),
      Dhuhr: () => playAzaan("Dhuhr"),
      Asr: () => playAzaan("Asr"),
      Maghrib: () => playAzaan("Maghrib"),
      Isha: () => playAzaan("Isha"),
      stop: stopAzaan,
    };
    return () => delete window.testAzaan;
  }, [playAzaan, stopAzaan]);

  return (
    <div className="flex flex-col items-center justify-center w-full my-10 px-4 lg:px-0">

      
      <div className="w-full max-w-5xl h-[2px] bg-indigo-200 mb-9"></div>

     
      <h2 className="text-3xl lg:text-4xl font-bold text-indigo-800 mb-2 text-center">
        Prayer Times
      </h2>

      
      <p className="text-center text-gray-700 mb-8 max-w-xl">
        Keep track of your daily prayers easily. The timings adjust automatically based on your location.
      </p>

      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-2xl rounded-lg p-6 lg:p-10 w-full max-w-md flex flex-col items-center border border-indigo-500
                      transition-all duration-500 hover:scale-105">

        {timings && (
          <div className="w-full">
            <table className="w-full text-center table-auto">
              <thead>
                <tr className="border-b border-white/30">
                  {Object.keys(timings).map(prayer => (
                    <th key={prayer} className="py-2 text-white">{prayer}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.entries(timings).map(([prayer, time]) => (
                    <td
                      key={prayer}
                      className={`py-2 font-semibold ${
                        currentPrayer === prayer ? "text-yellow-400" : "text-white"
                      }`}
                    >
                      {new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentPrayer && (
          <button
            onClick={stopAzaan}
            className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg
                       hover:bg-yellow-500 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Stop {currentPrayer} Azaan
          </button>
        )}
      </div>

      
      <div className="w-full max-w-5xl h-[2px] bg-indigo-200 mt-14"></div>

      <AzaanPlayer fajrAudio={fajrAudio} otherAudio={otherAudio} />
    </div>
  );
}*/}




import React, { useState, useEffect, useRef, useCallback } from "react";
import { PrayerTimes as AdhanPrayerTimes, Coordinates, CalculationMethod } from "adhan";
import AzaanPlayer from "./AzaanPlayer";

export default function PrayerTimeCard() {
  const [location, setLocation] = useState(null);
  const [timings, setTimings] = useState(null);
  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(null);
  const [progress, setProgress] = useState(0);

  const fajrAudio = useRef(null);
  const otherAudio = useRef(null);
  const timeoutsRef = useRef([]);
  const countdownIntervalRef = useRef(null);

  const playAzaan = useCallback((prayer) => {
    setCurrentPrayer(prayer);
    const audio = prayer === "Fajr" ? fajrAudio.current : otherAudio.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play().catch((err) => console.log(`${prayer} play error:`, err));

    audio.onended = () => {
      setCurrentPrayer(null);
      startCountdown();
    };
  }, []);

  const stopAzaan = useCallback(() => {
    if (!currentPrayer) return;
    const audio = currentPrayer === "Fajr" ? fajrAudio.current : otherAudio.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setCurrentPrayer(null);
    startCountdown();
  }, [currentPrayer]);

 
  useEffect(() => {
    if (!navigator.geolocation) return;
    const detectLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.log("Geolocation error:", err)
      );
    };
    detectLocation();
    const interval = setInterval(detectLocation, 600000); 
    return () => clearInterval(interval);
  }, []);

  
  const calculatePrayerTimes = useCallback(() => {
    if (!location) return;

    const now = new Date();
    const coords = new Coordinates(location.lat, location.lng);
    const params = CalculationMethod.MuslimWorldLeague();
    let prayerDate = new Date(now);
    let prayerTimes = new AdhanPrayerTimes(coords, prayerDate, params);

    if (new Date(prayerTimes.isha) <= now) {
      prayerDate.setDate(prayerDate.getDate() + 1);
      prayerTimes = new AdhanPrayerTimes(coords, prayerDate, params);
    }

    return prayerTimes;
  }, [location]);

 
  const schedulePrayers = useCallback(() => {
    if (!location) return;

    const now = new Date();
    const prayerTimes = calculatePrayerTimes();
    if (!prayerTimes) return;

    const todayTimings = {
      Fajr: prayerTimes.fajr,
      Dhuhr: prayerTimes.dhuhr,
      Asr: prayerTimes.asr,
      Maghrib: prayerTimes.maghrib,
      Isha: prayerTimes.isha,
    };
    setTimings(todayTimings);

   
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];

   
    Object.entries(todayTimings).forEach(([prayer, time]) => {
      const msUntilPrayer = new Date(time).getTime() - now.getTime();
      if (msUntilPrayer > 0) {
        const timeoutId = setTimeout(() => {
          playAzaan(prayer);
          if (prayer === "Isha") setTimeout(schedulePrayers, 60 * 1000); 
        }, msUntilPrayer);
        timeoutsRef.current.push(timeoutId);
      }
    });

    startCountdown(todayTimings); 
  }, [location, playAzaan, calculatePrayerTimes]);

 
  const startCountdown = useCallback(
    (givenTimings) => {
      const t = givenTimings || timings;
      if (!t) return;

      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

      const now = new Date();
      let nextP = null;
      let nextTime = null;

      for (const [prayer, time] of Object.entries(t)) {
        if (new Date(time) > now) {
          nextP = prayer;
          nextTime = new Date(time);
          break;
        }
      }

      if (!nextP) return;

      setNextPrayer(nextP);

      const totalSeconds = Math.floor((nextTime - now) / 1000);

      countdownIntervalRef.current = setInterval(() => {
        const now = new Date();
        const diff = nextTime - now;

        if (diff <= 0) {
          clearInterval(countdownIntervalRef.current);
          setTimeLeft("00:00:00");
          setTimeLeftSeconds(0);
          setProgress(100);
          schedulePrayers();
          return;
        }

        const secondsLeft = Math.floor(diff / 1000);
        const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
        const seconds = String(secondsLeft % 60).padStart(2, "0");

        setTimeLeft(`${hours}:${minutes}:${seconds}`);
        setTimeLeftSeconds(secondsLeft);

        
        const percent = Math.floor(((totalSeconds - secondsLeft) / totalSeconds) * 100);
        setProgress(percent);
      }, 1000);
    },
    [timings, schedulePrayers]
  );

  useEffect(() => {
    schedulePrayers();
    return () => {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, [location, schedulePrayers]);

 
  useEffect(() => {
    window.testAzaan = {
      Fajr: () => playAzaan("Fajr"),
      Dhuhr: () => playAzaan("Dhuhr"),
      Asr: () => playAzaan("Asr"),
      Maghrib: () => playAzaan("Maghrib"),
      Isha: () => playAzaan("Isha"),
      stop: stopAzaan,
    };
    return () => delete window.testAzaan;
  }, [playAzaan, stopAzaan]);

  return (
    <div className="flex flex-col items-center justify-center w-full my-10 px-4 lg:px-0">

      <div className="w-full max-w-5xl h-[2px] bg-indigo-200 mb-9"></div>

      {nextPrayer && timeLeft && (
        <div className="mb-10 w-full max-w-md text-center">
          <h3
            className={`text-2xl font-bold ${
              timeLeftSeconds <= 300 ? "text-red-600 animate-pulse" : "text-yellow-500"
            }`}
          >
            Next Prayer: {nextPrayer}
          </h3>

          <div
            className={`text-4xl font-extrabold mt-1 ${
              timeLeftSeconds <= 300 ? "text-red-500 animate-pulse" : "text-yellow-400"
            }`}
          >
            {timeLeft}
          </div>

          <div className="w-full h-3 rounded-full mt-4 overflow-hidden border border-yellow-400 bg-yellow-200/40">
            <div
              className="h-3 rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(254,208,0,0.7)]"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #fef08a, #facc15, #eab308)",
              }}
            ></div>
          </div>
        </div>
      )}

      <h2 className="text-3xl lg:text-4xl font-bold text-indigo-800 mb-2 text-center">
        Prayer Times
      </h2>

      <p className="text-center text-gray-700 mb-8 max-w-xl">
        Keep track of your daily prayers easily. The timings adjust automatically based on your location.
      </p>

      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 shadow-2xl rounded-lg p-6 lg:p-10 w-full max-w-md flex flex-col items-center border border-indigo-500
                      transition-all duration-500 hover:scale-105">
        {timings && (
          <div className="w-full">
            <table className="w-full text-center table-auto">
              <thead>
                <tr className="border-b border-white/30">
                  {Object.keys(timings).map((prayer) => (
                    <th key={prayer} className="py-2 text-white">{prayer}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.entries(timings).map(([prayer, time]) => (
                    <td
                      key={prayer}
                      className={`py-2 font-semibold ${
                        currentPrayer === prayer ? "text-yellow-400" : "text-white"
                      }`}
                    >
                      {new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentPrayer && (
          <button
            onClick={stopAzaan}
            className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg
                       hover:bg-yellow-500 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Stop {currentPrayer} Azaan
          </button>
        )}
      </div>

      <div className="w-full max-w-5xl h-[2px] bg-indigo-200 mt-14"></div>

      <AzaanPlayer fajrAudio={fajrAudio} otherAudio={otherAudio} />
    </div>
  );
}

