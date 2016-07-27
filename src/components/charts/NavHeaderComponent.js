'use strict';

import React from 'react';

require('styles/charts/NavHeader.scss');

class NavHeaderComponent extends React.Component {
  render() {
    return (
      <div className="navheader-component">
        <nav>
        	<div>Portfolio</div>
        	<div>Daily Perfromance</div>
        	<div>Intraday Cash</div>
        	<div>Exposure</div>
        	<div>Delores</div>
        	<div>Canticus</div>
        </nav>
        <hr/>
      </div>
    );
  }
}

NavHeaderComponent.displayName = 'ChartsNavHeaderComponent';

// Uncomment properties you need
// NavHeaderComponent.propTypes = {};
// NavHeaderComponent.defaultProps = {};

export default NavHeaderComponent;
