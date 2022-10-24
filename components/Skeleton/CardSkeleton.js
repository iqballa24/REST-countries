import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full flex flex-col max-w-[280px] mb-14 bg-white rounded-[5px]">
      <div className="flex animate-pulse flex-row items-center h-40 justify-center space-x-5">
        <div className="bg-gray-300 h-full w-full "></div>
      </div>
      <div className="flex flex-col p-6 pb-10 animate-pulse">
        <div className="w-36 h-3 bg-gray-300 rounded-sm mb-8"></div>
        <div className="flex flex-col space-y-3">
          <div className="w-40 h-3 bg-gray-300 rounded-sm"></div>
          <div className="h-3 bg-gray-300 rounded-sm"></div>
          <div className="h-3 bg-gray-300 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
