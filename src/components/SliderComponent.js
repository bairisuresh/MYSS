import React from 'react';
import TabsComponent from './TabsComponent'
import AccordionComponent from './AccordionComponent'
import DataGridComponent from './DataGridComponent'

require('styles//Slider.scss');
var SideBar = React.createClass({
  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
      	  <TabsComponent />
          <AccordionComponent />
          <DataGridComponent/>
       </div>
    );
  }
});
export default SideBar
