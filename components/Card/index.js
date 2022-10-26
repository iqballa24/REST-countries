import React from "react";
import Link from "next/link";

const TextDescription = ({ title, text }) => {
  return (
    <p className="text-sm font-semibold">
      {title}: <span className="font-normal">{text}</span>
    </p>
  );
};

const index = ({ data }) => {
  return (
    <Link href={`/detail/${data.cca3}`}>
      <div className="w-full flex flex-col max-w-[280px] mb-14 bg-white dark:bg-dark-blue rounded-[5px] overflow-hidden cursor-pointer hover:shadow-lg">
        <img
          src={data.flags.png}
          alt={data.name.common}
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
    </Link>
  );
};

export default index;
