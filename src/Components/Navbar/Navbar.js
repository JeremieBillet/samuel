import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default function MyNavbar() {



  return (
    <>
      <br /><br />

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">Vignoble Rousteau - Rullaud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/pineau">Pineau</Nav.Link>
          <Nav.Link href="/cognac">Cognac</Nav.Link>
          <Nav.Link href="/soft">Jus/Soft</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/tarif">Tarif</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
}
