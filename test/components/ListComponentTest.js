/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
// import createComponent from 'helpers/shallowRenderHelper';

import ListComponent from 'components//ListComponent.js';

describe('ListComponent', () => {
  let component;
  let data = {
      listdata : [
          {
            id : "11",
            activityName : "3-12 Top Holding IV pm SLB1",
            activityDate : "19/06/16",
          }
      ]

  };
  let title = [
      "Accounting",
      "income"
  ];
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ListComponent title = {title} data = {data}/>);
  });

  it('should have its component name as default className', () => {
      let div = TestUtils.findRenderedDOMComponentWithClass(component, "list-component");
      expect(div).to.exist;
  });
});
