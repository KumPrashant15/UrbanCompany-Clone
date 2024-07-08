import React from 'react'
import drill from '../assets/drill.png'
import flush from '../assets/flush.png'
import tap from '../assets/tap.png'
import jet from '../assets/jet.png'
import cup from '../assets/cup.png'
import wash from '../assets/washbasin.png'
import switc from '../assets/switch.jpeg'
import tube from '../assets/tubelight.png'
import minor from '../assets/minor.png'
import board from '../assets/switchboard.png'

const Quick = () => {let quick=[{
    image:drill,
    content:"Drill & hang (wall decor)",
    rating:"★ 4.86 (134.6k)",
    price:"₹129"
},
{
    image:flush,
    content:"Flush tank repair (external - PVC)",
    rating:"★ 4.78 (93K)",
    price:"₹159"
},
{
    image:tap,
    content:"Tap repair",
    rating:"★ 4.81 (177.3K)",
    price:"₹129"
},
{
    image:jet,
    content:"jet spray (installation/repair)",
    rating:"★4.82 (100.5k)",
    price:"₹139"
},
{
    image:cup,
    content:"Cupboard hinge service (up to two)",
    rating:"★ 4.83 (65.8K)",
    price:"₹199"
},
{
    image:wash,
    content:"Washbasin pipe leakage",
    rating:"★ 4.80(87.6K)",
    price:"₹139"
},
{
    image:switc,
    content:"Switch/socket replacement",
    rating:"★ 4.87 (29K)",
    price:"₹109"
},
{
    image:tube,
    content:"Tubelight Installation/Repair",
    rating:"★ 4.88 (74.8K)",
    price:"₹120"
},
{
    image:minor,
    content:"Minor Door Repair",
    rating:"★ 4.81 (54.1K)",
    price:"₹199"
},
{
    image:board,
    content:"Switchboard/switchbox repair",
    rating:"★ 4.85 (91.4K)",
    price:"₹120"
}]
return (
<section className='mostbook'>
<h1>Quick home reapairs</h1>
<div className='book'>
{quick.map((ele,index)=>{
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

export default Quick
