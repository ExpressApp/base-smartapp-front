import dayjs from 'dayjs'
import { createSelector } from 'reselect'
import { ApplicationState } from '../../types'

// Generic types order: <State, Selector1, Selector2, ..., CurrentSelector>
export const getWeather = createSelector(
  [(state: ApplicationState) => state.ui.weather],
  weather => {
    return {
      ...weather,
      timestamp: dayjs.unix(parseInt(weather.dt || '0', 10)),
    }
  }
)

export const getTopLoader = createSelector(
  [(state: ApplicationState) => state.ui.topLoader],
  topLoader => topLoader
)

export const getMainLoader = createSelector(
  [(state: ApplicationState) => state.ui.mainLoader],
  mainLoader => mainLoader
)