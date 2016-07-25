'use strict';

import React from 'react';
import TabPanel, { TabStrip } from 'react-tab-panel'
import 'react-tab-panel/index.css'
require('styles//Tabs.scss');

class TabsComponent extends React.Component {
  render() {
    return (
        <TabPanel>
          <div tabTitle="Recent">
            Lorem ipsum Veniam aliquip esse ex nulla anim aliquip et in
            dolore consectetur dolor aliqua dolor consectetur fugiat in Excepteur voluptate.
          </div>

          <div tabTitle="Favorites">
            Lorem ipsum Sunt nisi sint.
          </div>
        </TabPanel>
    );
  }
}

TabsComponent.displayName = 'TabsComponent';

// Uncomment properties you need
// TabsComponent.propTypes = {};
// TabsComponent.defaultProps = {};

export default TabsComponent;
