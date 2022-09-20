import { Row, Col } from "reactstrap"
import Coffee from "./Coffee"
import { selectAllCoffeeItems } from "./coffeeSlice"

const CoffeeList = ({ item }) => {
  const coffees = selectAllCoffeeItems()
  return (
    <Col className="mt-10">
      <Row>
        {/* <img src={coffeeImg} alt="coffee" style={{ height: '200px' }} /> */}
        {coffees.map((coffee) => {
          return (
            coffee && (
              <div className="d-flex mb-5" key={coffee.id}>
                <Coffee coffee={coffee}/>
              </div>
            )
          )
        })}
      </Row>
    </Col>
  )
}

export default CoffeeList