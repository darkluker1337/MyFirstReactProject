import React from "react";
import { BrowserRouter, NavLink} from "react-router-dom";
import './nav.css'
import { ReactComponent as YourSvg } from "./logo.svg"
// временная 
function Nav(){
    return(
        <div className='nav'>
        <div className="logo"><YourSvg/></div>
        <BrowserRouter>
            <ul className="menu">
                <li><NavLink to='/home' className='navlink'>Home</NavLink></li>
                <li><NavLink to='/about'className='navlink' >About</NavLink></li>
                <li><NavLink to='/ticket' className='navlink'>Ticket</NavLink></li>
                <li><NavLink to='/contacts' className='navlink'>Contacts</NavLink></li>
                
            </ul>
            <a href="tel:+18938392364" className="tel">+1 893 839-23-64</a>
        </BrowserRouter>
        </div>
    )
}

export default Nav