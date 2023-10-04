import React, { Component } from 'react'

class SectionProp extends Component {
  render() {
    return (
        <section>
            <div className="sec-4 d-md-flex mx-md-2">
                <div style={{  
                    backgroundImage: `url(${this.props.leftBackImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }} 
                    className="leftside sec-bg text-center mt-2 col-12 col-md-6 mr-md-1">
                    <div className="leftside-logo pt-5">
                        <img src={this.props.leftImg} alt="apple product"/>
                    </div>
                    <p className="py-2 mb-0">{this.props.leftDescr}</p>
                    <div className="leftside-links links-wrapper py-2">
                        <ul className="d-flex list-unstyled">
                            <li className="leftside-learn"><a href={this.props.leftLinkMore}>Learn more</a></li>
                            <li><a href={this.props.leftLinkBuy}>Buy</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{  
                    backgroundImage: `url(${this.props.rightBackImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}
                    className="rightside sec-bg text-center mt-2 col-12 col-md-6 ml-md-1">
                    <div className="pt-5">
                        <img src={this.props.rightImg} alt="apple product"/>
                    </div>
                    <p className="py-3 mb-0">{this.props.rightDescr}</p>
                    <div className="rightside-links links-wrapper">
                        <ul className="d-flex list-unstyled">
                            <li className="rightside-learn"><a href={this.props.rightLinkMore}>Learn more</a></li>
                            <li><a href={this.props.rightLinkBuy}>Buy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}


export default SectionProp;