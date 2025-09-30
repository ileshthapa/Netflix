import React from "react";
import Navbar from "./Navbar";
// import Titlecard from "../Pages/Titlecard";

const Home = () => {
  return (
    <div className="relative bg-black h-screen w-screen">
      <Navbar />

      <div className="relative h-full">
        {/* Background Image */}
        <img
          src="/assets/hero_banner.jpg"
          alt="Hero Banner"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        {/* Hero Content */}
        <div className="absolute bottom-32 left-10 text-white space-y-6">
          <img
            src="/assets/hero_title.png"
            alt="Hero Title"
            className="w-1/2"
          />

          <p className="text-lg max-w-md">
            Discovering his ties, the heroes want to conquer the world for his
            lover. <br />
            He is ready to sacrifice his life too...
          </p>

          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition">
              Play
            </button>
            <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-600 transition">
              More Info
            </button>
          </div>
        {/* <Titlecard/> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
