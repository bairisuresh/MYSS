'use strict';

import React from 'react';

require('styles//TypesFs.scss');

class TypesFsComponent extends React.Component {
  render() {
    return (
      <div className="typesfs-component">
        <img src="/images/home-accordion.png" width="100%" height="100%"/>
      </div>
    );
  }
}

TypesFsComponent.displayName = 'TypesFSComponent';

// Uncomment properties you need
// TypesFsComponent.propTypes = {};
// TypesFsComponent.defaultProps = {};

export default TypesFsComponent;
