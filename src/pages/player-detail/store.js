import actions from '@actions'

const mapStateToProps = state => ({
  songName: state.player.songName,
  isPlay: state.player.isPlay,
  totalSeconds: state.player.totalSeconds,
  currentSeconds: state.player.currentSeconds
})

const mapDispatchToProps = dispatch => ({
  handlePlayerPlay () {
    dispatch(actions.playerPlay())
  },
  handlePlayerPause () {
    dispatch(actions.playerPause())
  },
  handleChangePlayedTime (seconds) {
    dispatch(actions.changePlayedTime(seconds))
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
