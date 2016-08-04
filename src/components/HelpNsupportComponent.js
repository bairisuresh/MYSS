'use strict';

import React from 'react';
import TabPanel from 'react-tab-panel';
require('styles/HelpNsupport.scss');

class HelpNsupportComponent extends React.Component {
  render() {
    return (
      <div className="helpnsupport-component">
        <TabPanel className="pannel">
          <div  tabTitle="Help &amp; Support">
            <div className="search-component helpnsupport-body ">
              <div className="search customSearch" >
              	<input placeholder="Search here" type="search"/>
              </div>
            </div>
              <div className="col-md12 helpnsupport-body">
                Mauris quis scelerisque orci
              </div>
              <div className="col-md12 helpnsupport-body">
                Con vallis sem pellentesque sitorem ipsum dolor sit ametntesque lorem ipsum dolor sit amet quis
              </div>
              <div className="col-md12 helpnsupport-body">
                Mauris quis scelerisque orcion vallis sem pellelerisque orci
              </div>
                <div className="layer">
                      <img src="/images/helpnsupport.png" width="100%" height="100%"/>
                </div>
          </div>

          <div tabTitle="What's New">
          </div>
        </TabPanel>
      </div>
    );
  }
}

HelpNsupportComponent.displayName = 'HelpNSupportComponent';

// Uncomment properties you need
// HelpNsupportComponent.propTypes = {};
// HelpNsupportComponent.defaultProps = {};

export default HelpNsupportComponent;
