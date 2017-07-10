import React from 'react'
import { connect } from 'react-redux'
import PlayerDetailContainer from './containers/player-detail-container'
import HistoryUtil from 'kmkm-utils/dist/HistoryUtil'
import { mapStateToProps, mapDispatchToProps } from './store'
import './player-detail.scss'

const history = HistoryUtil.getHashHistory()

class PlayerDetail extends React.Component {
  onGoBack () {
    history.goBack()
  }

  render () {
    const { onGoBack } = this
    return (
      <PlayerDetailContainer
        {...this.props}
        handleGoBack={onGoBack}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetail)
