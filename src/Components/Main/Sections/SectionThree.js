import React from 'react'
import ipad from '../../../commonResource/images/icons/new-ipad-logo.png'

import macbookImg from '../../../commonResource/images/home/macbook-pro.jpg'
import ipadImg from '../../../commonResource/images/home/new-ipad.jpg'
import SectionProp from './SectionProp';

function SectionThree() {
    return (
        <section>
            <SectionProp leftBackImg={macbookImg} leftDescr="16-inch model" leftDescr1='MacBook Pro' leftDescr2='The best for the brightest.' leftLinkMore="/macbook" leftLinkBuy="/Buy" leftBottom='true'
            rightBackImg={ipadImg} rightImg={ipad} rightDescr="Like a computer. Unlike any computer." 
            rightLinkMore="/ipad" rightLinkBuy="/Buy" />
        </section>
    )
}


export default SectionThree;