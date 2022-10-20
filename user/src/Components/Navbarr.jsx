import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import { Button } from "react-bootstrap";

const Navbarr = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>NAYA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={2}>{user && user.displayName}</Nav.Link>
              <img
                src={ user.photoURL}
                className="rounded-circle"
                alt="Cinque Terre"
                width="50"
                height="40"
              />
            </Nav>
            <Button
              className="btn btn-space"
              variant="primary"
              onClick={handleLogout}
            >
              Log out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar />
    </div>
  );
}

export default Navbarr;
