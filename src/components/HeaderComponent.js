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
                    <a href="javascript:void(0);" className="menu-icon"></a>
                      <Navbar.Brand>
                            <img src="images/logo@2x.png" alt="StateStreet"/>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav pullRight>
                        <NavItem eventKey={1} href="#"><span className="icon header-search-icon"></span></NavItem>
                        <NavItem eventKey={2} href="#"><span className="icon header-bell-icon"></span></NavItem>
                        <NavItem eventKey={3} href="#"><span>What&#39;s New</span></NavItem>
                        <NavItem eventKey={3} href="#"><span className="icon header-user-icon"></span></NavItem>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
            </Headroom>
        </div>
    );
  }
}
export default HeaderComponent;
