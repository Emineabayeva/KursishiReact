import React from 'react'
import Meqsedimiz from '../components/Meqsedimiz'
import Haqqimizda from '../components/Haqqimizda'
import HaqDovlet from '../components/HaqDovlet'
import HaqBank from '../components/HaqBank'
import HaqSahibkar from '../components/HaqSahibkar'
import HaqqSlide from '../components/HaqqSlide'

const Home :React.FC = () => {
  return (
    <div>
        <Haqqimizda/>
        <Meqsedimiz/>
        <HaqqSlide/>
<HaqDovlet/>

<HaqBank/>
<HaqSahibkar/>
    </div>
  )
}

export default Home