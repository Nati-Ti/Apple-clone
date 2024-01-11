import React, { Component } from 'react';

class SectionProp extends Component {
  render() {
    return (
      <section>
        <div className="sec-4 d-md-flex mx-md-2">
          <div
            style={{
              backgroundImage: `url(${this.props.leftBackImg})`,
              backgroundPosition: this.props.leftBottom === 'true' ? "bottom" : 'center',
              backgroundSize: this.props.leftBottom === 'true' ? "initial" : 'cover',
              backgroundColor: this.props.leftBottom === 'true' ? "#F8F8F8" : 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            className="leftside sec-bg text-center mt-2 col-12 col-md-6 mr-md-1"
          >
            <div className="leftside-logo pt-5">
            {this.props.leftImg ? (
                <img src={this.props.leftImg} alt="apple product" />
              ) : (
                ''
              )}
              
            </div>
            <p className="mb-0">{this.props.leftDescr}</p>
            {this.props.leftDescr1 ? (
                <p style={{
                  fontSize: this.props.leftDescr1 ? '45px' : '',
                  fontWeight: this.props.leftDescr1 ? 'bold' : '',
                  marginBottom: '0px'
                }}>{this.props.leftDescr1}</p>
              ) : (
                ''
              )}
            {this.props.leftDescr2 ? (
                <p style={{
                  fontSize: this.props.leftDescr2 ? 'large' : '',
                  marginBottom: '0px'

                }}>{this.props.leftDescr2}</p>
              ) : (
                ''
              )}
            
            <div className="leftside-links links-wrapper py-2">
              <ul className="d-flex list-unstyled">
                <li className="leftside-learn">
                  <a href={this.props.leftLinkMore}>Learn more</a>
                </li>
                <li>
                  <a href={this.props.leftLinkBuy}>Buy</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${this.props.rightBackImg})`,
              backgroundPosition: 'bottom',
              backgroundSize: 'initial',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
            }}
            className="rightside sec-bg text-center mt-2 col-12 col-md-6 ml-md-1"
          >
            <div className="pt-5">
              {this.props.rightImg ? (
                <img src={this.props.rightImg} alt="apple product" />
              ) : (
                ''
              )}
            </div>
            <p
              className="py-3 mb-0"
              style={{
                fontSize: this.props.font === 'large' ? '45px' : '',
                fontWeight: this.props.font === 'large' ? 'bold' : '',
                color: this.props.color === 'white' ? 'white' : 'black',
                paddingTop: '0px'
              }}
            >
              {this.props.rightDescr}
            </p>
            <div className="rightside-links links-wrapper">
              <ul className="d-flex list-unstyled">
                <li className="rightside-learn">
                  <a href={this.props.rightLinkMore}>Learn more</a>
                </li>
                <li>
                  <a href={this.props.rightLinkBuy}>Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionProp;