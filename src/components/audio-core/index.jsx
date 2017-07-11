import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from './store'

class AudioCore extends React.Component {
  componentDidMount () {
    const { isPlay } = this.props
    const player = this.refs.player
    if (isPlay) {
      player.oncanplay = () => {
        player.play()
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isPlay } = this.props
    const { isPlay: _isPlay } = nextProps
    if (isPlay !== _isPlay) {
      if (_isPlay) {
        this.refs.player.play()
      } else {
        this.refs.player.pause()
      }
    }
  }

  render () {
    const src = require('@assets/music/123.mp3')
    return (
      <audio ref="player" src={src} style={{ display: 'none' }}/>
    )
  }
}

export default connect(mapStateToProps)(AudioCore)
