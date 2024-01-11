import React from 'react'
import watch from '../../../commonResource/images/icons/watch-series5-logo.png'
import appleCard from '../../../commonResource/images/icons/apple-card-logo.png'

import watchImg from '../../../commonResource/images/home/watch-series-5.jpg'
import appleCardImg from '../../../commonResource/images/home/apple-card.jpg'
import SectionProp from './SectionProp';

function SectionOne() {
    return (
        <section>
            <SectionProp leftBackImg={watchImg} leftImg={watch} leftDescr="With the new Always-On Retina display.
                    " leftLinkMore="/watch" leftLinkBuy="/Buy"
                    rightBackImg={appleCardImg} rightImg={appleCard} rightDescr="Get 3% Daily Cash on purchases from
                    Apple using Apple Card." rightLinkMore="/appleCard" rightLinkBuy="/Buy" />
        </section>
    )
}


export default SectionOne;