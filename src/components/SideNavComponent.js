import React from 'react';
import { ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
    ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
    ExpandableNavToggleButton } from 'react-expandable-nav';


  var SideNavComponent = React.createClass({
    render() {
      var header = {
        small: <span className="logo">R</span>,
        full: <span>React</span>
      };
      var menuItems = {
        small: [<span className="glyphicon glyphicon-home"></span>, <span className="glyphicon glyphicon-user"></span>],
        full: [<span>Home</span>, <span>About us</span>, <span>Contact us</span>]
      };
      return (
        <ExpandableNavContainer>
          <ExpandableNavbar>
            <ExpandableNavHeader small={header.small} full={header.full} />
            <ExpandableNavMenu>
              <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} url='/home/' />
              <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} url='/about/' />
            </ExpandableNavMenu>
          </ExpandableNavbar>
          <ExpandableNavToggleButton />
          <ExpandableNavPage>
            <p>Hello world</p>
          </ExpandableNavPage>
        </ExpandableNavContainer>
      );
    }
  });

module.exports = SideNavComponent;
