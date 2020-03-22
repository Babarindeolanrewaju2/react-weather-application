
import { take, put, call, fork, all } from 'redux-saga/effects'
import APIUtilits from '../api/APIUtils'
import * as ACTIONS from '../actions'

const api = (url) => fetch(url).then(response => response.json())

function* fetchLocation(action) {
  try {
    const ipLocation = yield call(api, APIUtilits.IPGeoLocation())
    yield put({ type: ACTIONS.FETCH_LOCACTION_SUCCESS, data: ipLocation })
    yield call(fetchCurrentWeather, ipLocation.latitude, ipLocation.longitude)
    yield call(fetchForecast5day3hour, ipLocation.latitude, ipLocation.longitude)
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_ERROR, error });
  }
}


function* fetchForecast5day3hour(latitude = 35.6586, longitude = 139.7454) {
  try {
    const forecast5day3hour = yield call(api, APIUtilits.forecast5d3h(latitude, longitude))
    yield put({ type: ACTIONS.FETCH_5DAY3HOUR_SUCCESS, data: forecast5day3hour })
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_ERROR, error });
  }
}


function* fetchCurrentWeather(latitude = 35.6586, longitude = 139.7454) {
  try {
    const currentWeather = yield call(api, APIUtilits.currentWeather(latitude, longitude))
    yield put({ type: ACTIONS.FETCH_CURRENT_WEATHER_SUCCESS, data: currentWeather })
  } catch (error) {
    yield put({ type: ACTIONS.FETCH_ERROR, error });
  }
}

export function* startup() {
  yield call(fetchLocation)
}

 export default function* root() {
   yield fork(startup)
 }