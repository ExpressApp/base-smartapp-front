import { createAction } from 'redux-actions'
import { Weather } from '../../types'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const LOAD_WEATHER = 'LOAD_WEATHER'
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS'
export const SET_TOP_LOADER = 'SET_TOP_LOADER'
export const SET_MAIN_LOADER = 'SET_MAIN_LOADER'

export const incrementCounter = createAction(INCREMENT_COUNTER, ({ value }: { value: number }) => ({ value }))
export const decrementCounter = createAction(DECREMENT_COUNTER, ({ value }: { value: number }) => ({ value }))
export const loadWeather = createAction(LOAD_WEATHER, ({ lat, long }: { lat: number; long: number }) => ({ lat, long }))
export const loadWeatherSuccess = createAction(LOAD_WEATHER_SUCCESS, (weather: Weather) => weather)
export const setTopLoader = createAction(SET_TOP_LOADER, (topLoader: boolean) => topLoader)
export const setMainLoader = createAction(SET_MAIN_LOADER, (mainLoader: boolean) => mainLoader)

export type incrementCounterActionType = ReturnType<typeof incrementCounter>
export type decrementCounterActionType = ReturnType<typeof decrementCounter>
export type loadWeatherActionType = ReturnType<typeof loadWeather>
export type loadWeatherSuccessActionType = ReturnType<typeof loadWeatherSuccess>
export type setTopLoaderActionType = ReturnType<typeof setTopLoader>
export type setMainLoaderActionType = ReturnType<typeof setMainLoader>