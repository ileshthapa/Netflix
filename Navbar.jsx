import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-black bg-opacity-80 text-white px-6 py-4 flex items-center justify-between fixed w-full z-10">
      <div className="navbar-left flex items-center space-x-6">
        <img className="h-10 w-" src="/assets/logo.png" alt="Netflix Logo" />
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center justify-center">
          <li className="cursor-pointer hover:text-red-500 transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">TV Shows</li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">Movies</li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">My List</li>
          <li className="cursor-pointer hover:text-red-500 transition duration-300">Browse By Language</li>
        </ul>
      </div>
      <div className="navbar-right flex items-center space-x-6">
        <img
          className="h-5 w-5 cursor-pointer hover:opacity-80"
          src="/assets/search_icon.svg"
          alt="Search Icon"
        />
        <p className="hidden md:block text-sm cursor-pointer hover:text-gray-300">
          Children
        </p>
        <div className="navbar-profile flex items-center space-x-2 cursor-pointer">
          <img
            className="h-8 w-6 rounded"
            src="/assets/profile_img.png"
            alt="Profile"
          />
          <img
            className="h-4 w-4"
            src="/assets/caret_icon.svg"
            alt="Caret Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
