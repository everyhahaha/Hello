// import React from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
    background-color: black;
    color: white;
    font-size: 1em;
    margin: 1em;
`

function Navbar() {
    return (
        <>
            <NavList>
                <li>
                    <h1><a>Shop</a></h1>
                    <h2><a>price</a></h2>
                    <h2><a>mypage</a></h2>
                </li>
            </NavList>
        </>
    );
}

  
  export default Navbar;