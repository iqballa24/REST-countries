import React from "react";
import Router from "next/router";
import { BsArrowLeft } from "react-icons/bs";

const ButtonBack = () => {
  return (
    <div
      className="bg-white shadow-md rounded-sm w-fit cursor-pointer hover:bg-white/20 transition dark:bg-dark-blue dark:hover:bg-slate-700"
      onClick={() => Router.push('/')}
    >
      <div className="py-2 px-8 flex items-center space-x-2 hover:font-semibold">
        <BsArrowLeft />
        <p>Back</p>
      </div>
    </div>
  );
};

export default React.memo(ButtonBack);
