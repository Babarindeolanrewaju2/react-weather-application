import * as React from 'react'
import { connect } from 'react-redux'
import Location from '../components/Location'
import CurrentDate from '../components/CurrentDate'
import Tempertaure from '../components/Temperature'
import Forecast from '../components/Forecast3hour'
import Settings from '../components/Settings'
import Loading from "../components/Loading";
import './reset.scss'
import './index.scss'

function App({ currentWeather, ipLocation, forecast5d3h, isFetching }) {

  const { city, country_name } = ipLocation || {}
  const { list } = forecast5d3h || {}
  const { main: { temp } = {}, weather, dt } = currentWeather || {}

  return isFetching ? (
    <div className="app__container">
      <Settings />
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
  ) : <Loading />
}

export default connect(
  ({ ipLocation, forecast5d3h, currentWeather, isFetching }) => (
    {
      ipLocation,
      forecast5d3h,
      isFetching,
      currentWeather
    }
  )
)(App)