import React from 'react'
import cs from 'classnames'

class PlayerContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      process: 0
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        process: this.state.process + 1
      })
    }, 1000)
  }

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
              <div className="slider-fill" style={{width: `${this.state.process}%`}}/>
              <div className="slider-btn" style={{left: `${this.state.process}%`}}/>
            </div>
            <span>06:30</span>
          </div>
          <div className="control-bar">
            <div>
              <a
                href="javascript:void(0)"
                className="control-bar-button"
                style={{backgroundImage: `url(${modeButtonUrl})`}}
                onClick={handlePlayerPause}
              />
            </div>
            <div>
              <a
                href="javascript:void(0)"
                className="control-bar-button"
                style={{backgroundImage: `url(${preButtonUrl})`}}
              />
            </div>
            <div>
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
            </div>
            <div>
              <a
                href="javascript:void(0)"
                className="control-bar-button"
                style={{backgroundImage: `url(${nextButtonUrl})`}}
              />
            </div>
            <div>
              <a
                href="javascript:void(0)"
                className="control-bar-button"
                style={{backgroundImage: `url(${listButtonUrl})`}}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayerContent
