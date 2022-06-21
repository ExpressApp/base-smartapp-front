import { Dayjs } from 'dayjs'
import { Weather } from './reducers'

export interface GetWeatherSelectorResult extends Weather {
  timestamp?: Dayjs
}
