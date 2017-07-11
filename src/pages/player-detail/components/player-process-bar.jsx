import React from 'react'
import PropTypes from 'prop-types'

class PlayerProcessBar extends React.Component {
  componentDidMount () {
    const slider = this.refs['slider-btn']
    slider.addEventListener('touchstart', () => {
    })
    slider.addEventListener('touchend', () => {
    })
  }

  static propTypes = {
    totalSeconds: PropTypes.number.isRequired,
    currentSeconds: PropTypes.number.isRequired,
    processPercentage: PropTypes.number.isRequired
  }

  render () {
    const { totalSeconds, currentSeconds, processPercentage } = this.props
    const second = totalSeconds % 60
    const minute = parseInt(totalSeconds / 60)
    const second2 = currentSeconds % 60
    const minute2 = parseInt(currentSeconds / 60)
    return (
      <div className="process-bar">
        <span>{`${minute2 < 10 ? ('0' + minute2) : ('' + minute2)}:${second2 < 10 ? ('0' + second2) : ('' + second2)}`}</span>
        <div className="process-control">
          <div className="slider-line" />
          <div className="slider-fill" style={{width: `${processPercentage}%`}}/>
          <div ref="slider-btn" className="slider-btn" style={{left: `${processPercentage}%`}}/>
        </div>
        <span>{`${minute < 10 ? ('0' + minute) : ('' + minute)}:${second < 10 ? ('0' + second) : ('' + second)}`}</span>
      </div>
    )
  }
}

export default PlayerProcessBar
