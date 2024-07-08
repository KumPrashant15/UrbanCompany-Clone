import React from 'react'
import image1 from '../assets/homeserviceright.jpeg'
import im from '../assets/Ac.jpeg'
import im1 from '../assets/electricity.png'
import im2 from '../assets/mensaloon.jpeg'
import im3 from '../assets/Paint.jpeg'
import im4 from '../assets/womensaloon.jpeg'
import im5 from '../assets/cleaning.jpeg'
import { CiStar } from "react-icons/ci";
import { FaPeopleRoof } from "react-icons/fa6";

const HomeService = () => {
    let serviceimage=[{
        image:im4,
        content:"Women's Salon, Spa & Laser Clinic "
    },
    {
        image:im2,
        content:"Men's Salon & Massage"
    },
    {
        image:im,
        content:"AC & Appliance Repair"
    },   
    {
        image:im5,
        content:"Cleaning & Pest Control"
    },
    {
        image:im1,
        content:"Electrician, Plumber & Carpenter"
    },
    {
        image:im3,
        content:"Painting, Waterproofing & Wall Panels"
    }

]
return (
    <section className='homeservice'> 
        <article className='left'>
            <h1>Home services at your doorstep</h1>
            <div className='leftservice'>
                <h2>What are you looking for?</h2>
                {serviceimage.map((ele,index)=>{
                    return <div className='card'>
                        <div> <img src={ele.image} alt="" /> </div>
                        <p>{ele.content}</p>
                    </div>
                    
                })}
            </div>
            <div className='lower'>
                <div className='rating'>
                <CiStar className='star' />
                <div>
                <p className='rate'>4.8</p>
                <p className='word'>Service Rating</p>
                </div>
                </div>
                <div className='customers'>
                <FaPeopleRoof className='people' />
                <div>
                    <p className='num'>5M+</p>
                    <p className='count'>Customer Globally</p>
                </div>
                </div>
            </div>
        </article>
        <article className='right'><img src={image1} alt="" /></article>
    </section>
)
}

export default HomeService
