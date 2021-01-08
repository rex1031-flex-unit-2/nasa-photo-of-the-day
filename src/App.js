import React from "react";
import Main from "./Components/Main";
import "./App.css";
import styled from "styled-components";

const Appwrap = styled.div`
div{
  background-color: #010A2D;
  
}

p{

}

`;


function App() {


  return (
    <Appwrap >
      <Main />
    </Appwrap>
  );
}

export default App;

