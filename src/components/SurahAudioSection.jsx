import React, { useState, useEffect, useRef } from "react";


const surahList = [
  { name: "Al-Fatihah", audio: "/surah/01.mp3" },
  { name: "An-Nas", audio: "/surah/02.mp3" },
  { name: "Al-Falaq", audio: "/surah/03.mp3" },
  { name: "Al-Ikhlas", audio: "/surah/04.mp3" },
  { name: "An-Nasr", audio: "/surah/05.mp3" },
  { name: "Al-Masadd", audio: "/surah/06.mp3" },
  { name: "Al-Kafiroon", audio: "/surah/07.mp3" },
  { name: "Al-Kauther", audio: "/surah/08.mp3" },
 
  { name: "Al-Maun", audio: "/surah/10.mp3" },
  { name: "Quraish", audio: "/surah/11.mp3" },
  { name: "Al-Humaza", audio: "/surah/12.mp3" },
  { name: "Al-Asr", audio: "/surah/13.mp3" },
  { name: "Al-Qaria", audio: "/surah/14.mp3" },
  { name: "Al-Adiyat", audio: "/surah/15.mp3" },
  { name: "Az-Zalzala", audio: "/surah/16.mp3" },
 
  { name: "Al-Qadr", audio: "/surah/18.mp3" },
  { name: "Al-Alaq", audio: "/surah/19.mp3" },
  { name: "At-Tin", audio: "/surah/20.mp3" },
  { name: "Al-Inshirah", audio: "/surah/21.mp3" },
  { name: "Ad-Dhuha", audio: "/surah/22.mp3" },
  { name: "Al-Lail", audio: "/surah/23.mp3" },
  { name: "Ash-Shams", audio: "/surah/24.mp3" },
  { name: "Al-Balad", audio: "/surah/25.mp3" },
  { name: "Al-Fajr", audio: "/surah/26.mp3" },
  { name: "Al-Ghashiya", audio: "/surah/27.mp3" },
  { name: "Al-Ala", audio: "/surah/28.mp3" },
  { name: "At-Tariq", audio: "/surah/29.mp3" },
  { name: "Al-Burooj", audio: "/surah/30.mp3" },
  { name: "Al-Inshiqaq", audio: "/surah/31.mp3" },
  { name: "Al-Mutaffifin", audio: "/surah/32.mp3" },
  { name: "Al-Infitar", audio: "/surah/33.mp3" },
  { name: "At-Takwir", audio: "/surah/34.mp3" },
  { name: "Abasa", audio: "/surah/35.mp3" },
  { name: "An-Naziat", audio: "/surah/36.mp3" },
  { name: "An-Naba", audio: "/surah/37.mp3" },
  
];

export default function SurahAudioSection() {
  const [search, setSearch] = useState("");
  const [currentSurah, setCurrentSurah] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const pageSize = 6; 

  const audioRef = useRef(new Audio());
  const progressBarRef = useRef(null);

  const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");

  
  const filteredSurahs = surahList.filter((surah) =>
    normalize(surah.name).includes(normalize(search))
  );

  const totalPages = Math.ceil(filteredSurahs.length / pageSize);

  const paginatedSurahs = filteredSurahs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const formatTime = (time) => {
    const mins = Math.floor(time / 60).toString().padStart(2, "0");
    const secs = Math.floor(time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const playPauseSurah = (surah) => {
  
    setSearch("");

    if (currentSurah?.name === surah.name && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentSurah?.name !== surah.name) {
        audioRef.current.src = surah.audio;
        audioRef.current.currentTime = 0;
      }
      audioRef.current.play();
      setCurrentSurah(surah);
      setIsPlaying(true);
    }
  };

  const updateProgressFromPosition = (clientX) => {
    if (!progressBarRef.current || !audioRef.current.duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const newProgress = (pos / rect.width) * 100;
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgressFromPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) updateProgressFromPosition(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleProgressClick = (e) => updateProgressFromPosition(e.clientX);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration && !isDragging) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
    audioRef.current.addEventListener("ended", handleEnded);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgress);
      audioRef.current.removeEventListener("ended", handleEnded);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4 lg:px-0">
      <h2 className="text-3xl lg:text-4xl font-bold text-indigo-800 text-center mb-4">Surah</h2>

     
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search Surah..."
          className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-md"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

     
      <div className="space-y-4">
        {paginatedSurahs.length > 0 ? (
          paginatedSurahs.map((surah, idx) => {
            const isCurrent = currentSurah?.name === surah.name;
            return (
              <div
                key={idx}
                className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 rounded-xl border border-gray-700 bg-gray-400/20 hover:bg-gray-500/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-semibold text-lg text-indigo-800 mb-2 md:mb-0 flex-shrink-0">
                  {surah.name}
                </span>

                
                <div className="flex-1 flex items-center mx-4 min-w-0">
                  <div
                    ref={progressBarRef}
                    onClick={handleProgressClick}
                    className="flex-1 h-2 rounded-full bg-gray-700/30 relative cursor-pointer"
                  >
                    {isCurrent && (
                      <>
                        <div
                          className="absolute h-2 rounded-full left-0 top-0"
                          style={{
                            width: `${progress}%`,
                            background: "linear-gradient(90deg, #fef08a, #facc15, #fef08a)",
                            transition: isDragging ? "none" : "width 0.1s linear",
                          }}
                        ></div>
                        <div
                          onMouseDown={handleMouseDown}
                          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-400 shadow-lg cursor-pointer"
                          style={{
                            left: `calc(${progress}% - 8px)`,
                            transition: isDragging ? "none" : "left 0.1s linear",
                          }}
                        ></div>
                      </>
                    )}
                  </div>

                  {isCurrent && (
                    <span className="ml-3 text-sm text-gray-800 font-mono whitespace-nowrap">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  )}
                </div>

              
                <button
                  onClick={() => playPauseSurah(surah)}
                  className={`px-4 py-1 rounded-full font-medium shadow-md transition duration-300 flex-shrink-0 ${
                    isCurrent && isPlaying
                      ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-500"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {isCurrent && isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-400">No Surah found.</p>
        )}
      </div>

      
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}




