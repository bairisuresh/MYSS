'use strict';

import React from 'react';
import $ from "jquery";

require('styles/charts/BarPn.scss');
import Dimensions from 'react-dimensions'

class BarPnComponent extends React.Component {
  constructor(props,context){
    super(props,context); 
    this.state={width: this.props.containerWidth-60, height: this.props.containerHeight-60};
  }
  updateDimensions(callback) {
      callback({width: Math.round($(".barpn-component").width()), height: Math.round($(".barpn-component").height())});
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
	    label: 'Bottom 5 performers',
	    values: [{x: 'Wed', y: -2}, {x: 'Thur', y: -4}, {x: 'Fri', y: 30}]
	}];

    return (
      <div className="barpn-component">
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

BarPnComponent.displayName = 'ChartsBarPNComponent';

// Uncomment properties you need
// BarPnComponent.propTypes = {};
// BarPnComponent.defaultProps = {};

export default Dimensions()(BarPnComponent);
