
import React from "react";
import fajrSound from "../assets/fajr.mp4";
import otherSound from "../assets/other.mp3";

export default function AzaanPlayer({ fajrAudio, otherAudio }) {
  return (
    <>
      <audio ref={fajrAudio} src={fajrSound} preload="auto" />
      <audio ref={otherAudio} src={otherSound} preload="auto" />
    </>
  );
}


