import React from "react";
import Layouts from "@/components/Layouts";
import ButtonBack from "@/components/Button/ButtonBack";
import DetailCard from "@/components/Card/DetailCard";

const index = ({ data }) => {
  return (
    <Layouts title={data.name.common} icon={data.flags.svg}>
      <ButtonBack />
      <DetailCard data={data} />
    </Layouts>
  );
};

export default index;
