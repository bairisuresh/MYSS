'use strict';

var React = require('react')
var DataGrid = require('react-datagrid')
require('react-datagrid/index.css')

var data    = []
var columns = [
	{ name: 'index', title: '#', width: 150 },
	{ name: 'firstName'},
	{ name: 'lastName' },
	{ name: 'city', width: 200 },
	{ name: 'country', width: 200 },
	{ name: 'email'}
]

class DataGridComponent extends React.Component {
  render() {
		return (
      <div className="datagrid-component">
          <DataGrid
    			idProperty='id'
    			dataSource='./sources/griddata.json'
    			pagination={false}
    			columns={columns}
    			style={{height: 700}}
    		/>
      </div>
    );
	}
}

DataGridComponent.displayName = 'DataGridComponent';

// Uncomment properties you need
// DataGridComponent.propTypes = {};
// DataGridComponent.defaultProps = {};

export default DataGridComponent;
