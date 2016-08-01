'use strict';

import React from 'react';

require('styles/charts/Bar.scss');
import Dimensions from 'react-dimensions'

class BarComponent extends React.Component {
  constructor(props,context){
    super(props,context); 
    this.state={width: this.props.containerWidth-60, height: this.props.containerHeight-60};
  }
  updateDimensions(callback) {
      callback({width: Math.round($(".bar-component").width()), height: Math.round($(".bar-component").height())});
  }
  componentDidMount() {
      var that = this;
      window.addEventListener("resize", function(){
        that.updateDimensions(function(stateObj){
          that.setState(stateObj);
        });
      });
  }
  render() {

  	var ReactD3 = require('react-d3-components')
  	var BarChart = ReactD3.BarChart;
  	var data = [{
     label: 'Top 5 performers',
     values: [{x: 'Wed', y: 20}, {x: 'Thur', y: 60}, {x: 'Fri', y: 80}]
   }];
    return (
      <div className="bar-component">
      {
        <BarChart
        data={data}
        width={this.state.width||250}
        height={this.state.height||200}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      }
      </div>
    );
  }
}

BarComponent.displayName = 'ChartsBarComponent';

// Uncomment properties you need
// BarComponent.propTypes = {};
// BarComponent.defaultProps = {};

export default Dimensions()(BarComponent);
