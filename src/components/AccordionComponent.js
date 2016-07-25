'use strict';

import React from 'react';
import { Accordion, Panel } from 'react-bootstrap/lib';
require('styles//Accordion.scss');

class AccordionComponent extends React.Component {
  render() {
    return (
      <div className="accordion-component">
          <Accordion>
             <Panel header="Accounting" eventKey="1">
             sfdfdsfdsfdsf
             </Panel>
             <Panel header="Custody" eventKey="2">
             sdfdsfdsfdsfdsfdsf
             </Panel>
             <Panel header="Investment Record Keeping" eventKey="3">
             sfsdfdsfdsfdsfdfs
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
