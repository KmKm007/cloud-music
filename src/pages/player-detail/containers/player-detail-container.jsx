import React from 'react'
import PlayerDetailHeader from '../components/player-detail-header'
import PlayerContent from '../components/player-content'
import BackgroundCover from '../components/background-cover'

class PlayerDetailContainer extends React.Component {
  render () {
    const { songName, handleGoBack, handlePlayerPlay, handlePlayerPause, isPlay } = this.props
    const url = 'http://p1.music.126.net/ivlCltZ5_PHSednttGmLBg==/926888302240122.jpg?param=500y500'
    return (
      <div className="player-detail">
        <PlayerDetailHeader
          songName={songName}
          handleGoBack={handleGoBack}
        />
        <PlayerContent
          isPlay={isPlay}
          handlePlayerPlay={handlePlayerPlay}
          handlePlayerPause={handlePlayerPause}
        />
        <BackgroundCover url={url}/>
      </div>
    )
  }
}

export default PlayerDetailContainer
