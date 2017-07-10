import actionTypes from '@actionTypes'

const initialState = {
  songName: '美しきもの',
  isPlay: true
}

function togglePlayerState (state) {
  const isPlay = state.isPlay
  return {
    ...state,
    isPlay: !isPlay
  }
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_PLAY:
      return togglePlayerState(state)
    case actionTypes.PLAYER_PAUSE:
      return togglePlayerState(state)
    default:
      return state
  }
}

export default playerReducer
