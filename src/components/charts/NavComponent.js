'use strict';

import React from 'react';
import NavChartHeader from './NavHeaderComponent'
import MSlider from './MsliderComponent'
import WaveChart from "./WaveComponent"
import BarChart from "./BarComponent"
import BarPnChart from "./BarPnComponent"

require('styles/charts/Nav.scss');

class NavComponent extends React.Component {
  render() {
    return (
      <div className="nav-component">
          <NavChartHeader className="chart-nav-head"/>
          <div className="chart-nav-body">
          <div className="left-nav">
            <MSlider/>
            <WaveChart/>
          </div>
          <div className="right-nav">
            <BarChart/>
            <BarPnChart/>
          </div>
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
