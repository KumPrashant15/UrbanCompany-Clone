import React from 'react'
import stress from '../assets/menstress.jpeg'
import pain from '../assets/menpain.jpeg'
import post from '../assets/menpost.jpeg'
import relex from '../assets/relex.jpeg'
const Massage= () => {
    let  spas = [{
        img:stress,
        title:"Stess relief"
    },
    {
        img:pain,
        title:"Pain relief"
    },
    {
        img:post,
        title:"Post workout"
    },
    {
        img:relex,
        title:"Relaxation"
    }
]
return (
    <section className='spawomen'>
        <h1>Massage for Men</h1>
        <div className="spalist">
            {spas.map((ele,index)=>{
                return <div className='spacontainer'>
                    <img src={ele.img} alt="" />
                    <h4>{ele.title}</h4>
                </div>
            })}
        </div>
    </section>
)
}

export default Massage
