import React from 'react'
import cut from '../assets/haircut.jpeg'
import intense from '../assets/bathroom.png'
import classic from '../assets/classic.jpeg'
import sofa from '../assets/sofa.png'
import rose from '../assets/rose.png'
import top from '../assets/topload.png'
import tv from '../assets/Tv.png'
import check from '../assets/servicecheck.png'
import power from '../assets/powersaver.jpeg'
// import discount from '../assets/bathroom.png'
const MostBooked = () => {
    let booked=[{
        image:cut,
        content:"Haircut for men",
        rating:"★ 4.88 (571.6k)",
        price:"₹259"
    },
    {
        image:intense,
        content:"Intense bathroom cleaning",
        rating:"★ 4.77 (1.4M)",
        price:"₹519"
    },
    {
        image:classic,
        content:"Classic bathroom cleaning",
        rating:"★ 4.89 (1M)",
        price:"₹419"
    },
    {
        image:sofa,
        content:"Sofa cleaning",
        rating:"★4.89 (131.9k)",
        price:"₹499"
    },
    {
        image:rose,
        content:"Elysian British rose pedicure",
        rating:"★ 4.82 (234.6K)",
        price:"₹759"
    },
    {
        image:top,
        content:"Top load (fully automatic) checkup",
        rating:"★ 4.83(105.6K)",
        price:"₹99"
    },
    {
        image:tv,
        content:"TV Repair",
        rating:"★ 4.85 (69.2K)",
        price:"₹549"
    },
    {
        image:check,
        content:"Service Check Up",
        rating:"★ 4.81 (46.4K)",
        price:"₹249"
    },
    {
        image:power,
        content:"Power Saver AC service",
        rating:"★ 4.88 (146K)",
        price:"₹199"
    }]
return (
    <section className='mostbook'>
    <h1>Most booked services</h1>
    <div className='book'>
    {booked.map((ele,index)=>{
        return <div className='second'>
            <div><img src={ele.image} alt="" /></div>
            <p>{ele.content}</p>
            <p>{ele.rating}</p>
            <p>{ele.price}</p>
        </div>
    })}
    {/* How to add 2 more contents */}
    </div>
</section>
)
}

export default MostBooked
