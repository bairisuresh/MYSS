'use strict';

import React from 'react';

require('styles//HelpNsupport.scss');

class HelpNsupportComponent extends React.Component {
  render() {
    return (
      <div className="helpnsupport-component">
        <img src="/images/home-help-support.png" width="100%" height="100%"/>
      </div>
    );
  }
}

HelpNsupportComponent.displayName = 'HelpNSupportComponent';

// Uncomment properties you need
// HelpNsupportComponent.propTypes = {};
// HelpNsupportComponent.defaultProps = {};

export default HelpNsupportComponent;
