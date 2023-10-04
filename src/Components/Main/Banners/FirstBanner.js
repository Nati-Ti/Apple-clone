import React from 'react'
import banner1 from '../../../commonResource/images/home/mac-laptop.jpg'
import BannerProp from './BannerProp';

function FirstBanner() {
    return (    

        <div className="sec-1 text-center">
            <div className="model">16-inch model</div>
            <BannerProp bannerName="MacBook Pro" decription="The best for the brightest."
            linkUrl="/LearnMore" linkUrlBuy="/Buy" />
            <div className="description">
                The best for the brightest.
            </div>
            <img src={banner1} alt="MacBook Pro Laptop"/>
        </div>
    )
}

export default FirstBanner;