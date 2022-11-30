import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const index = ({ onSearchHandler }) => {
  return (
    <div className="relative w-full shadow rounded-md max-w-sm dark:bg-dark-blue dark:text-white">
      <span className="absolute text-sm text-dark-gray left-[15px] top-[18px] ">
        <MdOutlineSearch />
      </span>
      <input
        type="text"
        placeholder="Search for a country..."
        className="text-sm w-full p-4 pl-10 border-0 rounded-md dark:bg-dark-blue"
        onKeyUp={onSearchHandler}
      />
    </div>
  );
};

export default index;
