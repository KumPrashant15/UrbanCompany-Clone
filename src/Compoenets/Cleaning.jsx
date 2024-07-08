import React from 'react'
import bath from '../assets/bathroomcleaning.jpeg'
import full from '../assets/fullhome.jpeg'
import carpet from '../assets/carpet.jpeg'
import insect from '../assets/cockraoach.jpeg'

const Cleaning = () => {

    let  pest = [{
        img:bath,
        title:"Bathroom & kitchen cleaning"
    },
    {
        img:full,
        title:"Full home cleaning"
    },
    {
        img:carpet,
        title:"Sofa & carpet cleaning"
    },
    {
        img:insect,
        title:"Cockroach,ant & general pest control"
    }
]
return (
    <section className='pest'>
        <h1>Cleaning & pest control</h1>
        <div className="clean">
            {pest.map((ele,index)=>{
                return <div className='cleancontainer'>
                    <img src={ele.img} alt="" />
                    <h4>{ele.title}</h4>
                </div>
            })}
        </div>
    </section>
)
}

export default Cleaning
