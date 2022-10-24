import React from "react";
import Search from "@/components/Search";
import Filter from "@/components/Filter";

const SectionFilter = ({ onSearchHandler }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full space-y-5 sm:space-y-0">
      <div className="w-full">
        <Search onSearchHandler={onSearchHandler} />
      </div>
      <div className="flex justify-start sm:justify-end w-full">
        <Filter />
      </div>
    </div>
  );
};

export default React.memo(SectionFilter);
