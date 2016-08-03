'use strict';

import React from 'react';
import Dimensions from 'react-dimensions'
import $ from "jquery";

require('styles/charts/Wave.scss');

class WaveComponent extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state={alignment : {width: this.props.containerWidth-60, height: this.props.containerHeight-60},waveValues:[
      {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 8}, {x: 3, y: 5}, {x: 3.5, y: 7}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 8}]
      }
    ]};
    this.firstGraph = this.firstGraph.bind(this);
    this.secondGraph = this.secondGraph.bind(this);
    this.thirdGraph = this.thirdGraph.bind(this);
    this.fourthGraph = this.fourthGraph.bind(this);

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
          that.setState({alignment:stateObj,waveValues:that.state.waveValues});
        });
      });
      /*setInterval(function(){
        console.log("setInterval callback"+(new Date().getUTCSeconds() % 2));
        if(new Date().getUTCSeconds() % 2){
          console.log("setInterval callback odd");
          that.setState({alignment : {width: Math.round($(".wave-component").width()), height: Math.round($(".wave-component").height())},waveValues:[
            {
              label: 'somethingA',
              values: [{x: 0, y: 2}, {x: 1.3, y: 8}, {x: 3, y: 5}, {x: 3.5, y: 7}]
            },
            {
              label: 'somethingB',
              values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 8}]
            }
          ]})
        }else{
          console.log("setInterval callback even");
          that.setState({alignment : {width: Math.round($(".wave-component").width()), height: Math.round($(".wave-component").height())},waveValues:[
            {
              label: 'somethingA',
              values: [{x: 0, y: 0}, {x: 1.3, y: 8}, {x: 3, y: 0}, {x: 3.5, y: 7}]
            },
            {
              label: 'somethingB',
              values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 0}]
            }
          ]})
        }

      },1000)*/
  }

  firstGraph(){
    this.setState({alignment : {width: Math.round($(".wave-component").width()-60), height: Math.round($(".wave-component").height()-60)},waveValues:[
      {
        label: 'somethingA',
        values: [{x: 0, y: 0}, {x: 1.3, y: 8}, {x: 3, y: 0}, {x: 3.5, y: 7}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 0}]
      }
    ]})
  }

  secondGraph(){
    this.setState({alignment : {width: Math.round($(".wave-component").width()-60), height: Math.round($(".wave-component").height()-60)},waveValues:[
      {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 8}, {x: 3, y: 5}, {x: 3.5, y: 7}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 8}]
      }
    ]});
  }

  thirdGraph(){
    this.setState({alignment : {width: Math.round($(".wave-component").width()-60), height: Math.round($(".wave-component").height()-60)},waveValues:[
      {
        label: 'somethingA',
        values: [{x: 1, y: 2}, {x: 1.5, y: 5}, {x: 3, y: 5}, {x: 3.5, y: 7},{x: 3.5, y: 7}]
      },
      {
        label: 'somethingB',
        values: [{x: 1, y: 5}, {x: 1.5, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 8},{x: 3.5, y: 7},]
      }
    ]});
  }

  fourthGraph(){
    this.setState({alignment : {width: Math.round($(".wave-component").width()-60), height: Math.round($(".wave-component").height()-60)},waveValues:[
      {
        label: 'somethingA',
        values: [{x: 0, y: 2}, {x: 1.3, y: 8}, {x: 3, y: 5}, {x: 3.5, y: 7},{x: 4, y: 9}]
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 5}, {x: 1.3, y: 9}, {x: 3, y: 7}, {x: 3.5, y: 8},{x: 4, y: 9}]
      }
    ]});
  }

  render() {

  	var ReactD3 = require('react-d3-components')
    var Dimensions = require('react-dimensions')
  	var AreaChart = ReactD3.AreaChart;
    console.log("waveValues "+this.state.waveValues);
    return (
      <div className="wave-component">
      <div className="wave-component-area">
        {
          <AreaChart
                  data={this.state.waveValues}
                  width={this.state.alignment.width||650}
                  height={this.state.alignment.height||320}
                  margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        }
        </div>
      <div className="wave-component-gb">
        <button type="button" className="btn btn-primary" onClick={this.firstGraph}>Banking</button>
        <button type="button" className="btn btn-primary" onClick={this.secondGraph}>Retail</button>
        <button type="button" className="btn btn-primary" onClick={this.thirdGraph}>Insurance</button>
        <button type="button" className="btn btn-primary" onClick={this.fourthGraph}>Mid Cap</button>
      </div>
      </div>
    );
  }
}

WaveComponent.displayName = 'ChartsWaveComponent';

// Uncomment properties you need
// WaveComponent.propTypes = {};
// WaveComponent.defaultProps = {};

export default Dimensions()(WaveComponent);
