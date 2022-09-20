import { Row, Col, Container } from "reactstrap"
import SubHeader from "../components/SubHeader"
import MenuList from "../features/menu/MenuList"
import CoffeeList from "../features/coffee/CoffeeList"
import EspressoList from "../features/coffee/EspressoList"
import '../App.css'
const MenuPage = () => {
  return (
    <Container>
      <SubHeader current="Menu"/>
      <Row className="row-content coffee bg-img">
        <Col xs='12' className="">
          <h3 className="text-img-light text-img-header">Coffee</h3>
        </Col>
        <CoffeeList />
      </Row>
      <Row className="row-content espresso bg-img">
        <Col xs='12'>
          <h3 className="text-img-dark text-img-header-dark">Espresso</h3>
        </Col>
        <EspressoList />
      </Row>
      <Row className="row-content">
        <Col xs='12'>
          <h3>Solid Fud</h3>
        </Col>
        <MenuList />
      </Row>
    </Container>
  )
}

export default MenuPage