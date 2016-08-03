'use strict';

import React from 'react';
import ListData from './ListDataComponent'
import ihelper from 'immutability-helper';
require('styles//InnerAccordion.scss');

var Section = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return (
      <div className={this.state.class}>
        <button>toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

var InnerAccordionComponent = React.createClass({
    handleChange: function(value) {
        this.props.recordValue(value);
    },
  render: function() {
    var that = this;
    return (
      <div className="main">
       {
        this.props.iaccordionArry.map(function(data){
          var title = ihelper(that.props.title,{$push:[data.iaName]});
          return(<Section title={data.iaName}>
              <ListData titleArray={title} handleChange={that.handleChange.bind(that)} title={data.iaName}/>
          </Section>)
        })
      }
      </div>
    );
  }
});

InnerAccordionComponent.displayName = 'InnerAccordionComponent';

// Uncomment properties you need
// InnerAccordionComponent.propTypes = {};
InnerAccordionComponent.defaultProps = {
  iaccordionArry :[{iaName :"income",
    ieventKey : "1"},
    {iaName :"positions",
    ieventKey : "2"},
    {iaName :"trades",
    ieventKey : "3"}]
};

export default InnerAccordionComponent;
