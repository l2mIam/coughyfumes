import React from 'react'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import CafeLogo from './app/assets/img/logo.png'
import LocationDirectoryPage from './pages/LocationDirectoryPage'
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
      <LocationDirectoryPage />
    </div>
  );
}

export default App;
