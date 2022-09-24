import styled from '@emotion/styled';
import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Container = styled.div`
    background-color: black;
    width: 100%;
    height: 100px;
    margin: auto;
    color:white;
    display: flex;
   `


function Navbar() {
    return ( 

        <Container>


            <Link to='/home'> 
            
        <div className='logo-container'>
      <img src="https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg" width={400}></img>
         </div>   </Link>

        </Container>
     );
}

export default Navbar;