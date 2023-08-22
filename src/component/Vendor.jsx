import React from 'react';
import './Vendor.css';
import { Container } from 'react-bootstrap';

const Vendor = (props) => {
  const { img, tradename, number, phonenumber } = props;
  console.log(number);
  return (
    <Container fluid className="vendor">
      {' '}
      <article className="">
        {/* <span className="number">#{number + 1}</span> */}
        <img src={img} alt={tradename} />
        <h2>{tradename}</h2>
        <p>{phonenumber}</p>
        {/* <h4>{fname}</h4> */}
      </article>
    </Container>
  );
};

export default Vendor;
