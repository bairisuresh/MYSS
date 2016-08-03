/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
// import createComponent from 'helpers/shallowRenderHelper';

import InnerAccordionComponent from 'components//InnerAccordionComponent.js';

describe('InnerAccordionComponent', () => {
  let component;
  let title = [
      "Accounting"
  ];
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<InnerAccordionComponent title = {title}/>);
  });

  it('should have its component name as default className', () => {
      let div = TestUtils.findRenderedDOMComponentWithClass(component, "main");
      expect(div).to.exist;
  });
});
