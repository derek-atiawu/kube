import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Signup() {
  const [name, setName] = useState("");
  const [tradename, setTradename] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const vendor = {
      name: name,
      tradename: tradename,
      phonenumber: phonenumber,
      image: image,
      location: location,
    };
    console.log(vendor);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlainfname">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="name"
            value={name}
            placeholder=" Full Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainlname">
        <Form.Label column sm="2">
          Trade Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="tradename"
            value={tradename}
            placeholder="Your Business Name"
            onChange={(e) => {
              setTradename(e.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainPhoneNumber">
        <Form.Label column sm="2">
          Phone number
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="tel"
            value={phonenumber}
            placeholder="Phone Number"
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainGhanacard">
        <Form.Label column sm="2">
          image
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            value={image}
            placeholder="Ghana Card Number"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlainGhanacard">
        <Form.Label column sm="2">
          Location
        </Form.Label>
        <Col sm="10">
          <Form.Select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
