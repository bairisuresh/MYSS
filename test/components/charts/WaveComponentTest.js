/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import WaveComponent from 'components/charts/WaveComponent.js';

describe('WaveComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(WaveComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('wave-component');
  });
});
