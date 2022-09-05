import { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import LocationsList from '../features/locations/LocationsList'
import LocationDetail from '../features/locations/LocationDetail'
import { selectLocationById } from "../features/locations/locationsSlice"

const LocationDirectoryPage = () => {
  const [locationId, setLocationId] = useState(0)
  // locationDetail expects a location object:
  const selectedLocation = selectLocationById(locationId)

  return (
    <Container>
      <Row>
        <Col sm='5' md='7'>
        {/* pass locationId to locationList as a prop */}
          <LocationsList setLocationId={setLocationId}/>
        </Col>
        <Col sm='7' md='5'>
          <LocationDetail location={selectedLocation}/>
        </Col>
      </Row>
    </Container>
  )
}

export default LocationDirectoryPage