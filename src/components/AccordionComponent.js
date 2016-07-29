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
    return (
      <div className="accordion-component">
          <Accordion>
             <Panel header="Accounting" eventKey="1">
                 <InnerAccordionComponent recordValue={this.recordValue.bind(this)}/>
             </Panel>
             <Panel header="Custody" eventKey="2">
                 <InnerAccordionComponent recordValue={this.recordValue.bind(this)}/>
             </Panel>
             <Panel header="Investment RecordKeeping" eventKey="3">
                 <InnerAccordionComponent recordValue={this.recordValue.bind(this)}/>
             </Panel>
            </Accordion>
      </div>
    );
  }
}

AccordionComponent.displayName = 'AccordionComponent';

// Uncomment properties you need
// AccordionComponent.propTypes = {};
// AccordionComponent.defaultProps = {};

export default AccordionComponent;
