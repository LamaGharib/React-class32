import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Form } from "./form";
import { City } from "./City";
import CityDetails from "./CityDetails";

function App() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({});
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCity = async (city) => {
    try {
      setIsLoading(true);
      const results = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const data = await results.json();
      if (data.cod === "200") {
        setCityData(data);
        setCityList((cityList) => [data, ...cityList]);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>WEATHER</h1>
            <Form
              city={city}
              setCity={setCity}
              getCity={getCity}
              setError={setError}
            />
            {isLoading && <p>Loading...</p>}
            {error && <h3>You did not inter a city name </h3>}

            {Object.keys(cityData).length !== 0 ? (
              cityList.map((cityData, index) => (
                <City
                  cityData={cityData}
                  cityList={cityList}
                  setCityList={setCityList}
                  key={index}
                />
              ))
            ) : (
              <h3> Please inter a city name </h3>
            )}
          </Route>
          <Route path="/:id">
            <CityDetails cityData={cityData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
