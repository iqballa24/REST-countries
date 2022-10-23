import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white border-2 border-bg-light-gray drop-shadow-sm px-3 sm:px-8 lg:px-20 py-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-base sm:text-lg lg:text-xl text-dark-blue font-bold">
          Where in the world?
        </h1>
        <div className="flex flex-row items-center cursor-pointer">
          <MdOutlineDarkMode />
          <p className="text-sm text-dark-blue font-semibold pl-1">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
