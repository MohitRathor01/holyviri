import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pagesCss/HvtHeader.css';

export const HvtHeader = () => {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const handleNavClose = () => setExpanded(false);

  return (
    <Navbar bg="light" expand="lg" className="navbar-light" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={handleNavClose}>
          <img
            src="/images/logo.png"
            alt="Holy Vrindavan Tour shashank"
            className="rounded-circle"
            style={{ maxHeight: '65px', marginRight: '10px', width: "65px" }}
          />
          <h3 className="mb-0 h5">Holy Vrindavan Tour</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto" onSelect={handleNavClose}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" active={pathname === '/'} onClick={handleNavClose}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" active={pathname === '/about'} onClick={handleNavClose}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/destinations" active={pathname === '/destinations'} onClick={handleNavClose}>
                Destinations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" active={pathname === '/contact'} onClick={handleNavClose}>
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
