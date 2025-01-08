import React, { useRef } from "react";
import Bgvid from "../images/Bgvid.mp4";

const Home = () => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= 54) {
      video.currentTime = 0; // Restart video
      video.play(); // Play from the beginning
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={Bgvid}
        className="absolute top-0 left-0 w-full h-full object-cover"
        playsInline
        autoPlay
        muted
        loop={false}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center p-6 bg-green-950 bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400  mb-4">
          <i>Trendy Nails Spot</i>
        </h1>
        <p className="text-white text-md md:text-x2">
        Discover a world of nail artistry.<br/> Our skilled technicians are passionate about creating custom trendy design.<br/> <i className="bg-yellow-100 text-black text-lg">Home Of Arts</i>
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-lg hover:bg-green-900 transition">
          <a href="#service">Explore Services</a>
        </button>
      </div>
    </section>
  );
};

export default Home;
