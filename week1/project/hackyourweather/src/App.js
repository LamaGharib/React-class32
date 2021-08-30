import React from "react";
import cities from "./city-weather.json";
const City = () => {
  return (
    <>
      {cities.map((city, index) => {
        const cityName = city.name;
        const countryCode = city.sys.country;
        const maxTemp = city.main.temp_max;
        const minTemp = city.main.temp_min;
        const weatherMain = city.weather[0].main;
        const weatherDescription = city.weather[0].description;
        const location = `${city.coord.lat}, ${city.coord.lon}`;
        return (
          <div key={index} className="city">
            <h2>
              {cityName},{countryCode}
            </h2>
            <h3>{weatherMain}</h3>
            <p>{weatherDescription}</p>
            <p>minTemp: {minTemp}</p>
            <p>maxTemp: {maxTemp}</p>
            <p>location: {location}</p>
          </div>
        );
      })}
    </>
  );
};
function App() {
  return (
    <>
      <h1>WEATHER</h1>
      <City />
    </>
  );
}

export default App;
