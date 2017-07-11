import actionTypes from '@actionTypes'

const initialState = {
  songName: '美しきもの',
  isPlay: true,
  currentSeconds: 0, // 秒为单位,
  totalSeconds: 393,
  album: null
}

function playerPlay (state) {
  const { currentSeconds, totalSeconds } = state
  return {
    ...state,
    isPlay: true,
    currentSeconds: currentSeconds >= totalSeconds ? 0 : currentSeconds
  }
}

function playerPause (state) {
  return {
    ...state,
    isPlay: false
  }
}

function changePlayedTime (state, action) {
  const currentSeconds = action.payload.second
  const totalSeconds = state.totalSeconds
  return {
    ...state,
    currentSeconds,
    isPlay: currentSeconds < totalSeconds
  }
}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_PLAY:
      return playerPlay(state)
    case actionTypes.PLAYER_PAUSE:
      return playerPause(state)
    case actionTypes.CHANGE_PLAYED_TIME:
      return changePlayedTime(state, action)
    default:
      return state
  }
}

export default playerReducer
