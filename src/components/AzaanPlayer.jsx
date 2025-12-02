
import React from "react";

export default function AzaanPlayer({ fajrAudio, otherAudio }) {
  return (
    <>
      <audio ref={fajrAudio} src="/azaan/fajr.mp3" preload="auto" />
      <audio ref={otherAudio} src="/azaan/other.mp3" preload="auto" />
    </>
  );
}


