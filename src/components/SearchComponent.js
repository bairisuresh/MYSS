'use strict';

import React from 'react';

require('styles//Search.scss');

class SearchComponent extends React.Component {
  render() {
    return (
      <div className="search-component">
        <span className="pull-left home">Home</span>
        <div className="pull-right search">
        	<input placeholder="Search here" type="search"/>
        </div>
      </div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
