import React from "react";

export default function PrayerTimes({ timings, stopAzaan, currentPrayer }) {
  const formatTime12 = (date) => {
    if (!date) return "--:--";
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <div
      id="prayer"
      className="mt-6 p-6 bg-white rounded-xl shadow-lg w-full max-w-md text-center"
    >
      <h2 className="text-2xl font-bold mb-4 text-green-700">Prayer Times</h2>

      <ul className="flex flex-col gap-3">
        {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => (
          <li
            key={prayer}
            className={`flex justify-between px-4 py-2 rounded-lg transition cursor-pointer ${
              currentPrayer === prayer
                ? "bg-green-200 font-bold"
                : "bg-green-50 hover:bg-green-100"
            }`}
            onClick={stopAzaan}
          >
            <span className="font-semibold">{prayer}</span>
            <span>{formatTime12(timings[prayer])}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}




