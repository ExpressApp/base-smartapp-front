import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Main'
import Page1 from './Page1'
import Page2 from './Page2'
import { ready } from '@unlimited/smartapp-sdk'

export default function App() {
  const [load, setLoad] = React.useState(true)

  useEffect(() => {
    if (load) {
      setLoad(false)

      ready()
    }
    
  }, [load])
  return (
    <Switch>
      <Route path="/page1">
        <Page1 />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  )
}
