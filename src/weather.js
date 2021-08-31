import axios from "axios";
import React, { useState } from "react";

import "./App.css";

export default function Weather() {
  const [target, setTarget] = useState("");
  const [stat, setStat] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "3df9e131e8591024e68199d14970d6c0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${target}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(renderStat);
  }

  function renderTarget(event) {
    setTarget(event.target.value);
  }

  function renderStat(response) {
    setLoaded(true);
    console.log(response.data);

    let iconToday = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setStat(
      <div>
        <h1>{response.data.name}</h1>

        <div className="row">
          <div className="col-3">
            <h1>{Math.round(response.data.main.temp)}°C</h1>
            <img src={iconToday} alt={response.data.weather[0].description} />
            <p>{response.data.weather[0].description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ul>
              <li>Humidity: {response.data.main.humidity}%</li>
              <li>Wind: {response.data.wind.speed}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  let form = (
    <div>
      <h1>All Around The World</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={renderTarget}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        {stat}
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
