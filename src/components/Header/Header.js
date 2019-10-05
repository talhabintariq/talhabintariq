import React, { Component } from 'react';
import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="navbar-nav ml-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
