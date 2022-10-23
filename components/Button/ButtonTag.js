import React from "react";

const ButtonTag = (props) => {
  return (
    <div className="bg-white shadow-sm rounded-sm h-fit cursor-pointer mr-2">
      <p className="py-1 px-5 flex items-center space-x-2 text-xs">
        {props.countrie}
      </p>
    </div>
  );
};

export default ButtonTag;
