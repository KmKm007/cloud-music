import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Router from '../routes'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router />
        </div>
      </Provider>
    )
  }
}

export default App
