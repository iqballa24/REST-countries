import React from "react";

const TextDescription = ({ title, text }) => {
  return (
    <p className="text-sm font-semibold">
      {title}: <span className="font-normal">{text}</span>
    </p>
  );
};

const index = ({ data }) => {
  console.log(data);

  return (
    <div className="w-full flex flex-col max-w-[280px] mb-14 bg-white rounded-[5px] overflow-hidden">
      <img
        src={data.flags.png}
        alt={data.name.common}
        loading="lazy"
        className="h-40 w-full"
      />
      <div className="flex flex-col p-6 pb-10">
        <h1 className="text-base font-bold mb-3">{data.name.common}</h1>
        <div className="space-y-1">
          <TextDescription
            title="Population"
            text={data.population.toLocaleString()}
          />
          <TextDescription title="Region" text={data.region} />
          <TextDescription title="Capital" text={data.capital} />
        </div>
      </div>
    </div>
  );
};

export default index;
