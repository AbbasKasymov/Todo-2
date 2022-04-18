import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Main Page
        </Link>
        <Nav className="me-auto">
          <Link to="/add-todo" className="nav-link">
            Add Todo
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navibar;
