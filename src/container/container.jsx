import React from 'react';
import Nav from './nav/nav';
import Offer from './offer/offer';
import './container.css'

function Container(){
    return(
       <div className='container'>
       <Nav />
       <Offer/>
       </div>
    )
}

export default Container