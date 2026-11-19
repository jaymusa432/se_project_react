// The second component: shows today's weather in one block.
// Same idea as ItemCard: props go IN, what-it-looks-like comes OUT.

import getWeatherType from "../utils/getWeatherType";

function WeatherCard({ temperature, city }) {
  const type = getWeatherType(temperature);
  return (
    <div className="weather-card">
      <p className="weather-card__city">{city}</p>
      <p className="weather-card__temp">{temperature}°F</p>
      <p className="weather-card__type">Dress for: {type}</p>
    </div>
  );
}

export default WeatherCard;
