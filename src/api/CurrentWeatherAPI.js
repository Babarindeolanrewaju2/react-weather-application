const APPID = process.env.REACT_APP_WEATHER_APPID

export const currentWeather = (latitude, longitude) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APPID}`