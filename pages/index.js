import { useState, useEffect, useCallback } from "react";
import HomeContainer from "@/templates/HomeContainer";
import useCountries from "lib/hooks/useCountries";
import filterCountries from "utils/filterCountries";

const Home = () => {
  let debounce = null;
  const [searchValue, setSearchValue] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const dataCountries = useCountries(searchValue);
  const { data, loading, error } = dataCountries;

  console.log(data);

  const onSearchHandler = useCallback((e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      setSearchValue(e.target.value);
    }, 800);
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
      onSearchHandler={onSearchHandler}
    />
  );
};

export default Home;
