import React from 'react';
import SideBar from './SliderComponent'
import Content from './SliderContentComponent'
import { ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
    ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
    ExpandableNavToggleButton } from 'react-expandable-nav';

  require('styles//SideNav.scss');
  var SideNavComponent = React.createClass({
  getInitialState: function(){
    return {sidebarOpen: false};
  },
  handleViewSidebar: function(){
  	this.setState({sidebarOpen: !this.state.sidebarOpen});
  },
    render() {
      var menuItems = {
        small: [
                <span className="glyphicon glyphicon-home"></span>,
                <span className="glyphicon glyphicon-user"></span>,
                <span className="glyphicon glyphicon-home"></span>,
                <span className="glyphicon glyphicon-home"></span>,
                <span className="glyphicon glyphicon-home"></span>,
                <span className="glyphicon glyphicon-home"></span>
            ],
        full: [
            <span>Home</span>,
            <span>About us</span>,
            <span>Contact us</span>
        ]
      };
      return (
        <ExpandableNavContainer>
          <ExpandableNavbar>
            <ExpandableNavMenu>
              <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} onClick={this.handleViewSidebar}/>
              <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} onClick={this.handleViewSidebar}/>
              <ExpandableNavMenuItem small={menuItems.small[2]} full={menuItems.full[0]} onClick={this.handleViewSidebar}/>
              <ExpandableNavMenuItem small={menuItems.small[3]} full={menuItems.full[1]} onClick={this.handleViewSidebar}/>
              <ExpandableNavMenuItem small={menuItems.small[4]} full={menuItems.full[0]} onClick={this.handleViewSidebar}/>
              <ExpandableNavMenuItem small={menuItems.small[5]} full={menuItems.full[1]} onClick={this.handleViewSidebar}/>
            </ExpandableNavMenu>
          </ExpandableNavbar>
          <ExpandableNavToggleButton />
          <ExpandableNavPage>
                <SideBar isOpen={this.state.sidebarOpen} />
                <Content isOpen={this.state.sidebarOpen} />
          </ExpandableNavPage>
        </ExpandableNavContainer>
      );
    }
  });

module.exports = SideNavComponent;
