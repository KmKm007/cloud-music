import React from 'react'

class PlayerContent extends React.Component {
  render () {
    const cdWrapperImg = require('@assets/imgs/cd_wrapper.png')
    const cdWrapperCoverStyle = {
      backgroundImage: `url(${cdWrapperImg})`
    }
    const albumURL = "http://p1.music.126.net/ivlCltZ5_PHSednttGmLBg==/926888302240122.jpg?param=500y500"
    return (
      <div className="player-content">
        <div className="player-effect">
          <div className="sticker">
            <img src={require('@assets/imgs/sticker.png')}/>
          </div>
          <div className="cd-wrapper cd-rotate">
            <div className="cd-wrapper-cover" style={cdWrapperCoverStyle}></div>
            <img className="cd-img" src={albumURL} />
          </div>
        </div>
        <div className="player-wrapper"></div>
      </div>
    )
  }
}

export default PlayerContent
