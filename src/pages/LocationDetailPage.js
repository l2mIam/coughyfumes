import { Container, Row } from "reactstrap"
import { useParams } from "react-router-dom"
import { selectLocationById } from "../features/locations/locationsSlice"
import LocationDetail from '../features/locations/LocationDetail'
import CommentsList from "../features/comments/CommentsList"
import SubHeader from "../components/SubHeader"

const CampsiteDetailPage = () => {
  const { locationId } = useParams()
  const location = selectLocationById(locationId)

  return (
    <Container>
      <SubHeader current={location.name} detail={true} />
      <Row>
        <LocationDetail location={location} />
        <CommentsList locationId={locationId} />
      </Row>
    </Container>
  )
}

export default CampsiteDetailPage