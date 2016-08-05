'use strict';

import React from 'react';

require('styles//TypesFs.scss');
var Carousel = require('nuka-carousel');
class TypesFsComponent extends React.Component {
  render() {
    return (
      <div className="typesfs-component">
         <Carousel slidesToShow={3}>
            <div>
            <Carousel className="sample">
                <img src="images/accounting.png"/>
                <img src="images/custody.png"/>
                <img src="images/ifs.png" />
            </Carousel>
            </div>
            <div>
            <Carousel className="sample">
                <img src="images/custody.png"/>
                <img src="images/accounting.png"/>
            </Carousel>
            </div>
            <div>
            <Carousel className="sample">
                <img src="images/ifs.png" />
                <img src="images/irk.png" />
            </Carousel>
            </div>
            <div>
            <Carousel className="sample">
                <img src="images/irk.png" />
                <img src="images/accounting.png"/>
                <img src="images/ifs.png" />
            </Carousel>
            </div>
        </Carousel>
      </div>
    );
  }
}

TypesFsComponent.displayName = 'TypesFSComponent';

// Uncomment properties you need
// TypesFsComponent.propTypes = {};
// TypesFsComponent.defaultProps = {};

export default TypesFsComponent;
