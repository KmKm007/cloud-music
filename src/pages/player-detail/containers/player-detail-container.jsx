import React from 'react'
import PlayerDetailHeader from '../components/player-detail-header'
import PlayerContent from '../components/player-content'
import BackgroundCover from '../components/background-cover'
import MathUtil from '@utils/MathUtil'

class PlayerDetailContainer extends React.Component {
  componentDidMount () {
    const isPlay = this.props.isPlay
    if (isPlay) {
      this.continueProcess()
    } else {
      this.stopPropcess()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isPlay } = this.props
    const { isPlay: nextIsPlay } = nextProps
    if (isPlay !== nextIsPlay) {
      if (nextIsPlay) {
        this.continueProcess()
      } else {
        this.stopPropcess()
      }
    }
  }

  continueProcess () {
    this.processJob = setInterval(() => {
      const { currentSeconds, totalSeconds } = this.props
      if (currentSeconds < totalSeconds) {
        this.props.handleChangePlayedTime(currentSeconds + 1)
      } else {
        this.stopPropcess()
      }
    }, 1000)
  }

  stopPropcess () {
    clearInterval(this.processJob)
  }

  render () {
    const { songName, isPlay, totalSeconds, currentSeconds,
      handleGoBack, handlePlayerPlay, handlePlayerPause } = this.props
    const url = 'http://p1.music.126.net/ivlCltZ5_PHSednttGmLBg==/926888302240122.jpg?param=500y500'
    const processPercentage = MathUtil.calcPercentage(currentSeconds, totalSeconds)
    return (
      <div className="player-detail">
        <PlayerDetailHeader
          songName={songName}
          handleGoBack={handleGoBack}
        />
        <PlayerContent
          isPlay={isPlay}
          totalSeconds={totalSeconds}
          currentSeconds={currentSeconds}
          handlePlayerPlay={handlePlayerPlay}
          handlePlayerPause={handlePlayerPause}
          processPercentage={processPercentage}
        />
        <BackgroundCover url={url}/>
      </div>
    )
  }
}

export default PlayerDetailContainer
