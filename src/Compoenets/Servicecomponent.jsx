import React from 'react'
import add1 from '../assets/add1.jpeg'
import add2 from '../assets/add2.jpeg'
import add3 from '../assets/add3.jpeg'
import add4 from '../assets/add4.jpeg'
import add5 from '../assets/add5.jpeg'
import add6 from '../assets/add6.jpeg'
import add7 from '../assets/add7.jpeg'
import add8 from '../assets/add8.jpeg'


const Servicecomponent = () => {
    let pictures=[add1,add2,add3,add4,add5,add6,add7,add8]
return (
    <section className='serviceContainer'>
    {pictures.map((ele,index)=>{
        return <div className='card'>
            <img src={ele} alt="" />
            <button>Book Now</button>
        </div>
    })}
    </section>
)
}

export default Servicecomponent;