/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';
import React from 'react';
// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ListData from 'components//ListDataComponent.js';
import $ from 'jquery';

describe('ListDataComponent', () => {
  let component;
  let fakeData;

  beforeEach(() => {

    /*titleArray => "Accounting" ||"Custody" || "Investment RecordKeeping",
      propTitle => "income" || "positions" || "trades",
    */
    let that = this;
    fakeData = (() => {return {titleArray : ["Accounting","income"],propTitle : "income",handleChangeFun:function(){
    },cClassName : "list-component"}});
    component = TestUtils.renderIntoDocument(<ListData titleArray={fakeData().titleArray}  title={fakeData().propTitle}/>);
  });

  it('ListData Comp exists on Document', () => {
    let div = TestUtils.findRenderedDOMComponentWithClass(component,fakeData().cClassName );
    expect($(div).attr('class')).toEqual(fakeData().cClassName);
  });
});
