import * as React from 'react'
import { connect } from 'react-redux'
import Location from '../components/Location'
import CurrentDate from '../components/CurrentDate'
import Tempertaure from '../components/Temperature'
import Forecast from '../components/Forecast3hour'
import './index.scss'

function App({ currentWeather, ipLocation, forecast5d3h, isFetching }) {

  const { city, country_name } = ipLocation || {}
  const { list } = forecast5d3h || {}
  const { main: { temp } = {}, weather, dt } = currentWeather || {}

  return isFetching ? (
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
  ) :
    <div className="app__load">
      <div className="load__wrap">
        <p className="load__text">Loading...</p>
        <div className="load__dot"></div>
        <div className="load__dot"></div>
        <div className="load__dot"></div>
      </div>
    </div>
}

function mapStateToProps(state) {
  const { fetchLoc } = state

  return {
    fetchLoc
  }
}

export default connect(mapStateToProps)(App)