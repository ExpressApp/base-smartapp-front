import { RouterState } from 'connected-react-router'

export interface Weather {
  main: string | null
  description: string | null
  dt: string | null
  name: string | null
  temp: number | null
}

export interface UiState {
  exampleCounter: number
  weather: Weather
  topLoader: boolean
  mainLoader: boolean
}
export interface ApplicationState {
  ui: UiState
  router: RouterState
}
