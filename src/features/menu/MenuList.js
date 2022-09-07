import { Row, Col } from "reactstrap"
import Menu from "./Menu"
import { selectAllMenuItems } from "./menuSlice"

const MenuList = () => {
  const items = selectAllMenuItems()
  return (
    <Col className="mt-4">
      <Row>
        {items.map((item) => {
          return (
            <div className="d-flex mb-5" key={item.id}>
              <Menu item={item}/>
            </div>
          )
        })}
      </Row>
    </Col>
  )
}

export default MenuList