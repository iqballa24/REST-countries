import React from 'react';

const ErrorState = () => {
  return (
    <div className="flex flex-col items-center text-center w-full mt-10">
      <h1 className="text-base sm:text-lg font-bold mb-2">Oopps..</h1>
      <p className="text-sm sm:text-base font-normal">
        Something when wrong, we failed to get the page.
      </p>
      <p className="text-sm sm:text-base font-normal">
        You may also refresh the page or try again later.
      </p>
    </div>
  );
};

export default ErrorState;
