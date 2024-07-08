import React from 'react'
import { TiLocation } from "react-icons/ti";
import { CgSearchLoading } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/urbanlogo.jpeg'

const NavComponet = () => {
return (
<section className='navbar'>
    <div className='logo'><img src={logo} alt="" /></div>
    <div className='middlesec'>
        <div className="location-container">
        <TiLocation  className='location-icon'/>
        <input type="text" placeholder='Connaught Place,New Delhi' />
        <IoIosArrowDown className='dropdown' />
        </div>
        <div className="search-container">
        <CgSearchLoading  className='searchicon'/>
        <input type="text" name="" id="" placeholder='Search for'/>
        </div>
    </div>
    <button>Log In</button>
</section>
)
}

export default NavComponet
