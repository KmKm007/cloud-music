import actions from '@actions'

const mapStateToProps = state => ({
  songName: state.player.songName,
  isPlay: state.player.isPlay
})

const mapDispatchToProps = dispatch => ({
  handlePlayerPlay () {
    dispatch(actions.playerPlay())
  },
  handlePlayerPause () {
    dispatch(actions.playerPause())
  }
})

export {
  mapStateToProps,
  mapDispatchToProps
}
