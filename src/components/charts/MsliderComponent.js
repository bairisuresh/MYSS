'use strict';

import React from 'react';

require('styles/charts/Mslider.scss');

class MsliderComponent extends React.Component {
  render() {
    return (
      <div className="mslider-component">
        <div className="slider-type pull-left">
        	<select>
        		<option>Funds</option>
        	</select>
        </div>
        <div className="month-slider">
        	
        </div>
      </div>
    );
  }
}

MsliderComponent.displayName = 'ChartsMSliderComponent';

// Uncomment properties you need
// MsliderComponent.propTypes = {};
// MsliderComponent.defaultProps = {};

export default MsliderComponent;
