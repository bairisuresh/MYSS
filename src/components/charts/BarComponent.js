'use strict';

import React from 'react';

require('styles/charts/Bar.scss');

class BarComponent extends React.Component {
  render() {

  	var ReactD3 = require('react-d3-components')
  	var BarChart = ReactD3.BarChart;
  	var data = [{
     label: 'somethingA',
     values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
   }];
    return (
      <div className="bar-component">
        <BarChart
        data={data}
        width={395}
        height={200}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      </div>
    );
  }
}

BarComponent.displayName = 'ChartsBarComponent';

// Uncomment properties you need
// BarComponent.propTypes = {};
// BarComponent.defaultProps = {};

export default BarComponent;
