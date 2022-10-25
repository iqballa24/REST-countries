import React from "react";
import { filterRegion } from "constant";

const index = ({ onChangeHandler }) => {
  return (
    <div className="flex justify-center shadow-md shadow-slate-100 rounded-md bg-white px-1">
      <select
        className="rounded-md text-xs font-semibold p-4 sm:py-0 cursor-pointer"
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
