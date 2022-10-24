const filterCountries = (data, searchValue) => {
  const filterData = data.filter((item) => {
    const nameCountry = item.name.common.toLowerCase();
    return nameCountry.includes(searchValue.toLowerCase());
  });

  return filterData
};

export default filterCountries;
