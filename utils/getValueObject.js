const getValueObject = (data) => {
  const valObject = [];
  for (const value in data) {
    valObject.push(data[value]);
  }

  return valObject;
};

export default getValueObject;
