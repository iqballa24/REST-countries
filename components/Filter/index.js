import React from "react";
import { filterRegion } from "constant";

const index = ({ onChangeHandler }) => {
  return (
    <div className="bg-white flex justify-center shadow rounded-md px-1 dark:bg-dark-blue dark:shadow-sm">
      <div id="state" className="hidden">State:</div>
      <select
        className="rounded-md text-xs p-4 sm:py-0 cursor-pointer dark:bg-dark-blue"
        defaultValue={"default"}
        onChange={(e) => onChangeHandler(e)}
        aria-labelledby="state"
      >
        <option value="default" disabled>
          Filter By Region
        </option>
        <option value="">All</option>
        {filterRegion.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default index;
