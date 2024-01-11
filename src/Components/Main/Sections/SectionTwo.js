import React from 'react'
import appleTv from '../../../commonResource/images/icons/apple-tv-logo.png'
import servant from '../../../commonResource/images/icons/servant-logo.png'
import SectionProp from './SectionProp'

import appleTvImg from '../../../commonResource/images/home/apple-tv-background.jpg'
import servantImg from '../../../commonResource/images/home/air-pods.jpg'

function SectionTwo() {
    return (
        <section>
            <SectionProp leftBackImg={appleTvImg} leftImg={appleTv} leftDescr="Watch the trailer"
            leftLinkMore="/tv" leftLinkBuy="/Buy"
            rightBackImg={servantImg} rightDescr= "AirPods Pro" rightLinkMore="/AirPods" color='white'font='large' rightLinkBuy="/Buy" />
        </section>
    )
}


export default SectionTwo;