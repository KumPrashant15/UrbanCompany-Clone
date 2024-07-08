import React from 'react'
import NavComponet from './Compoenets/NavComponet'
import HomeService from './Compoenets/HomeService'
import Servicecomponent from './Compoenets/Servicecomponent'
import Banner1 from './Compoenets/Banner1'
import Banner2 from './Compoenets/Banner2'
import Banner3 from './Compoenets/Banner3'
import Banner4 from './Compoenets/Banner4'
import Noteworthy from './Compoenets/Noteworthy'
import MostBooked from './Compoenets/MostBooked'
import Saloon from './Compoenets/Saloon'
import Spa from './Compoenets/Spa'
import Cleaning from './Compoenets/Cleaning'
import Quick from './Compoenets/Quick'
import Ac from './Compoenets/Ac'
import Massage from './Compoenets/Massage'
import Kids from './Compoenets/Kids'
import Footer from './Compoenets/Footer'

const App = () => {
return (
    <section  className="body">
        <NavComponet/>
        <HomeService/>
        <Servicecomponent/>
        <Noteworthy/>
        <MostBooked/>
        <Banner1/>
        <Saloon/>
        <Spa/>
        <Banner2/>
        <Cleaning/>
        <Quick/>
        <Banner3/>
        <Ac/>
        <Massage/>
        <Banner4/>
        <Kids/>
        <Footer/>
    </section>
)
}

export default App
