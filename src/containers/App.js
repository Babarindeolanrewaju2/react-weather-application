import * as React from 'react'

import Location from '../components/Location'
import CurrentDate from '../components/CurrentDate'
import Tempertaure from '../components/Temperature'
import Forecast from '../components/Forecast3hour'
import APIUtilits from '../api/APIUtils'
import './index.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWeather: {},
      ipLocation: {},
      forecast5d3h: {}
    }
  }

  componentDidMount() {
    APIUtilits.getIPGeoLocation()
      .then(res => {
        Promise.all([
          APIUtilits.getIPGeoLocation(),
          APIUtilits.getForecast5d3h(res.latitude, res.longitude),
          APIUtilits.getCurrentWeather(res.latitude, res.longitude)
        ])
          .then(res => {
            this.setState({
              ipLocation: res[0],
              forecast5d3h: res[1],
              currentWeather: res[2]
            })
          })
      })
  }

  render() {
    const { currentWeather, ipLocation, forecast5d3h } = this.state

    const { city, country_name } = ipLocation
    const { list } = forecast5d3h
    const { main: { temp } = {}, weather, dt } = currentWeather

    return (
      <div className="app__container">
        <Location
          city={city}
          countryName={country_name}
        />
        <CurrentDate
          currentTime={dt}
        />
        <Tempertaure
          temperature={temp && temp}
          icon={weather && weather[0].icon}
          description={weather && weather[0].description}
        />
        <Forecast
          fiveForecast={list && list.slice(0, 5)}
        />
      </div>
    )
  }
}
export default App