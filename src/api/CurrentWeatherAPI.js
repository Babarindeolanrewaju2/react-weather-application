const APPID = process.env.REACT_APP_WEATHER_APPID

const getCurrentWeather = (latitude = 25, longitude = 121) =>
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APPID}`)
        .then(response => response.json()
        .then(res => res)
    )
export default getCurrentWeather