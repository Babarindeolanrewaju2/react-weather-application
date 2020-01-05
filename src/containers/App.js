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
      currentWeather: { main: { temp } = {}, weather, dt },
      forecast5d3h: { list },
      ipLocation
    } = this.state

    return (
      <div className="app__container">
        <Location
          loc={ipLocation}
        />
        <CurrentDate
          currentTime={dt}
        />
        <Tempertaure
          temperature={temp}
          weather={weather}
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