import { Button, Col, Form, Row } from "react-bootstrap";

function Signup() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainfname">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="First Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainlname">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Last Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainPhoneNumber">
        <Form.Label column sm="2">
          Phone number
        </Form.Label>
        <Col sm="10">
          <Form.Control type="tel" placeholder="Phone Number" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainGhanacard">
        <Form.Label column sm="2">
          Ghana Card ID
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Ghana Card Number" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainGhanacard">
        <Form.Label column sm="2">
          Location
        </Form.Label>
        <Col sm="10">
          <Form.Select>
            <option value="Select Location">Select Your Location</option>
            <option value="Greater Accra">Greater Accra</option>
            <option value="Ashanti Region">Ashanti Region</option>
            <option value="Western Region">Western Region</option>
            <option value="Volta Region">Volta Region</option>
            <option value="Eastern Region">Eastern Region</option>
            <option value="Brong Ahafo">Brong Ahafo Region</option>
            <option value="Notern Region">Nothern Region</option>
            <option value="Central Region">Central Region</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
