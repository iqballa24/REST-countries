import { useState } from "react";
// components
import Card from "@/components/Card";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import Layouts from "@/components/Layouts";
// custom hooks
import useCountries from "lib/hooks/useCountries";

const Home = () => {
  const { data, loading, error } = useCountries();
  console.log(loading)

  return (
    <Layouts>
      <div className="flex flex-col space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full space-y-5 sm:space-y-0">
          <div className="w-full">
            <Search />
          </div>
          <div className="flex justify-start sm:justify-end w-full">
            <Filter />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly md:justify-between w-full">
          {data.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>
    </Layouts>
  );
};

export default Home;
