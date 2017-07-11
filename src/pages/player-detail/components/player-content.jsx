import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import PlayerProcessBar from './player-process-bar'
import PlayerControllerBar from './player-control-bar'

class PlayerContent extends React.Component {
  static propTypes = {
    isPlay: PropTypes.bool.isRequired,
    currentSeconds: PropTypes.number.isRequired,
    totalSeconds: PropTypes.number.isRequired,
    processPercentage: PropTypes.number.isRequired,
    handlePlayerPlay: PropTypes.func.isRequired,
    handlePlayerPause: PropTypes.func.isRequired
  }

  render () {
    const { isPlay, currentSeconds, totalSeconds,
      processPercentage, handlePlayerPlay, handlePlayerPause } = this.props
    const cdWrapperImg = require('@assets/imgs/cd_wrapper.png')
    const cdWrapperCoverStyle = {
      backgroundImage: `url(${cdWrapperImg})`
    }
    const albumURL = 'http://p1.music.126.net/ivlCltZ5_PHSednttGmLBg==/926888302240122.jpg?param=500y500'
    return (
      <div className="player-content">
        <div className="player-effect">
          <div className="sticker">
            <img
              className={cs({
                'sticker-unhold': isPlay
              })}
              src={require('@assets/imgs/sticker.png')}
            />
          </div>
          <div className={
              cs({
                'cd-wrapper': true,
                'cd-rotate': isPlay
              })
            }>
            <div className="cd-wrapper-cover" style={cdWrapperCoverStyle}></div>
            <img className="cd-img" src={albumURL} />
          </div>
        </div>
        <div className="player-wrapper">
          <PlayerProcessBar
            totalSeconds={totalSeconds}
            currentSeconds={currentSeconds}
            processPercentage={processPercentage}
          />
          <PlayerControllerBar
            isPlay={isPlay}
            handlePlayerPlay={handlePlayerPlay}
            handlePlayerPause={handlePlayerPause}
          />
        </div>
      </div>
    )
  }
}

export default PlayerContent
