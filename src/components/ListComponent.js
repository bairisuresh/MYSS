'use strict';

import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import MotionMenuComponent from './MotionMenuComponent'
require('styles//List.scss');

class ListComponent extends React.Component {
  render() {
    return (
      <div className="list-component">
        <ListGroup>
          {
            this.props.data.listdata.map(function(list) {
              return (
                  <ListGroupItem key={list.id}>
                            {list.activityName},
                            {list.activityDate},
                            <MotionMenuComponent className="motionmenu"/>
                   </ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
    );
  }
}

ListComponent.displayName = 'ListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
