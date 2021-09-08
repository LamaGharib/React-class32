import React, { useState } from "react";

import { Form } from "./form";
import { City } from "./city";
function App() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({});
  // i dont know why my fetch is not returning a weather data i asked my classmates they have the same api but working fine, so i left the City component as it was from week1 but changed the the data source
  const getCity = async (city) => {
    try {
      const results = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WETHER_API_KEY}`
      );
      const data = await results.json();
      setCityData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1>WEATHER</h1>
      <Form city={city} setCity={setCity} getCity={getCity} />
      {Object.keys(cityData).length !== 0 ? (
        <City {...cityData} />
      ) : (
        <h3> Pleas inter a city name </h3>
      )}
    </>
  );
}

export default App;
