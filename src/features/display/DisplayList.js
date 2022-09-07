import { Row, Col } from "reactstrap"
// import DisplayCard from "./DisplayCard"
import AnimatedDisplayCard from "./AnimatedDisplayCard"
import { selectFeaturedLocation } from "../locations/locationsSlice"
import { selectFeaturedPromotion } from "../promotions/promotionSlice"
import { selectFeaturedMenuItem } from "../menu/menuSlice"

const DisplayList = () => {
  const items = [selectFeaturedLocation(), selectFeaturedPromotion(), selectFeaturedMenuItem()]

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <AnimatedDisplayCard item={item} />
          </Col>
        )
      })}
    </Row>
  )
}

export default DisplayList