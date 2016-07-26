'use strict';

import React from 'react';
import Menu from 'react-motion-menu'

require('styles//MotionMenu.scss');

class MotionMenuComponent extends React.Component {
  render() {
    return (
              <div>
                <Menu
                  direction="horizontal"
                  distance={70}
                  width={50}
                  height={50}
                  y={500}
                  x={100}
                  customStyle={{
                    color: "#fff",
                    textAlign:"center",
                    lineHeight:"50px",
                    backgroundColor: "#16A085",
                    border: "solid 1px #16A085",
                    borderRadius: "50%"
                  }}>
                  <i className="bars"></i>  // button
                  <i className="home"></i>
                </Menu>
              </div>
    );
  }
}

MotionMenuComponent.displayName = 'MotionMenuComponent';

// Uncomment properties you need
// MotionMenuComponent.propTypes = {};
// MotionMenuComponent.defaultProps = {};

export default MotionMenuComponent;
