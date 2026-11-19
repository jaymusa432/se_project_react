// App = the page's outline. It holds data for now (weather + items)
// pulled from constants.js, filters it, and maps each item to an ItemCard.
// `map()` in React = "for each thing, render its card" — replaces your
// Spots forEach + appendChild loop.

import "./App.css";
import ItemCard from "./components/ItemCard";
import WeatherCard from "./components/WeatherCard";
import { weather, items } from "./utils/constants";
import getWeatherType from "./utils/getWeatherType";

function App() {
  // The judge decides the word; the filter picks clothes that match it.
  const todaysType = getWeatherType(weather.temperature);
  const todaysItems = items.filter((item) => item.weather === todaysType);

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__city">{weather.city}</h1>
        <h2 className="header__temp">Today: {weather.temperature}°F</h2>
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
