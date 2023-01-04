import React from 'react';

const EmptyState = ({ country }) => {
  return (
    <div className="flex flex-col items-center text-center w-full mt-10">
      <h1 className="text-base sm:text-lg font-bold mb-2">
        Keyword "{country}" is not found!
      </h1>
      <p className="text-sm sm:text-base font-normal">
        Try another keyword or change to another region
      </p>
    </div>
  );
};

export default EmptyState;
