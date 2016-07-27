'use strict';

import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import MotionMenuComponent from './MotionMenuComponent'
import { Col, Row } from 'react-bootstrap/lib'
require('styles//List.scss');

class ListComponent extends React.Component {
    _this = this;
    constructor() {
      super();
    }
    handleChange(e) {
    //   const title = e.target.value;
    //   this.props.changeTitle(title);
    alert("clicked");
    }
  render() {
    return (
      <div className="list-component">
        <ListGroup onClick={this.handleChange.bind(this)}>
          {
            this.props.data.listdata.map(function(list) {
              return (
                  <ListGroupItem key={list.id}>
                          <Row className="show-grid">
                              <Col sm={1} md={1}></Col>
                              <Col sm={4} md={4} >{list.activityName}</Col>
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
}

ListComponent.displayName = 'ListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
