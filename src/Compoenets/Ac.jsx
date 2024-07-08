import React from 'react'
import repair from '../assets/Acrepair.jpeg'
import purifier from '../assets/purifier.jpeg'
import Machine from '../assets/Machine.jpeg'
import chimney from '../assets/chimney.jpeg'
import Telivision from '../assets/Telivision.jpeg'
import refregerator from '../assets/refregerator.jpeg'
import ro from '../assets/ro.jpeg'
import geyser from '../assets/geyser.jpeg'
const Ac = () => {
    let  appliance = [{
        img:repair,
        title:"Ac Repair & Service"
    },
    {
        img:purifier,
        title:"Water Purifier Repair"
    },
    {
        img:Machine,
        title:"Washing Machine Repair"
    },
    {
        img:chimney,
        title:"Chimney Repair"
    },
    {
        img:Telivision,
        title:"Telivision Repair"
    },
    {
        img:refregerator,
        title:"Refrigerator"
    },
    {
        img:ro,
        title:"Native Water Purifier"
    },
    {
        img:geyser,
        title:"Geyser Repair"
    }
]
return (
    <section className='saloon'>
        <h1>AC & appliance repair</h1>
        <div className="women">
            {appliance.map((ele,index)=>{
                return <div className='imgcontainer'>
                    <img src={ele.img} alt="" />
                    <h4>{ele.title}</h4>
                </div>
            })}
        </div>
    </section>
)
}

export default Ac
