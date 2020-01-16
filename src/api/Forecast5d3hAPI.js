const APPID = process.env.REACT_APP_WEATHER_APPID

const getForecast5d3h = (latitude, longitude) =>
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${APPID}`)
        .then(response => response.json())
export default getForecast5d3h