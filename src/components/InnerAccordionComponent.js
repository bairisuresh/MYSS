'use strict';

import React from 'react';

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
  render: function() {
    return (
      <div className="main">
        <Section title="Income">
        </Section>
        <Section title="Positions">
        </Section>
        <Section title="Trades">
        </Section>
      </div>
    );
  }
});

InnerAccordionComponent.displayName = 'InnerAccordionComponent';

// Uncomment properties you need
// InnerAccordionComponent.propTypes = {};
// InnerAccordionComponent.defaultProps = {};

export default InnerAccordionComponent;
