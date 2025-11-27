export const getPrayerTimes = async (city, country) => {
  const response = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`
  );
  const data = await response.json();
  return data.data.timings;
};

export const getPrayerTimesByCoords = async (lat, lng) => {
  const response = await fetch(
    `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=2`
  );
  const data = await response.json();
  return data.data.timings;
};

  