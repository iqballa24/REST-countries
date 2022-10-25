import React from "react";
import Router from "next/router";
import { BsArrowLeft } from "react-icons/bs";

const ButtonBack = () => {
  return (
    <div
      className="bg-white shadow-md rounded-md w-fit cursor-pointer hover:bg-white/20 transition"
      onClick={() => Router.back()}
    >
      <div className="py-2 px-8 flex items-center font-semibold space-x-2">
        <BsArrowLeft />
        <p>Back</p>
      </div>
    </div>
  );
};

export default React.memo(ButtonBack);
