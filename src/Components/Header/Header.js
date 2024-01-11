import React, { Component } from 'react'
import Search from '../../commonResource/images/icons/search-icon-sm.png'
import Logo from '../../commonResource/images/icons/logo-sm.png'
import Cart from '../../commonResource/images/icons/cart-sm.png'
import HeaderProp from './HeaderProp'




class Header extends Component {
	render(){
    return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button" data-toggle="collapse" data-target=".navbar-collapse" >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#"
            ><img src={Logo} /></a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <HeaderProp linkUrl="#" linkName="Mac" />
              <HeaderProp linkUrl="#" linkName="iPhone" />
              <HeaderProp linkUrl="#" linkName="ipad" />
              <HeaderProp linkUrl="#" linkName="watch" />
              <HeaderProp linkUrl="#" linkName="tv" />
              <HeaderProp linkUrl="#" linkName="Music" />
              <HeaderProp linkUrl="#" linkName="Support" />
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/"
                  ><img src={Search} /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#"
                  ><img src={Cart} /></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    )}
}



export default Header;