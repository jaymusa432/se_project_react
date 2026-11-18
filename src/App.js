// App = the page's outline. It holds data for now (weather + items)
// pulled from constants.js, filters it, and maps each item to an ItemCard.
// `map()` in React = "for each thing, render its card" — replaces your
// Spots forEach + appendChild loop.

import "./App.css";
import ItemCard from "./components/ItemCard";
import { weather, items } from "./utils/constants";

function App() {
  // Today's (mock) temperature decides which clothes to show.
  const todaysItems = items.filter((item) => item.weather === "hot");

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__city">{weather.city}</h1>
        <h2 className="header__temp">Today: {weather.temperature}°F</h2>
      </header>
      <main className="gallery">
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
