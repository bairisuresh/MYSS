'use strict';

import React from 'react';
import { Accordion, Panel } from 'react';
require('styles//Accordion.scss');

class AccordionComponent extends React.Component {
  render() {
    return (
      <div className="accordion-component">
          <Accordion>
             <Panel header="Collapsible Group Item #1" eventKey="1">
             sfdfdsfdsfdsf
             </Panel>
             <Panel header="Collapsible Group Item #2" eventKey="2">
             sdfdsfdsfdsfdsfdsf
             </Panel>
             <Panel header="Collapsible Group Item #3" eventKey="3">
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
