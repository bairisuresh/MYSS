import React from 'react';
import Headroom from 'react-headroom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Glyphicon } from 'react-bootstrap';
require('styles//Header.scss');
class HeaderComponent extends React.Component {
  render() {
    return (
        <div className="header-component">
            <Headroom className="headroom--pinned">
                <Navbar>
                    <Navbar.Header>
                      <Navbar.Brand>
                            STATE STREET
                      </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav pullRight>
                        <NavItem eventKey={1} href="#"><Glyphicon glyph="search" /></NavItem>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="bell" /></NavItem>
                        <NavItem eventKey={3} href="#">What&#39;s New</NavItem>
                        <NavItem eventKey={3} href="#"><Glyphicon glyph="user" /></NavItem>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
            </Headroom>
        </div>
    );
  }
}
export default HeaderComponent;
