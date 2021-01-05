import React from 'react';



const Potd = props =>(
    <div>

    <img src ={props.url} alt="NASA PotD">{props.title}</img>

    </div>


)

export default Potd;