import React from "react";
import Layouts from "@/components/Layouts";
import SectionFilter from "./SectionFilter";
import SectionListCountries from "./SectionListCountries";

const Container = (props) => {
  return <div className="flex flex-col space-y-10">{props.children}</div>;
};

const HomeContainer = ({
  data,
  loading,
  error,
  searchValue,
  onChangeHandler,
  onSearchHandler,
}) => {
  return (
    <Layouts title="Where in the world?">
      <Container>
        <SectionFilter
          onSearchHandler={onSearchHandler}
          onChangeHandler={onChangeHandler}
        />
        <SectionListCountries
          data={data}
          loading={loading}
          error={error}
          searchValue={searchValue}
        />
      </Container>
    </Layouts>
  );
};

export default HomeContainer;
