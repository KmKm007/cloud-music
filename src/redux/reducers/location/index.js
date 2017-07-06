import actionTypes from '@actionTypes'

const initialState = '/'

function locationChange (state, action) {
  return action.location
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOCATION_CHANGE:
      return locationChange(state, action)
    default:
      return state
  }
}

export default locationReducer
