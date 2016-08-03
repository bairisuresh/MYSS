/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
// import createComponent from 'helpers/shallowRenderHelper';

import DataGridComponent from 'components//DataGridComponent.js';

describe('DataGridComponent', () => {
  let component;
  let data = {
    id : "11",
    activityName : "3-12 Top Holding IV pm SLB1",
    activityDate : "19/06/16",
    title : [
        "Accounting",
        "income",
        "3-12 Top Holding IV pm SLB1"
    ]
  };
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<DataGridComponent data = {data}/>);
  });

  it('should have its component name as default className', () => {
      let div = TestUtils.findRenderedDOMComponentWithClass(component, "datagrid-component");
      expect(div).to.exist;
  });
});
