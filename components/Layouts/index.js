import React from "react";
import Navbar from "./Navbar";

const index = (props) => {
  return (
    <>
      <Navbar />
      <div className="px-3 sm:px-8 lg:px-20 pt-10">{props.children}</div>
    </>
  );
};

export default index;
