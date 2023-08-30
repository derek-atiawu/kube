import React from "react";
import "./Vendor.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ModalVendor from "./modalVendor/ModalVendor";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const Vendor = (props) => {
  const { img, tradename, number, phonenumber } = props;
  const data = { img, tradename, number, phonenumber };
  console.log(number);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // <Container className="vendor">
    //   {' '}
    //   <article className="">
    //     {/* <span className="number">#{number + 1}</span> */}
    //     <img src={img} alt={tradename} />
    //     <h2>{tradename}</h2>
    //     <p>{phonenumber}</p>
    //     {/* <h4>{fname}</h4> */}
    //   </article>
    // </Container>

    <Col
    //style={{ margin: '5px' }}
    >
      <Card
        onClick={handleShow}
        //style={{ width: '18rem' }}
        //style={{height:"350px"}}
      >
        <div
          style={{
            overflow: "hidden",
            height: "300px",
          }}
        >
          {/* <Card.Img
            variant="top"
            src={img}
            style={{ height: '100%', width: '100%' }}
          /> */}
          <Image
            src={img}
            fluid
            style={{ height: "100%", width: "100%" }}
            className="img-fluid"
          />
          ;
        </div>
        <Card.Body>
          <Card.Title>{tradename}</Card.Title>
          <Card.Text>{phonenumber}</Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Vendor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalVendor data={data} />
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default Vendor;
