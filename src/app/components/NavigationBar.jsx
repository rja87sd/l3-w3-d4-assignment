// Credit to ChatGPT for comments and assistance.
'use client';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* Container for navbar content */}
      <Container>
        {/* Navbar brand with link to home page */}
        <Navbar.Brand href="/">Easy Cooking</Navbar.Brand>
        {/* Toggle button for collapsing navbar on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation links aligned to the right */}
          <Nav className="me-auto">
            {/* Home link */}
            <Nav.Link href="/">Home</Nav.Link>
            {/* About link */}
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}