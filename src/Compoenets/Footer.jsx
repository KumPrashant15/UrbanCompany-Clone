import React from 'react'
import logo from '../assets/urbanlogo.jpeg'
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import apple from '../assets/appstore.png'
import play from '../assets/googleplay.jpeg'

const Footer = () => {
return (
    <section  className="footer">
        <div className='footlogo'><img src={logo} alt="" /></div>
        <div className='bigdiv'>
        <div className='common'>
        <h1>Company</h1>
            <p>About us</p>
            <p>Terms & conditions </p>
            <p>Privacy policy</p>
            <p>Anti-discrimination policy </p>
            <p>UC impact </p>
            <p>Careers </p>
        </div>
        <div className='common'>
        <h1>For customers</h1>
            <p>UC reviews </p>
            <p>Categories near you  </p>
            <p>Blog </p>
            <p>Contact us  </p>
        </div>
        <div className='common'>
            <h1>For partners</h1>
            <p>Register as a professional </p>
        </div>
        <div className='common'>
            <h1>Social Links</h1>
            <div className='signs'>
            <CiTwitter  className='tweet'/>
            <TiSocialFacebookCircular className='fb'/>
            <FaInstagram className='ins'/>
            <TiSocialLinkedinCircular className='li'/>
            </div>
            <div className='apple'><img src={apple} alt="" /></div>
            <div className='play'><img src={play} alt="" /></div>
        </div>
        </div>
        <p className='copyright'>© Copyright 2022 Urban Company. All rights reserved.</p>
    </section>
)
}

export default Footer
