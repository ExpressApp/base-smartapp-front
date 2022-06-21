import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import history from '../router'
import { ui } from './ui'
import { ApplicationState } from '../../types'

const rootReducer = combineReducers<ApplicationState>({
  ui,
  router: connectRouter(history),
})

export default rootReducer
