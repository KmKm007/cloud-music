import React from 'react'
import PropTypes from 'prop-types'

const PlayerControllerBar = ({ isPlay, handlePlayerPause, handlePlayerPlay }) => {
  const playButtonUrl = require('@assets/imgs/player-play.png')
  const pauseButtonUrl = require('@assets/imgs/player-pause.png')
  const preButtonUrl = require('@assets/imgs/player-pre.png')
  const nextButtonUrl = require('@assets/imgs/player-next.png')
  const modeButtonUrl = require('@assets/imgs/player-mode.png')
  const listButtonUrl = require('@assets/imgs/player-list.png')
  return (
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
  )
}

PlayerControllerBar.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  handlePlayerPlay: PropTypes.func.isRequired,
  handlePlayerPause: PropTypes.func.isRequired
}

export default PlayerControllerBar
