/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
// import createComponent from 'helpers/shallowRenderHelper';

import ActiveItem from 'components//AiitemComponent.js';

describe('AiitemComponent', () => {
  let component;
  let data = {
    image : "check-form.svg",
    type : "Valuation Tool Kit",
    date : "10/07/16"
  };
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ActiveItem item = {data}/>);
  });

  it('should have its component name as default className', () => {
    let div = TestUtils.findRenderedDOMComponentWithClass(component, "aiitem-component");
    expect(div.props.className).toEqual("aiitem-component");
  });

  it('values should be', () => {
    expect(component.props.item.type).to.equal('Valuation Tool Kit');
    expect(component.props.item.date).to.equal('10/07/16');
  });



});
