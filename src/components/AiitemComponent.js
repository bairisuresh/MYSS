'use strict';

import React from 'react';
import Image from './ImageBgComponent';

require('styles//Aiitem.scss');

class AiitemComponent extends React.Component {
  render() {
      if (this.props.item){
        return (
                <div className="aiitem-component row">
          			<div className="col-md-2"><Image image={this.props.item.image}/></div>
          		  	<div className="col-md-6">
          		  		{this.props.item.type}
          		  	</div>
          		  	<div className="col-md-2">
          		  		{this.props.item.date}
          		  	</div>
                </div>
            );
        }else {
            return (
                <div className="aiitem-component__nodata row"><h1>Nothing to display</h1></div>
            );
        }

  }
}

AiitemComponent.displayName = 'AIItemComponent';

// Uncomment properties you need
// AiitemComponent.propTypes = {};
// AiitemComponent.defaultProps = {};

export default AiitemComponent;
