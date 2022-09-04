import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

const LocationCard = (props) => {
  return (
    <Card>
      <CardImg
        width='100%'
        src={props.location.image}
        alt={props.location.name}
      />
      <CardTitle>{props.location.name}</CardTitle>
    </Card>
  )
}

export default LocationCard