import { handleActions } from 'redux-actions'
import { UiState } from '../../types'
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementCounterActionType,
  decrementCounterActionType,
  LOAD_WEATHER_SUCCESS,
  loadWeatherSuccessActionType,
  setMainLoaderActionType,
  setTopLoaderActionType,
  SET_MAIN_LOADER,
  SET_TOP_LOADER,
} from '../actions/ui'

const initialState: UiState = {
  exampleCounter: 10,
  weather: {
    main: null,
    description: null,
    dt: null,
    name: null,
    temp: null,
  },
  topLoader: false,
  mainLoader: false,
}

const reducers = {
  [INCREMENT_COUNTER]: (state: UiState, { payload: { value } }: incrementCounterActionType): UiState => {
    return { ...state, exampleCounter: state.exampleCounter + value }
  },
  [DECREMENT_COUNTER]: (state: UiState, { payload: { value } }: decrementCounterActionType): UiState => {
    return { ...state, exampleCounter: state.exampleCounter - value }
  },
  [LOAD_WEATHER_SUCCESS]: (state: UiState, { payload: weather }: loadWeatherSuccessActionType): UiState => {
    return { ...state, weather: { ...weather } }
  },
  [SET_TOP_LOADER]: (state: UiState, { payload: topLoader }: setTopLoaderActionType): UiState => {
    return {
      ...state,
      topLoader,
    }
  },
  [SET_MAIN_LOADER]: (state: UiState, { payload: mainLoader }: setMainLoaderActionType): UiState => {
    return {
      ...state,
      mainLoader,
    }
  }
}

export const ui = handleActions<UiState, any>(reducers, initialState)
