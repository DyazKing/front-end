import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBarComponents() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to="/" className='nav-link'>React Redux App</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/users" className='nav-link'>Users</Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
