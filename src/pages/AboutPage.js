import { Row, Col, Container, Card, CardBody, CardHeader } from "reactstrap"
import SubHeader from "../components/SubHeader"

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current="About Us"/>
      <Row className="row-content">
        <Col sm='6'>
          <h3>Our Mission</h3>
          <p>
            To spread the most aromatice coughy fumes imaginable to the farthest reaches of the globe.
            We strive to be the most greenest and conciencious on the planet.  We are certified top crown organic SCO (Super Certified Organic).
            What set's us apart, is our beans are only harvested at night during a full moon.
            But don't take it from us that our fumes are the best.  Take it from our customers,
            whom we encourage to share their experiences.  Then come visit us for yourself and see what all the hype is about!
          </p>
        </Col>
        <Col sm='6'>
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">January 1, 2000</dd>
                <dt className="col-6">No. of Locations in 2022</dt>
                <dd className="col-6">Four</dd>
                <dt className="col-6">No. of Reviews in 2022</dt>
                <dd className="col-6">4388</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">42</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  We cough, and cough, and cough
                  until we blow our fumes all over the place.
                </p>
                <footer className="blockquote-footer">
                  Loren Milliman,{' '}
                  <cite title="Source Title">
                    "Coughy Fumes Round-a Wold" - Round File Quotes,
                    2022
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs='12'>
          <h3>Menu Items</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutPage