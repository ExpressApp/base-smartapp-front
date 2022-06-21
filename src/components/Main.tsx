import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { COORDS } from '../constants'
import { decrementCounter, incrementCounter, loadWeather } from '../redux/actions/ui'
import { getWeather } from '../redux/selectors/ui'
import '../styles/main.scss'
import { ApplicationState, GetWeatherSelectorResult } from '../types'
import MainLoader from './ui/main-loader/MainLoader'

export default function Main() {
  const dispatch = useDispatch()

  const weather = useSelector<ApplicationState, GetWeatherSelectorResult>(getWeather)
  const counter = useSelector<ApplicationState, number>(state => state.ui.exampleCounter)

  const handleLoadWeather = () => dispatch(loadWeather({ lat: COORDS.lat, long: COORDS.long }))
  const handleCounterPlus1 = () => dispatch(incrementCounter({ value: 1 }))
  const handleCounterMinus1 = () => dispatch(decrementCounter({ value: 1 }))
  const handleCounterPlus10 = () => dispatch(incrementCounter({ value: 10 }))
  const handleCounterMinus10 = () => dispatch(decrementCounter({ value: 10 }))

  return (
    <div className="App">
      <MainLoader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
        </h3>
        <h3>
          Counter example <code>{counter}</code>
        </h3>
        <div>
          <button className="App-button" onClick={handleCounterPlus1}>
            +1
          </button>
          <button className="App-button" onClick={handleCounterMinus1}>
            -1
          </button>
          <button className="App-button" onClick={handleCounterPlus10}>
            +10
          </button>
          <button className="App-button" onClick={handleCounterMinus10}>
            -10
          </button>
        </div>
        <h3>Fetch through redux-saga example</h3>
        <button className="App-button" onClick={handleLoadWeather}>
          Load weather
        </button>
        {weather.dt && (
          <code className="App-weather">
            <b>{weather.name}</b> [{weather.timestamp?.format('DD.MM.YYYY')}]<br/>
            {weather.temp}°C, {weather.main}, {weather.description}
          </code>
        )}
      </header>
    </div>
  )
}
