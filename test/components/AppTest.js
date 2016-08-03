/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react';
import expect from 'expect';
import App from 'components/App.js';
import createComponent from 'helpers/shallowRenderHelper';

describe('AppComponent', () => {
  let AppComponent;
  it('AppComponent should match with the given id', () => {
  	AppComponent = createComponent(App);
  	console.log("component id is ",AppComponent.props.id);
  	expect(AppComponent.props.id).toEqual('myssApp',"Equality Check");
  });
});

