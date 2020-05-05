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

function App({ currentWeather, ipLocation, forecast5d3h, isFetching, dispatch, isShowSettings }) {

  const { city } = ipLocation || {}
  const { list } = forecast5d3h || {}
  const { main: { temp } = {}, weather, dt } = currentWeather || {}

  return isFetching ? (
    <div className="app__container">
      {/* <div className="wrap__icon">
        <span
          className="icon__gear"
          onClick={() => dispatch({ type: ACTIONS.SHOW_SETTINGS, payload: isShowSettings })}>
          &#x2699;
        </span>
      </div> */}
      <Settings
        dispatch={dispatch}
        isShowSettings={isShowSettings}
      />
      <div>
        <Location
          city={city}
          countryName={null}
        />
        <CurrentDate
          currentTime={dt}
        />
      </div>
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
  ({ ipLocation, forecast5d3h, currentWeather, isFetching, isShowSettings }) => (
    {
      ipLocation,
      forecast5d3h,
      isFetching,
      currentWeather,
      isShowSettings
    }
  )
)(App)