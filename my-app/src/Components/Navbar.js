import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const Styles = styled.div`
  .navbar {
    background-color: #8c8cd9;
  }

  .navbar-brand {
    color: #ffffff;
  }

  .navbar-light .navbar-nav .nav-link {
    color: #ffffff;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" width="100%">
      <Navbar.Brand href="/">Bryant Ng</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <Nav.Link href="/about">About</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/experience">Experiences</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  </Styles>
);
