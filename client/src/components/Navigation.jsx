import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, NavbarHeader, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  render () {
    return (
      <Navbar>
        <NavbarHeader>
          <NavbarBrand>
            <a href='#'>React-Bootstrap</a>
          </NavbarBrand>
        </NavbarHeader>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

module.exports = Navigation;
