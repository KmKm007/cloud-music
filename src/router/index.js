// We only need to import the modules necessary for initial render
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@pages/Home'
import Counter from '@pages/Counter'

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </Router>
)

export default MainRouter
