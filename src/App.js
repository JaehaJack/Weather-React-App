import React from "react";
import Weather from "./weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <p>Open-sourced code by Jazmi C.</p>
      <p>
        <a link="https://github.com/JaehaJack/Weather-React-App">
          Github repository
        </a>
      </p>
    </div>
  );
}

export default App;
