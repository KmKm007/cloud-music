import React from 'react'
import PropTypes from 'prop-types'

class BackgroundCover extends React.Component {
  componentDidMount () {
  }

  render () {
    const url = this.props.url
    const style = {
      backgroundImage: `url(${url})`
    }
    return (
      <div className="mask" ref="cover">
        <div className="album-cover" style={style}></div>
        <div className="mask-cover"></div>
      </div>
    )
  }
}

BackgroundCover.propTypes = {
  url: PropTypes.string.isRequired
}

export default BackgroundCover
