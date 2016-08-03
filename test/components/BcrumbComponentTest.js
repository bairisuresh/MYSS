/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
// import createComponent from 'helpers/shallowRenderHelper';

import BcrumbComponent from 'components//BcrumbComponent.js';

describe('BcrumbComponent', () => {
  let component;
  let title = [
      "Accounting",
      "income",
      "3-12 Top Holding IV pm SLB1"
  ]
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<BcrumbComponent titles = {title}/>);
  });

  it('should have its component name as default className', () => {
      let div = TestUtils.findRenderedDOMComponentWithClass(component, "list-inline");
      expect(div).to.exist;
  });
});
