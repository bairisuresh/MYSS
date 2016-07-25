import React from 'react';
import TabsComponent from './TabsComponent'
require('styles//Slider.scss');
var SideBar = React.createClass({
  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
      	  <TabsComponent />
       </div>
    );
  }
});
export default SideBar
