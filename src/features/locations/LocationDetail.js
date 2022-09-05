import { Card, CardImg, CardText, CardBody, Col } from "reactstrap"

const LocationDetail = ( {location} ) => {
  const { image, name, description } = location
  return (
    <Col md='12' className="m-4">
      <Card>
        <CardImg
          top='true'
          src={image}
          alt={name}
        />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LocationDetail