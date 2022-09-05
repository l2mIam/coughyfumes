import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

const LocationCard = (props) => {
  return (
    <Card>
      <CardImg
        width='100%'
        src={props.location.image}
        alt={props.location.name}
      />
      <CardImgOverlay>
        <CardTitle>{props.location.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

export default LocationCard