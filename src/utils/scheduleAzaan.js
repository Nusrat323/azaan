export const scheduleAzaan = (timings, playAzaan) => {
  const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  prayers.forEach((prayer) => {
    const prayerTime = timings[prayer];
    if (!prayerTime) return;

    const now = new Date();
    let diff = prayerTime.getTime() - now.getTime();

    if (diff < 0) diff += 24 * 60 * 60 * 1000;

    setTimeout(() => {
      console.log(`Playing Azaan for ${prayer} at ${prayerTime.toLocaleTimeString()}`);
      playAzaan(prayer);
    }, diff);
  });
};
