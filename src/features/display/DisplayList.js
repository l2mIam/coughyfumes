import { Row, Col } from "reactstrap"
import DisplayCard from "./DisplayCard"
import { selectFeaturedLocation } from "../locations/locationsSlice"
import { selectFeaturedPromotion } from "../promotions/promotionSlice"

const DisplayList = () => {
  const items = [selectFeaturedLocation(), selectFeaturedPromotion()]

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <DisplayCard item={item} />
          </Col>
        )
      })}
    </Row>
  )
}

export default DisplayList