import React from 'react';
import './App.css';
import  Container  from './container/container.jsx';
import  ContainerSection from './containerSection/containerSection.jsx'
import Footer from './footer/Footer';

function App() {
  return(
    <div>
      <header className='header' id='header'>
          <Container />      
      </header>
      <section className='about' id='about'> 
          <ContainerSection/>
      </section>
      <footer className='footer' id='footer'>
          <Footer/>
      </footer>
    </div>
  )
}

export default App;
