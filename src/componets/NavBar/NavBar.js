import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';


export default function NavBar(){
    return(
        <AppBar position="static">
      <nav>
            <div>
                <img src={logo} alt="logo"/>
            </div>
        <ul>
            <li><Button  variant="outlined">Home</Button></li>
            <li><Button variant="outlined">Category</Button></li>
            <li><Button variant="outlined">Contact</Button></li>
            <li><Button  variant="outlined">About us</Button></li>
        </ul>
        
        </nav>
        </AppBar>
        
    )
}