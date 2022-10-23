import React from "react";
import ButtonTag from "@/components/Button/ButtonTag";

const DetailCard = () => {
  return (
    <div className="flex flex-row flex-wrap mt-16">
      <div className="w-full md:w-6/12 md:pr-10 self-center">
        <div className="h-72 bg-gray-400"></div>
      </div>
      <div className="w-full md:w-6/12 md:pl-10 self-center">
        <h1 className="text-xl sm:text-2xl font-bold pt-10 pb-5 md:pt-0">
          Brazil
        </h1>
        <div className="flex flex-wrap space-y-12 lg:space-y-0">
          <div className="w-full lg:w-6/12 space-y-3">
            <p className="text-sm font-semibold">
              Native Name: <span className="font-normal">Belgium</span>
            </p>
            <p className="text-sm font-semibold">
              Population: <span className="font-normal">11,319,511</span>
            </p>
            <p className="text-sm font-semibold">
              Region: <span className="font-normal">Europe</span>
            </p>
            <p className="text-sm font-semibold">
              Sub Region: <span className="font-normal">Western Europe</span>
            </p>
            <p className="text-sm font-semibold">
              Capital: <span className="font-normal">Brussels</span>
            </p>
          </div>
          <div className="w-full lg:w-6/12 space-y-3">
            <p className="text-sm font-semibold">
              Top Level Domain: <span className="font-normal">Be</span>
            </p>
            <p className="text-sm font-semibold">
              Currencies: <span className="font-normal">Euro</span>
            </p>
            <p className="text-sm font-semibold">
              Languages:{" "}
              <span className="font-normal">Dutch, French, Germany</span>
            </p>
          </div>
          <div className="w-full flex flex-wrap flex-col md:flex-row lg:!mt-12 md:items-center">
            <h1 className="text-sm font-bold mr-2">Border Countries: </h1>
            <ButtonTag countrie="Indonesia"/>
            <ButtonTag countrie="Indonesia"/>
            <ButtonTag countrie="Indonesia"/>
            <ButtonTag countrie="Indonesia"/>
            <ButtonTag countrie="Indonesia"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
