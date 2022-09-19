import { Container, Col, Row } from "reactstrap"
import SubHeader from "../components/SubHeader"


const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact Us" />
      <Row className="row-content align-items-center">
        <Col sm='4'>
          <h5>Coffee HQ:</h5>
          <address>
            555 Roasters Terrace
            <br/>
            Seattle, WA  98001
          </address>
        </Col>
        <Col>
          <a role='button' className="btn btn-link" href='tel:+12065559876'>
            <i className="fa fa-phone" /> 1-206-555-9876
          </a>
          <br/>
          <a role='button' className="btn btn-link" href='mailto:coughyfumes@notrealemail.com'>
            <i className="fa fa-envelope-o"/> coughyfumes@notrealemail.com
          </a>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs='12'>
          <h2>We appreciate your feedback</h2>
          <hr/>
        </Col>
        <Col md='10'>TBD: ContactForm</Col>
      </Row>
    </Container>
    )
}

export default ContactPage