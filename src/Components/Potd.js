import React from 'react';
import styled from 'styled-components';

const ImageWrap = styled.div`
    padding: 30px;
    
    img{
        border-radius: 5px;
        border: solid 5px #4D3A81;
        width: 60vh;
    } 
`;

const Potd = props =>(
    <ImageWrap>
    <img src ={props.url} alt="NASA PotD">{props.title}</img>
    </ImageWrap>


)

export default Potd;