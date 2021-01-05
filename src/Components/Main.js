import React, { useState, useEffect} from 'react';
import axios from  'axios';
import "./Main.css"
import Potd from './Potd';



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
    <div className="content">
        <div className="textSection">
            <h1>NASA Photo of the Day</h1>
            <h2>{data.date}</h2>
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
        </div>
        
        <div className="photoSection">
            <Potd url={data.url} />
            <h4>Credit: {data.copyright}</h4>
        </div>
    </div>
)


}









export default Main;