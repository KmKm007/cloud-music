import * as counterActions from './counter'
import * as loactionActions from './location'
import * as playerActions from './player'

export default {
  ...counterActions,
  ...loactionActions,
  ...playerActions
}
