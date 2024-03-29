import React, { Component } from 'react'

class BannerProp extends Component {
  render() {
    return (
    <div>
        <div className="prod-name2 prod-name font-weight-bolder">
            <h5 style={{
                  fontSize: this.props.nameColor !== 'white' ? 'larger' : '',
                  color: this.props.nameColor === 'white' ? 'white' : '',
                  paddingTop: this.props.nameMargin === 'top' ? '50px' : ''
                }} className="font-weight-bolder">{this.props.bannerName}</h5>
        </div>
        <div className="description2 text-white">
            <h4>{this.props.description}</h4>
        </div>
        <div className="price">
            <p className="mb-0">{this.props.price}</p>
        </div>
        <div className="links-wrapper">
            <ul className="d-flex list-unstyled">
                <li className="learn-link2"><a href='#'>Learn more</a></li>
                <li><a href='#'>Buy</a></li>
            </ul>
        </div>
    </div>

    )
  }
}


export default BannerProp;