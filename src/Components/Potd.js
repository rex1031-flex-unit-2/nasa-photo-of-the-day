import React from 'react';
import styled from 'styled-components';

const Image = styled.div`

div{
    width: 25vw;
    
}


`
const Potd = props =>(
    <Image>

    <img src ={props.url} alt="NASA PotD">{props.title}</img>

    </Image>


)

export default Potd;