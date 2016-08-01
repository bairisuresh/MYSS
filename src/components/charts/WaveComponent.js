'use strict';

import React from 'react';
import Dimensions from 'react-dimensions'

require('styles/charts/Wave.scss');

class WaveComponent extends React.Component {
  constructor(props,context){
    super(props,context); 
    this.state={width: this.props.containerWidth-60, height: this.props.containerHeight-60};
  }
  updateDimensions(callback) {
      callback({width: Math.round($(".wave-component").width()), height: Math.round($(".wave-component").height())});
  }
  componentWillMount() {
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
    var Dimensions = require('react-dimensions')
  	var AreaChart = ReactD3.AreaChart;
  	var data = [
      {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 8}, {x: 3, y: 5}, {x: 3.5, y: 7}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 8}]
      }
    ];
    return (
      <div className="wave-component">
      {
        <AreaChart
                data={data}
                width={this.state.width||650}
                height={this.state.height||320}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
      }
      </div>
    );
  }
}

WaveComponent.displayName = 'ChartsWaveComponent';

// Uncomment properties you need
// WaveComponent.propTypes = {};
// WaveComponent.defaultProps = {};

export default Dimensions()(WaveComponent);
