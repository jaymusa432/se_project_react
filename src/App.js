// App = the page's outline. It holds data for now (weather + items)
// pulled from constants.js, filters it, and maps each item to an ItemCard.
// `map()` in React = "for each thing, render its card" — replaces your
// Spots forEach + appendChild loop.

// App = the page's outline. Now with STATE: the degree unit lives in a state
// variable, and clicking the toggle button re-renders the page automatically.
// Compare vanilla: you had to find the DOM node and change its text by hand.
// In React you change the VARIABLE, and the screen follows.

import { useState } from "react";
import "./App.css";
import ItemCard from "./components/ItemCard";
import WeatherCard from "./components/WeatherCard";
import { weather, items } from "./utils/constants";
import getWeatherType from "./utils/getWeatherType";

function App() {
  // The judge decides the word; the filter picks clothes that match it.
  const todaysType = getWeatherType(weather.temperature);
  const todaysItems = items.filter((item) => item.weather === todaysType);

  // STATE: one variable, one setter. Changing it re-draws the page.
  const [unit, setUnit] = useState("F");
  const temp = unit === "F" ? weather.temperature : Math.round((weather.temperature - 32) * (5 / 9) * 10) / 10;

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__city">{weather.city}</h1>
        <h2 className="header__temp">Today: {temp}°{unit}</h2>
        <button className="unit-toggle" onClick={() => setUnit(unit === "F" ? "C" : "F")}>
          Show °{unit === "F" ? "C" : "F"}
        </button>
      </header>
      <main className="gallery">
        <WeatherCard temperature={weather.temperature} city={weather.city} />
        <ul className="cards">
          {todaysItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
