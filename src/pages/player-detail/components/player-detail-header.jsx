import React from 'react'
import PropTypes from 'prop-types'

const PlayerDetailHeader = ({ songName, handleGoBack }) => {
  return (
    <div className="player-detail-header">
      <div className="go-back">
        <span>&lt;</span>
      </div>
      <div className="song-name">
        <span>{songName}</span>
      </div>
    </div>
  )
}

PlayerDetailHeader.propTypes = {
  songName: PropTypes.string.isRequired,
  handleGoBack: PropTypes.func.isRequired
}

export default PlayerDetailHeader
