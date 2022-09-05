import { Navbar, NavbarBrand } from "reactstrap";
import CoughyLogo from '../app/assets/img/logo.png'

const Header = () => {
  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand href='/'>
        <img src={CoughyLogo} alt='coughy logo' />
      </NavbarBrand>
    </Navbar>
  )
}

export default Header