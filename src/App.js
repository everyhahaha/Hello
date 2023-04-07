import React from "react";
import "./style/reset.css"
import styled from 'styled-components';


const NavList = styled.ul`
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
`

const NavListItem = styled.li`
  font-size: ${props => props.title ? '25px' : '20px'}; 
  font-weight: ${props => props.title ? '600' : '400'}; 
  color: ${props => props.title ? 'white' : '#999999'}; 
  margin-right: 40px;
`

function Navbar() {
  return (
    <NavList >
      <NavListItem title><h1><a>ShoeShop</a></h1></NavListItem>
      <NavListItem><h2><a>Home</a></h2></NavListItem>
      <NavListItem><h2><a>shop</a></h2></NavListItem>
      <NavListItem><h2><a>cart</a></h2></NavListItem>
    </NavList>
  )
}

function App() {
  return (
    <>
      <Navbar />  
    </>
  );
}

export default App;
