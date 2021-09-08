import React from "react";

export const City = ({ city }) => {
  const cityName = city.name;
  const countryCode = city.sys.country;
  const maxTemp = city.main.temp_max;
  const minTemp = city.main.temp_min;
  const weatherMain = city.weather[0].main;
  const weatherDescription = city.weather[0].description;
  const location = `${city.coord.lat}, $
    {city.coord.lon}`;
  return (
    <>
      <div className="city">
        <h2>
          {cityName},{countryCode}
        </h2>
        <h3>{weatherMain}</h3>
        <p>{weatherDescription}</p>
        <p>minTemp: {minTemp}</p>
        <p>maxTemp: {maxTemp}</p>
        <p>location: {location}</p>
      </div>
      ;
    </>
  );
};
