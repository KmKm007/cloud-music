import React from 'react'
import cs from 'classnames'

class PlayerContent extends React.Component {
  render () {
    const { isPlay, handlePlayerPlay, handlePlayerPause } = this.props
    const cdWrapperImg = require('@assets/imgs/cd_wrapper.png')
    const cdWrapperCoverStyle = {
      backgroundImage: `url(${cdWrapperImg})`
    }
    const albumURL = 'http://p1.music.126.net/ivlCltZ5_PHSednttGmLBg==/926888302240122.jpg?param=500y500'
    const playButtonUrl = require('@assets/imgs/player-play.png')
    const pauseButtonUrl = require('@assets/imgs/player-pause.png')
    const preButtonUrl = require('@assets/imgs/player-pre.png')
    const nextButtonUrl = require('@assets/imgs/player-next.png')
    const modeButtonUrl = require('@assets/imgs/player-mode.png')
    const listButtonUrl = require('@assets/imgs/player-list.png')
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
          <div className="process-bar">
            <span>00:30</span>
            <div className="process-control">
              <div className="slider-line" />
              <div className="slider-fill" />
              <div className="slider-btn" />
            </div>
            <span>06:30</span>
          </div>
          <div className="control-bar">
            <a href="javascript:void(0)"
              className="control-bar-button"
              style={{backgroundImage: `url(${modeButtonUrl})`}}
              onClick={handlePlayerPause}
            />
            <a href="javascript:void(0)" className="control-bar-button" style={{backgroundImage: `url(${preButtonUrl})`}}></a>
            {
              isPlay
              ? (
                <a
                  href="javascript:void(0)"
                  className="control-bar-button"
                  style={{backgroundImage: `url(${pauseButtonUrl})`}}
                  onClick={handlePlayerPause}
                />
              )
              : (
                <a
                  href="javascript:void(0)"
                  className="control-bar-button"
                  style={{backgroundImage: `url(${playButtonUrl})`}}
                  onClick={handlePlayerPlay}
                />
              )
            }

            <a href="javascript:void(0)" className="control-bar-button" style={{backgroundImage: `url(${nextButtonUrl})`}}></a>
            <a href="javascript:void(0)" className="control-bar-button" style={{backgroundImage: `url(${listButtonUrl})`}}></a>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerContent
