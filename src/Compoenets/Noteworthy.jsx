import React from 'react'
import wall from '../assets/walldecor.jpeg'
import water from '../assets/waterpurifier.jpeg'
import lock from '../assets/doorlock.jpeg'
import paint from '../assets/homepaint.jpeg'
import wax from '../assets/hairreduce.jpeg'
import spa from '../assets/spa.jpeg'
import hair from '../assets/hairstudio.jpeg'
import ac from '../assets/acrepair.png'
const Noteworthy = () => {
    let worthyimage=[{
        image: wall, 
        content:"Wall decor (Panels)"
    },
    {
        image: water, 
        content:"Native Water Purifier"
    },
    {
        image: lock, 
        content:"Native Smart Locks"
    },
    {
        image: paint, 
        content:"Full Home Painting"
    },
    {
        image: wax, 
        content:"Laser Hair Reduction"
    },
    {
        image: spa, 
        content:"Spa Ayurveda"
    },
    {
        image: hair, 
        content:"Hair Studio for Women"
    },
    {
        image: ac, 
        content:"AC Repair & Service"
    }]
return (
    <section className='noteworthy'>
        <h1>New and noteworthy</h1>
        <div className='note'>
        {worthyimage.map((ele,index)=>{
            return <div className='box'>
                <div><img src={ele.image} alt="" /></div>
                <p>{ele.content}</p>
            </div>
        })}
        </div>
    </section>
)
}

export default Noteworthy
