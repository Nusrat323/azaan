import React, { useEffect, useState } from "react";

export default function LiveClock({ timezone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: timezone,
  };

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timezone,
  };

  return (
    <div className="text-center my-4">
      <div className="text-2xl font-bold text-green-800">
        {time.toLocaleTimeString([], timeOptions)}
      </div>
      <div className="text-green-700">
        {time.toLocaleDateString([], dateOptions)}
      </div>
    </div>
  );
}


