// We only need to import the modules necessary for initial render
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
)

export default MainRouter
