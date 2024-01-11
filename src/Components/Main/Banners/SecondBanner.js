import React from 'react'
import BannerProp from './BannerProp';

function SecondBanner() {
    return (   

        <div className="sec-2 sec-bg text-center pt-5">
            <BannerProp bannerName="iPhone 11 Pro" nameColor='white' decription="Pro cameras. Pro display. Pro performance."
            price="From $24.95/mo. or $599 with trade-in." linkUrl="/LearnMore" linkUrlBuy="/Buy" />
        </div>
    )
}


export default SecondBanner;