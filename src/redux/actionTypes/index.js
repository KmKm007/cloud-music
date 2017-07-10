import * as locationActionTypes from './location'
import * as counterActionTypes from './counter'
import * as playerActionTypes from './player'

export default {
  ...locationActionTypes,
  ...counterActionTypes,
  ...playerActionTypes
}
