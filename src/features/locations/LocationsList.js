import { Col, Row } from 'reactstrap'
import LocationCard from './LocationCard'
import { selectAllLocations } from './locationsSlice'

// desturcture setLocationId prop passed from LocationDirectoryPage
const LocationList = () => {
  const locations = selectAllLocations()
  return (
    <Row className='ms-auto'>
      {locations.map(location => {
        return (
          <Col md='5' className='m-4' key={location.id}>
            <LocationCard location={location}/>
          </Col>
        )
      })}
    </Row>
  )
}

export default LocationList