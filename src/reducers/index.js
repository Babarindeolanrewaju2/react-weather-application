import * as ACTIONS from '../actions'

const initialState = {
  isFetching: false,
  isShowSettings: false,
  ipLocation: {},
  currentWeather : {},
  forecast5d3h : {}
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_LOCACTION_SUCCESS:
      return {
        ...state,
        ipLocation: action.data,
      }
    case ACTIONS.FETCH_5DAY3HOUR_SUCCESS:
      return {
        ...state,
        forecast5d3h: action.data,
      }
    case ACTIONS.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: action.data,
        isFetching: true
      }
      case ACTIONS.SHOW_SETTINGS:
        return {
          ...state,
          isShowSettings: !action.payload
        }
    default:
      return state
  }
}