import React from "react";

export const City = (cityData) => {
  const cityName = cityData.city.name;
  const countryCode = cityData.city.country;
  const maxTemp = cityData.list[0].main.temp_max;
  const minTemp = cityData.list[0].main.temp_min;
  const weatherMain = cityData.list[0].weather[0].main;

  const weatherDescription = cityData.list[0].weather[0].description;
  const location = `${cityData.city.coord.lat}, ${cityData.city.coord.lon}`;

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
