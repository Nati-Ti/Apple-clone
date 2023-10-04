import React from 'react'
import BannerProp from './BannerProp';

function ThirdBanner() {
    return (

        <div className="sec-3 sec-bg text-center">
            <BannerProp bannerName="iPhone 11" decription="Just the right amount of everything."
            price="From $16.62/mo. or $399 with trade-in." linkUrl="/LearnMore" linkUrlBuy="/Buy" />
        </div>

    )
}

export default ThirdBanner;