import React from "react";
import Card from "@/components/Card";
import CardSkeleton from "@/components/Skeleton/CardSkeleton";

const ErrorState = () => {
  return (
    <div className="flex flex-col items-center text-center w-full mt-20">
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

const SectionListCountries = ({ data, loading, error }) => {
  return (
    <div className="flex flex-wrap justify-evenly md:justify-between w-full">
      {loading
        ? Array(8)
            .fill(8)
            .map((value, index) => <CardSkeleton key={index} />)
        : data.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
      {error.status && <ErrorState />}
    </div>
  );
};

export default React.memo(SectionListCountries);
