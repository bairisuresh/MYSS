import React from 'react';
import TabsComponent from './TabsComponent'
import AccordionComponent from './AccordionComponent'

require('styles//Slider.scss');
var SideBar = React.createClass({
  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
      	  <TabsComponent />
          <AccordionComponent />
       </div>
    );
  }
});
export default SideBar
