// import { useState } from "react"
import { Container } from "reactstrap"
import LocationsList from '../features/locations/LocationsList'
// import LocationDetail from '../features/locations/LocationDetail'
// import { selectLocationById } from "../features/locations/locationsSlice"

const LocationDirectoryPage = () => {
  // const [locationId, setLocationId] = useState(0)
  // locationDetail expects a location object:
  // const selectedLocation = selectLocationById(locationId)

  return (
    <Container>
      <LocationsList />
    </Container>
  )
}

export default LocationDirectoryPage