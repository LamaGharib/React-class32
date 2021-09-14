import React from "react";
export const Form = ({ setCity, city, getCity, setError }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" && city.length < 3) {
      setError(true);
    } else {
      getCity(city);
      setError(false);
      setCity("");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="city"
        placeholder={"Search city"}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
