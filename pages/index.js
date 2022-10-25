import { useState, useEffect, useCallback } from "react";
import HomeContainer from "@/templates/HomeContainer";
import useCountries from "lib/hooks/useCountries";
import filterCountries from "utils/filterCountries";

const Home = () => {
  let debounce = null;

  const [regionSelect, setRegionSelect] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const dataCountries = useCountries(regionSelect);
  const { data, loading, error } = dataCountries;

  const onSearchHandler = useCallback((e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      setSearchValue(e.target.value);
    }, 800);
  }, []);

  const onChangeHandler = useCallback((e) => {
    setRegionSelect(e.target.value);
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      setDataFilter(filterCountries(data, searchValue));
    }
  }, [searchValue]);

  return (
    <HomeContainer
      data={searchValue == "" ? data : dataFilter}
      loading={loading}
      error={error}
      searchValue={searchValue}
      onChangeHandler={onChangeHandler}
      onSearchHandler={onSearchHandler}
    />
  );
};

export default Home;
