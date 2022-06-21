import { all, fork } from 'redux-saga/effects'
import { rootUiSaga } from './ui'

function* rootSaga() {
  yield all([
    fork(rootUiSaga),
  ])
}

export default rootSaga
