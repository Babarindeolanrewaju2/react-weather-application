import * as ACTIONS from '../actions'

const initialState = {
  isFetching: false,
  isShowSettings: true,
  ipLocation: {},
  currentWeather : {},
  forecast5d3h : {},
  currentLocation: ''
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.FETCH_LOCACTION_SUCCESS:
      return {
        ...state,
        ipLocation: action.data
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
        currentLocation: action.data.name,
        isFetching: true
      }
      case ACTIONS.SHOW_SETTINGS:
        return {
          ...state,
          isShowSettings: !action.payload
        }
      case ACTIONS.UPATE_LOCATION:
        return {
          ...state,
          currentLocation: action.payload.currentLocation
        }
        case ACTIONS.FECTCH_NEW_LOCATION:
          return {
            ...state,
          }
    default:
      return state
  }
}