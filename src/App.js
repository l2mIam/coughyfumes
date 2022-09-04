import React from 'react'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import CafeLogo from './app/assets/img/logo.png'
import LocationCard from './features/locations/LocationCard'
import { LOCATIONS } from './app/shared/LOCATIONS'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={CafeLogo} alt='cafe logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <LocationCard location={LOCATIONS[0]} />
    </div>
  );
}

export default App;
