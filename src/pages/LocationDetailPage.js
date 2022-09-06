import { Container, Row } from "reactstrap"
import { useParams } from "react-router-dom"
import { selectLocationById } from "../features/locations/locationsSlice"
import LocationDetail from '../features/locations/LocationDetail'

const CampsiteDetailPage = () => {
  const { locationId } = useParams()
  const location = selectLocationById(locationId)

  return (
    <Container>
      <Row>
        <LocationDetail location={location} />
      </Row>
    </Container>
  )
}

export default CampsiteDetailPage