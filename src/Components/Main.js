import React, { useState, useEffect} from 'react';
import axios from  'axios';
import Potd from './Potd';
import styled from "styled-components";


const Wrapper = styled.div`


   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width 80%;
   box-shadow: 0 4px 8px 10px rgba(45, 53, 133);
   transition: 0.3s;
   border-radius: 5px;
   

h1{
    color: #4D3A81;
    font-family: 'Orbitron', sans-serif;
    font-size: 3.5rem;
}

`;

const Main = props =>{

    const [data, setData] = useState({})
    console.log(data);

    useEffect(() =>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=RpYTmNgXaheC4U17auPCes2znlmQlQlTn2xIKpsc")
            .then (res => {
                setData(res.data)
                console.log(res.data);
            })
            .catch(err =>console.log(err));
  
    }, []);
  

return(
    <Wrapper> 
            <h1>NASA Photo of the Day</h1>
            <h2>Earth Date: <br />{data.date}</h2>   
            <Potd url={data.url} />
            <h3>{data.title}</h3>    
            <p>{data.explanation}</p>
            <h5><em>Credit: {data.copyright}</em></h5>  
    </Wrapper>
)


}









export default Main;