import React from "react";
import Main from "./Components/Main";
import "./App.css";
import styled from "styled-components";

const Appwrap = styled.div`
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #010A2D;
    opacity: 0.92;
  }

  p{
    width: 75%;
    line-height: 1.6;    
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

