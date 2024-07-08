import React from 'react'
import stress from '../assets/stress.jpeg'
import pain from '../assets/Pain.jpeg'
import post from '../assets/post.jpeg'
import natural from '../assets/Natural.jpeg'
const Spa = () => {
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
        img:natural,
        title:"Natural skincare"
    }
]
return (
    <section className='spawomen'>
        <h1>Spa for women</h1>
        <h3>Refresh. Rewind. Rejuvenate</h3>
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

export default Spa
