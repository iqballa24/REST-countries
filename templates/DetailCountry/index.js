import React from "react";
import Layouts from "@/components/Layouts";
import ButtonBack from "@/components/Button/ButtonBack";
import DetailCard from "@/components/Card/DetailCard";

const index = () => {
  return (
    <Layouts title="tester">
      <ButtonBack />
      <DetailCard />
    </Layouts>
  );
};

export default index;
