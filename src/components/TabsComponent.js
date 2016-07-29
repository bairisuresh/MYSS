'use strict';

import React from 'react';
import ListComponent from './ListComponent'
import TabPanel from 'react-tab-panel'
import 'react-tab-panel/index.css'
require('styles//Tabs.scss');

var TabsComponent = React.createClass ({
    // loadListData: function() {
    //   $.ajax({
    //     url: './sources/griddata.json',
    //     dataType: 'json',
    //     success: function(data) {
    //       this.setState({data: data});
    //     }.bind(this),
    //     error: function(xhr, status, err) {
    //       console.error('#GET Error', status, err.toString());
    //     }.bind(this)
    //   });
    // },

    // getInitialState: function(){
    //     return {
    //      data: {
    //         listdata: []
    //      }
    //   };
    // },
    handleChange: function(value) {
        this.props.recordValue(value);
    },
    // componentDidMount: function() {
    //   this.loadListData();
    // },
     render() {
        return (
            <TabPanel>
              <div className="tabs-component" tabTitle="Recent">
                <ListComponent handleChange={this.handleChange.bind(this)} data={this.props.data}/>
              </div>
              <div tabTitle="Favorites">
            //     Lorem ipsum Sunt nisi sint.
              </div>
            </TabPanel>
        );
      }
});

TabsComponent.displayName = 'TabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
