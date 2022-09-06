import { Container } from "reactstrap"
import LocationsList from '../features/locations/LocationsList'
import SubHeader from "../components/SubHeader"

const LocationDirectoryPage = () => {

  return (
    <Container>
      <SubHeader current='Directory' />
      <LocationsList />
    </Container>
  )
}

export default LocationDirectoryPage