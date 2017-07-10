// We only need to import the modules necessary for initial render
import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { CounterRoute, PlayerRoute } from './routes'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/counter" component={CounterRoute} />
      <Route path="/player" component={PlayerRoute} />
      <Redirect from="/" to="player" />
    </Switch>
  </Router>
)

export default MainRouter
