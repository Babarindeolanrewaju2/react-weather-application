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
    Promise.all([
      APIUtilits.getCurrentWeather(),
      APIUtilits.getIPGeoLocation(),
      APIUtilits.getForecast5d3h()
    ]).then(
      res => {
        this.setState({
          currentWeather: res[0],
          ipLocation: res[1],
          forecast5d3h: res[2]
        })
      }
    )
  }

  render() {
    const {
      currentWeather,
      ipLocation,
      forecast5d3h
    } = this.state

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
          temperature={temp}
          icon={weather && weather[0].icon}
          description={weather && weather[0].description}
        />
        <Forecast
          fiveForecast={list && list.slice(0, 5)}
        />
        <div className="navigation"></div>
      </div>
    )
  }
}
export default App