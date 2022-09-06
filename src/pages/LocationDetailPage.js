import { Container, Row } from "reactstrap"
import { useParams } from "react-router-dom"
import { selectLocationById } from "../features/locations/locationsSlice"
import LocationDetail from '../features/locations/LocationDetail'
import CommentsList from "../features/comments/CommentsList"

const CampsiteDetailPage = () => {
  const { locationId } = useParams()
  const location = selectLocationById(locationId)

  return (
    <Container>
      <Row>
        <LocationDetail location={location} />
        <CommentsList locationId={locationId} />
      </Row>
    </Container>
  )
}

export default CampsiteDetailPage