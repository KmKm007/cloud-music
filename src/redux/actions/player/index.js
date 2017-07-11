import actionTypes from '@actionTypes'

export function playerPlay () {
  return {
    type: actionTypes.PLAYER_PLAY
  }
}

export function playerPause () {
  return {
    type: actionTypes.PLAYER_PAUSE
  }
}

export function changePlayedTime (second) {
  return {
    type: actionTypes.CHANGE_PLAYED_TIME,
    payload: {
      second
    }
  }
}
