// A tiny "judge" that turns a temperature into a word.
// The clothing items already wear these words (hot/warm/cold), so the app can
// match them together in one step: the data and the decision use the same names.

function getWeatherType(temperatureF) {
  if (temperatureF >= 75) return "hot";
  if (temperatureF >= 55) return "warm";
  return "cold";
}

export default getWeatherType;
