import { takeEvery, call, all, put } from 'redux-saga/effects'
import { Weather } from '../../types'
import { loadWeatherActionType, loadWeatherSuccess, LOAD_WEATHER, setMainLoader } from '../actions/ui'

export function* exampleLoadWeatherSaga({ payload: { lat, long } }: loadWeatherActionType) {
  try {
    yield put(setMainLoader(true))
    const url =
      `https://api.openweathermap.org/data/2.5/` +
      `weather?lat=${lat}&lon=${long}&APPID=84c375472712a1a880ffba2edbc74476`

    const response: Response = yield call(fetch, url)
    // @ts-ignore
    const forecast = yield call(() => response.json())

    const weather: Weather = {
      main: forecast.weather[0].main,
      description: forecast.weather[0].description,
      dt: forecast.dt,
      name: forecast.name,
      temp: Math.ceil(parseFloat(forecast.main.temp) - 273.15),
    }

    yield put(loadWeatherSuccess(weather))
  } catch (e) {
    console.error('exampleLoadWeatherSaga error', e)
  } finally {
    yield put(setMainLoader(false))
  }
}

export function* rootUiSaga() {
  yield all([takeEvery(LOAD_WEATHER, exampleLoadWeatherSaga)])
}
