const APPID = process.env.REACT_APP_WEATHER_APPID

export const currentWeather = (latitude, longitude, city) => {
    return city ?
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APPID}`
    :
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APPID}`
}