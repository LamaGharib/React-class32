import React from "react";
export const Form = ({ setCity, city, getCity }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    getCity(city);
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
