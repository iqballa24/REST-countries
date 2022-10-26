import React from "react";
import { filterRegion } from "constant";

const index = ({ onChangeHandler }) => {
  return (
    <div className="flex justify-center shadow-md shadow rounded-md px-1 dark:bg-dark-blue dark:shadow-sm">
      <select
        className="rounded-md text-xs p-4 sm:py-0 cursor-pointer dark:bg-dark-blue"
        defaultValue={""}
        onChange={(e) => onChangeHandler(e)}
      >
        <option value="">
          Filter By Region
        </option>
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
