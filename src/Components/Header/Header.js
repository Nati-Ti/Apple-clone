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
              <HeaderProp linkUrl="/mac/" linkName="Mac" />
              <HeaderProp linkUrl="/iphone/" linkName="iPhone" />
              <HeaderProp linkUrl="/ipad/" linkName="ipad" />
              <HeaderProp linkUrl="/watch/" linkName="watch" />
              <HeaderProp linkUrl="/tv/" linkName="tv" />
              <HeaderProp linkUrl="/Music/" linkName="Music" />
              <HeaderProp linkUrl="/Support/" linkName="Support" />
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/"
                  ><img src={Search} /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/"
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