import React from 'react'
import PlayerDetailHeader from '../components/plyader-detail-header'

class PlayerDetailContainer extends React.Component {
  render () {
    const { songName, handleGoBack } = this.props
    return (
      <PlayerDetailHeader
        songName={songName}
        handleGoBack={handleGoBack}
      />
    )
  }
}

export default PlayerDetailContainer
