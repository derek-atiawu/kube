import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const navigate = useNavigate();
  const handleBrandClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "green", fontWeight: "bolder" }}
            onClick={handleBrandClick}
          >
            <img
              style={{ borderRadius: "20px" }}
              alt=""
              src="..//images/kubelogo1.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Kube<span style={{ color: "gold" }}>Online</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/environment");
                }}
              >
                Support Clean Environment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
