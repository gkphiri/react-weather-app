import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="mailto:kphiri68@gmail.com" target="_blank">
            Grace Phiri
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/gkphiri/react-weather-app.git"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://serene-faun-31cfe3.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
