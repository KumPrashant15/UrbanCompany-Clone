import React from 'react'
import stress from '../assets/menhai.jpeg'
import pain from '../assets/menfacial.jpeg'
import post from '../assets/menpedi.jpeg'
import natural from '../assets/mencolor.jpeg'
const Kids = () => {
    let  kid = [{
        img:stress,
        title:"Haircut & Beard grooming shaving"
    },
    {
        img:pain,
        title:"Facial & Cleanup"
    },
    {
        img:post,
        title:"Pedicure & Manicure"
    },
    {
        img:natural,
        title:"Hair color & Hair spa"
    }
]
return (
    <section className='spawomen'>
        <h1>Salon for kids & men</h1>
        <h3>Grooming essentials</h3>
        <div className="spalist">
            {kid.map((ele,index)=>{
                return <div className='spacontainer'>
                    <img src={ele.img} alt="" />
                    <h4>{ele.title}</h4>
                </div>
            })}
        </div>
    </section>
)
}

export default Kids
