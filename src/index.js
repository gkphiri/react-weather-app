import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>React Weather App</h1>
      <WeatherSearch />
    </div>
    <br />
    <footer>
      This project was coded by <a href="mailto:kphiri68">Grace Phiri</a> and is{" "}
      <a href="https://github.com/gkphiri/react-weather-app.git">
        open-sourced on GitHub
      </a>
      and hosted on
      <a href="https://serene-faun-31cfe3.netlify.app/">Netlify</a>
    </footer>
  </StrictMode>
);
