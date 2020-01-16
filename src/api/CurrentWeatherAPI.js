const APPID = process.env.REACT_APP_WEATHER_APPID

const getCurrentWeather = (latitude, longitude) =>
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APPID}`)
        .then(response => response.json()
            .then(res => res)
        )
export default getCurrentWeather