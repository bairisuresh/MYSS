'use strict';

import React from 'react';
import { Accordion, Panel } from 'react-bootstrap/lib';
import InnerAccordionComponent from './InnerAccordionComponent'
require('styles//Accordion.scss');

class AccordionComponent extends React.Component {
  render() {
    return (
      <div className="accordion-component">
          <Accordion>
             <Panel header="Accounting" eventKey="1">
                 <InnerAccordionComponent />
             </Panel>
             <Panel header="Custody" eventKey="2">
                 <InnerAccordionComponent />
             </Panel>
             <Panel header="Investment RecordKeeping" eventKey="3">
                 <InnerAccordionComponent />
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
