'use strict';

import React from 'react';

require('styles//TradeNews.scss');

class TradeNewsComponent extends React.Component {
  render() {
    return (
      <div className="tradenews-component">
        <img src="/images/home-resources.png" width="100%" height="100%"/>
      </div>
    );
  }
}

TradeNewsComponent.displayName = 'TradeNewsComponent';

// Uncomment properties you need
// TradeNewsComponent.propTypes = {};
// TradeNewsComponent.defaultProps = {};

export default TradeNewsComponent;
