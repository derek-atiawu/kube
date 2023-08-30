import React from "react";
import { Card, Col, Image } from "react-bootstrap";

function ModalVendor(props) {
  const data = props.data;
  // data.img,
  // data.name,
  // data.tradename,
  // data.phonenumber,
  // data.location,

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   const vendor = {
  //     name: name,
  //     tradename: tradename,
  //     phonenumber: phonenumber,
  //     image: image,
  //     location: location,
  //   };
  //   console.log(vendor);
  // };

  return (
    <div>
      <Col
      //style={{ margin: '5px' }}
      >
        <Card>
          <div
            style={{
              overflow: "hidden",
              height: "300px",
            }}
          >
            <Image
              src={data.img}
              className="img-fluid"
              style={{ height: "100%", width: "100%" }}
            />
            ;
          </div>
          <Card.Body>
            <Card.Title>{data.tradename}</Card.Title>
            <Card.Text>{data.phonenumber}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default ModalVendor;
