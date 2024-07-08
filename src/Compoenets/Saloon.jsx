import React from 'react'
import one from '../assets/1.jpeg'
import two from '../assets/2.jpeg'
import three from '../assets/3.jpeg'
import four from '../assets/4.jpeg'
import five from '../assets/5.jpeg'
import six from '../assets/6.jpeg'
import seven from '../assets/7.jpeg'
const Saloon = () => {
    let arr=[{
        img:one,
        title:"Waxing",
    },
    {
        img:two,
        title:"Pedicure",
    },
    {
        img:three,
        title:"Facial & cleanup",
    },
    {
        img:four,
        title:"Manicure",
    },
    {
        img:five,
        title:"Threading & face wax",
    },
    {
        img:six,
        title:"Bleach & detan",
    },
    {
        img:seven,
        title:"Haircare",
    }]
return (
    <section className='saloon'> 
    <h1>Salon for Women</h1>
    {/* How to give name  */}
    <div className='women'>
        {arr.map((ele,index)=>{
        return <div className='imgcontainer'>
            <img src={ele.img} alt="" />
            <h4>{ele.title}</h4>
        </div>
    })}</div>
    </section>
)
}

export default Saloon
