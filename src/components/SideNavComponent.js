import React from 'react';
import SideBar from './SliderComponent'
import Body from './BodyComponent'
import InterActiveComponents from './DataGridComponent'
import { ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
    ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
    ExpandableNavToggleButton } from 'react-expandable-nav';

  require('styles//SideNav.scss');
  var currentcontent = <InterActiveComponents />;
  var SideNavComponent = React.createClass({

  getInitialState: function(){
    return {sidebarOpen: false};
  },
  closeHandler: function(){
    this.setState({sidebarOpen: false});
  },
  handleViewSidebar: function(){
  	this.setState({sidebarOpen: !this.state.sidebarOpen});
  },
  handleHomeView: function(){
  	this.setState({sidebarOpen: false});
    currentcontent = <InterActiveComponents />;
  },
  gridData: function(data){
      this.setState({sidebarOpen: false});
      this.setState({data: data});
      currentcontent = <InterActiveComponents data={this.state.data}/>
  },
    render() {
      var menuItems = {
        small: [
                <span className="icon home-icon"></span>,
                <span className="icon analysis-icon"></span>,
                <span className="icon interaction-icon"></span>,
                <span className="icon reports-icon"></span>,
                <span className="icon services-icon"></span>,
                <span className="icon settings-icon"></span>
            ],
        full: [
            <span>Home</span>,
            <span>About us</span>,
            <span>Contact us</span>
        ]
      },navPageStyle = {
          full: {height: "100%",paddingLeft:"56px"},
          small: {height: "100%",paddingLeft:"56px"}
        };
      return (
        <ExpandableNavContainer className="height100">
          <ExpandableNavbar className="sidebarMenu">
            <ExpandableNavMenu>
              <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} onClick={this.handleHomeView}/>
              <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} onClick={this.handleViewSidebar}/>
              <ExpandableNavMenuItem small={menuItems.small[2]} full={menuItems.full[0]} />
              <ExpandableNavMenuItem small={menuItems.small[3]} full={menuItems.full[1]} />
              <ExpandableNavMenuItem small={menuItems.small[4]} full={menuItems.full[0]} />
              <ExpandableNavMenuItem small={menuItems.small[5]} full={menuItems.full[1]} />
            </ExpandableNavMenu>
          </ExpandableNavbar>
          <ExpandableNavToggleButton />
          <ExpandableNavPage fullStyle={navPageStyle.full} smallStyle={navPageStyle.small}>
                <SideBar gridData={this.gridData} closeHandler={this.closeHandler} isOpen={this.state.sidebarOpen} />
                <div className="main-content">
                <InterActiveComponents data={this.state.data}/>
                </div>
          </ExpandableNavPage>
        </ExpandableNavContainer>
      );
    }
  });

module.exports = SideNavComponent;
