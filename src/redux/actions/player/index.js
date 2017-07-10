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
