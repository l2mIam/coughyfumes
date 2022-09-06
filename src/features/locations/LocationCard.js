import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const LocationCard = ({ location }) => {
  const { id, image, name } = location
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg
          width='100%'
          src={image}
          alt={name}
        />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  )
}

export default LocationCard