'use strict';

import React from 'react';
import Menu from 'react-motion-menu'

require('styles//MotionMenu.scss');

class MotionMenuComponent extends React.Component {
  render() {
    return (
              <div className="MotionMenu">
                <Menu
                  direction="horizontal"
                  distance={-28}
                  width={24}
                  height={24}
                  y={-5}
                  x={180}
                  >
                  <i className="bars"><img src="images/list-item-more-icon.svg" alt="" width="24"/></i>
                  <a href="http://google.com"><i className="lock-icon"></i></a>
                  <a href="http://google.com"><i className="share-icon"></i></a>
                  <a href="http://google.com"><i className="refresh-icon"></i></a>
                  <a href="http://google.com"><i className="sheet-icon"></i></a>
                  <a href="http://google.com"><i className="email-icon"></i></a>
                  <a href="http://google.com"><i className="save-icon"></i></a>
                  <a href="http://google.com"><i className="like-icon"></i></a>
                  <a href="http://google.com"><i className="print-icon"></i></a>
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
