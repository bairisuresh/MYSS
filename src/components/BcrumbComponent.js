'use strict';

import React from 'react';

import Breadcrumb from 'react-bootstrap/lib/Breadcrumb'
import BreadcrumbItem from 'react-bootstrap/lib/BreadcrumbItem'

require('styles//Bcrumb.scss');

class BcrumbComponent extends React.Component {
  render() {
    return (
      <Breadcrumb className="list-inline select-box-list">
		<BreadcrumbItem >
			<select>
				<option>{this.props.titles[0]}</option>
			</select>
		</BreadcrumbItem>
		<BreadcrumbItem>
			<select>
				<option>{this.props.titles[1]}</option>
			</select>
		</BreadcrumbItem>
		<BreadcrumbItem>
			<select>
				<option>{this.props.titles[2]}</option>
			</select>
		</BreadcrumbItem>
	</Breadcrumb>
    );
  }
}

BcrumbComponent.displayName = 'BCrumbComponent';

// Uncomment properties you need
// BcrumbComponent.propTypes = {};
// BcrumbComponent.defaultProps = {};

export default BcrumbComponent;
