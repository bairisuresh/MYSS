'use strict';

import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import MotionMenuComponent from './MotionMenuComponent'
import { Col, Row } from 'react-bootstrap/lib'
require('styles//List.scss');

var  ListComponent = React.createClass ({
    handleChange: function(value) {
    this.props.handleChange(value);
    },
  render: function() {
    var that = this;
    return (
      <div className="list-component">
        <ListGroup >
          {
            this.props.data.listdata.map(function(list) {
              return (
                  <ListGroupItem key={list.id}>
                          <Row className="show-grid">
                              <Col sm={5} md={5} onClick={()=> that.handleChange(list)} className="with-icon">{list.activityName}</Col>
                              <Col sm={3} md={3}>{list.activityDate}</Col>
                              <Col sm={4} md={4}><MotionMenuComponent/></Col>
                          </Row>
                   </ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
    );
  }
});

ListComponent.displayName = 'ListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
