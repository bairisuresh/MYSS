'use strict';

import React from 'react';

require('styles//ImageBg.scss');

class ImageBgComponent extends React.Component {
  render() {
  	var imagebg ={
      backgroundImage: 'url("../images/'+this.props.image + '")'
  	};
    return (
      <div style={imagebg} className="imagebg-component">
      </div>
    );
  }
}

ImageBgComponent.displayName = 'ImageBGComponent';

// Uncomment properties you need
// ImageBgComponent.propTypes = {};
// ImageBgComponent.defaultProps = {};

export default ImageBgComponent;
