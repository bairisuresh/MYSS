'use strict';

import React from 'react';
import { Accordion, Panel } from 'react-bootstrap/lib';
import InnerAccordionComponent from './InnerAccordionComponent'
require('styles//Accordion.scss');

class AccordionComponent extends React.Component {
  recordValue(value) {
      this.props.recordValue(value);
  }
  render() {
    var that = this;
    return (
      <div className="accordion-component">
          <Accordion>
          {
            this.props.accordionArry.map(function(data){
              return(<Panel header={[data.aName]} eventKey={data.eventKey}>
                 <InnerAccordionComponent title={[data.aName]} recordValue={that.recordValue.bind(that)}/>
             </Panel>)
            })
          }
            </Accordion>
      </div>
    );
  }
}

AccordionComponent.displayName = 'AccordionComponent';

// Uncomment properties you need
// AccordionComponent.propTypes = {};
AccordionComponent.defaultProps = {
  accordionArry :[{aName :"Accounting",
    eventKey : "1"},
    {aName :"Custody",
    eventKey : "2"},
    {aName :"Investment RecordKeeping",
    eventKey : "3"}]
};

export default AccordionComponent;
