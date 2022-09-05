import { LOCATIONS } from '../../app/shared/LOCATIONS'
import { Col, Row } from 'reactstrap'
import LocationCard from './LocationCard'

const LocationList = () => {
  return (
    <Row className='ms-auto'>
      {LOCATIONS.map(location => {
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