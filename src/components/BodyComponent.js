'use strict';

import React from 'react';
import Search from './SearchComponent'
import NavChart from './charts/NavComponent'
import AItems from './ActiveItemsComponent'
require('styles//Body.scss');

class BodyComponent extends React.Component {
  render() {
    return (
      <div className="body-component">
       	<Search/>
       	<div className="body-first-row">
       		<NavChart/>
       		<AItems/>
       	</div>
      </div>
    );
  }
}

BodyComponent.displayName = 'BodyComponent';

// Uncomment properties you need
// BodyComponent.propTypes = {};
// BodyComponent.defaultProps = {};

export default BodyComponent;
