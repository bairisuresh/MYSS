'use strict';

import React from 'react';
import NavChartHeader from './NavHeaderComponent'
import MSlider from './MsliderComponent'
import WaveChart from "./WaveComponent"

require('styles/charts/Nav.scss');

class NavComponent extends React.Component {
  render() {
    return (
      <div className="nav-component">
          <NavChartHeader/>
          <div className="left-nav">
            <MSlider/>
            <WaveChart/>
          </div>
          <div className="right-nav">
            
          </div>
      </div>
    );
  }
}

NavComponent.displayName = 'ChartsNavComponent';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
