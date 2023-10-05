import React, { Component } from 'react'

class FooterProp extends Component {
  render() {
    return (
        <ul>
            {this.props.links.map((link) => 
            <li key={link}><a href={`/${link}`}>{link}</a></li>
            )}
            {/* the key attribute helps to identify each item in the list uniquely */}
        </ul>
    )
  }
}

export default FooterProp;
