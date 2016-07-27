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
                  distance={-40}
                  width={30}
                  height={30}
                  y={-5}
                  x={150}
                  customStyle={{
                    color: "#fff",
                    textAlign:"center",
                    lineHeight:"50px",
                    backgroundColor: "#16A085",
                    border: "solid 1px #16A085",
                    borderRadius: "50%"
                  }}>
                  <i className="bars"></i>
                  <a href="http://google.com"><i className="home"></i></a>
                  <a href="http://google.com"><i className="heart"></i></a>
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
