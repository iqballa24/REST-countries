import React from "react";
import ButtonTag from "@/components/Button/ButtonTag";
import getValueObject from "utils/getValueObject";

const DetailCard = ({ data }) => {
  const { name, symbol } = Object.entries(data.currencies)[0][1];
  const languages = getValueObject(data.languages).join(", ");

  console.log(data.borders[0]);

  return (
    <div className="flex flex-row flex-wrap mt-16">
      <div className="w-full md:w-6/12 md:pr-10 self-center">
        <img src={data.flags.svg} className="h-max" alt={data.name.common} />
      </div>
      <div className="w-full md:w-6/12 md:pl-10 self-center">
        <h1 className="text-xl sm:text-2xl font-bold pt-10 pb-5 md:pt-0">
          {data.name.common}
        </h1>
        <div className="flex flex-wrap space-y-12 lg:space-y-0">
          <div className="w-full lg:w-6/12 space-y-3">
            <p className="text-sm font-semibold">
              Native Name:{" "}
              <span className="font-normal">{data.name.common}</span>
            </p>
            <p className="text-sm font-semibold">
              Population:{" "}
              <span className="font-normal">
                {data.population.toLocaleString()}
              </span>
            </p>
            <p className="text-sm font-semibold">
              Region: <span className="font-normal">{data.region}</span>
            </p>
            <p className="text-sm font-semibold">
              Sub Region: <span className="font-normal">{data.subregion}</span>
            </p>
            <p className="text-sm font-semibold">
              Capital: <span className="font-normal">{data.capital}</span>
            </p>
          </div>
          <div className="w-full lg:w-6/12 space-y-3">
            <p className="text-sm font-semibold">
              Top Level Domain: <span className="font-normal">{data.tld}</span>
            </p>
            <p className="text-sm font-semibold">
              Currencies:{" "}
              <span className="font-normal">
                {name} ({symbol})
              </span>
            </p>
            <p className="text-sm font-semibold">
              Languages: <span className="font-normal">{languages}</span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-wrap flex-row mt-12 items-center space-y-2">
          <h1 className="text-sm font-bold mr-2 w-full md:w-fit">
            Border Countries:
          </h1>
          {data.borders.map((item, index) => (
            <ButtonTag data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
