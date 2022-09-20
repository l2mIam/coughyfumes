import { Row, Col } from "reactstrap"
import Espresso from "./Espresso"
import { selectAllEspressoItems } from "./coffeeSlice"

const CoffeeList = ({ espresso }) => {
  const espressos = selectAllEspressoItems()
  return (
    <Col className="mt-10">
      <Row>
        {espressos.map((espresso) => {
          return (
            espresso && (
              <div className="d-flex mb-5" key={espresso.id}>
                <Espresso espresso={espresso}/>
              </div>
            )
          )
        })}
      </Row>
    </Col>
  )
}

export default CoffeeList