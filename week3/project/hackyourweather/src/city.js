import React from "react";
import { Link } from "react-router-dom";

export const City = ({ cityData, setCityList, cityList }) => {
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
          <button
            className="close"
            onClick={() => {
              setCityList(
                cityList.filter((city) => city.city.id !== cityData.city.id)
              );
            }}
          >
            X
          </button>
        </h2>

        <h3>{weatherMain}</h3>
        <span>{weatherDescription}</span>
        <p>minTemp: {minTemp}</p>
        <p>maxTemp: {maxTemp}</p>
        <p>location: {location}</p>
        <Link className="see-more" to="/{city.city.id}">
          <button>See More</button>
        </Link>
      </div>
      ;
    </>
  );
};
