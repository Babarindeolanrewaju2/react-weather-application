const APPID = process.env.REACT_APP_WEATHER_APPID

export const forecast5d3h = (latitude, longitude) => `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${APPID}`