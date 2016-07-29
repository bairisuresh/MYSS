'use strict';


import React from 'react'
import DataGrid from '../config/griddle-react'
require('styles//DataGrid.scss');
//import ReactDOM from 'react-dom';

var someData =  [
{
  "id": 0,
  "name": "Nagendra",
  "city": "Hyderabad",
  "state": "Telengana",
  "month":"Jan",
  "country": "United Kingdom",
  "company": "Ovolo",
  "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Koch Becker",
    "city": "Nagendra",
    "state": "New Jersey",
    "month":"Apr",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
  {
    "id": 0,
    "name": "Nagendra",
    "city": "Hyderabad",
    "state": "Telengana",
    "month":"Feb",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
    },
    {
      "id": 0,
      "name": "Nagendra",
      "city": "Hyderabad",
      "state": "Telengana",
      "month":"Mar",
      "country": "United Kingdom",
      "company": "Ovolo",
      "favoriteNumber": 7
      },
      {
        "id": 0,
        "name": "Nagendra",
        "city": "Hyderabad",
        "state": "Telengana",
        "month":"May",
        "country": "United Kingdom",
        "company": "Ovolo",
        "favoriteNumber": 7
        },
        {
          "id": 0,
          "name": "Nagendra",
          "city": "Hyderabad",
          "state": "Telengana",
          "month":"Jun",
          "country": "United Kingdom",
          "company": "Ovolo",
          "favoriteNumber": 7
          },
          {
            "id": 0,
            "name": "Nagendra",
            "city": "Hyderabad",
            "state": "Telengana",
            "month":"Jul",
            "country": "United Kingdom",
            "company": "Ovolo",
            "favoriteNumber": 7
            },
            {
              "id": 0,
              "name": "Nagendra",
              "city": "Hyderabad",
              "state": "Telengana",
              "month":"Aug",
              "country": "United Kingdom",
              "company": "Ovolo",
              "favoriteNumber": 7
              },
              {
                "id": 0,
                "name": "Nagendra",
                "city": "Hyderabad",
                "state": "Telengana",
                "month":"Sep",
                "country": "United Kingdom",
                "company": "Ovolo",
                "favoriteNumber": 7
                },
                {
                  "id": 0,
                  "name": "Nagendra",
                  "city": "Hyderabad",
                  "state": "Telengana",
                  "month":"Oct",
                  "country": "United Kingdom",
                  "company": "Ovolo",
                  "favoriteNumber": 7
                },
                {
                  "id": 0,
                  "name": "Nagendra",
                  "city": "Hyderabad",
                  "state": "Telengana",
                  "month":"Nov",
                  "country": "United Kingdom",
                  "company": "Ovolo",
                  "favoriteNumber": 7
                  },
                  {
                    "id": 0,
                    "name": "Nagendra",
                    "city": "Hyderabad",
                    "state": "Telengana",
                    "month":"Dec",
                    "country": "United Kingdom",
                    "company": "Ovolo",
                    "favoriteNumber": 7
                    }

];


/*
var data    = []
var columns = [
	{ name: 'index', title: '#', width: 150 },
	{ name: 'firstName'},
	{ name: 'lastName' },
	{ name: 'city', width: 200 },
	{ name: 'country', width: 200 },
	{ name: 'email'}
]
*/


var LinkComponent = React.createClass({
  render: function(){
  var url ="#speakers/" + this.props.rowData.state + "/" + this.props.data;
    return <a href={url}>{this.props.data}</a>
  }
});

var HeaderComponent = React.createClass({
  textOnClick: function(e) {
    e.stopPropagation();
  },

  filterText: function(e) {
console.log("sss",this);

    this.props.filterByColumn(e.target.name, this.props.columnName);
    //e.stopPropagation();
  },

  render: function(){
    return (
      <span>
      <button type='button' name="Kapowsin" onClick={this.filterText}>Kapowsin</button>
      </span>
    );
  }
});

var customColumnMetadata = [
{
  "columnName": "id",
  "order": 1,
  "locked": false,
  "visible": true
},
{
  "columnName": "name",
  "order": 2,
  "locked": false,
  "visible": true,
  "customComponent": LinkComponent
},
{
  "columnName": "city",
  "order": 3,
  "locked": false,
  "visible": true,
  "customHeaderComponent": HeaderComponent,
  "customHeaderComponentProps": { color: 'red' }
},
{
  "columnName": "state",
  "order": 4,
  "locked": false,
  "visible": true,
  "customHeaderComponent": HeaderComponent,
  "customHeaderComponentProps": { color: 'blue' }
},
{
  "columnName": "country",
  "order": 5,
  "locked": false,
  "visible": true
},
{
  "columnName": "company",
  "order": 6,
  "locked": false,
  "visible": true
},
{
  "columnName": "favoriteNumber",
  "order":  7,
  "locked": false,
  "visible": true
}
];




class DataGridComponent extends React.Component {
  render() {
		return(
    <div className="datagrid-component">
    <div className="container-flued">
		<section className="row">
			<div className="col-md-8 page-title-holder">
				<h2 className="page-title">Interactive Views</h2>
			</div>
			<div className="col-md-4 text-right">
				<input type="search" className="menu-inner-search-field" placeholder="Search here"/>
			</div>
		</section>
	</div>
    <DataGrid results={someData} showFilter={true} columnMetadata={customColumnMetadata} columns={["name", "city", "state","month", "country"]}/>


		</div>
	);

	/*	return (
      <div className="datagrid-component">
          <DataGrid
    			idProperty='id'
    			dataSource='./sources/griddata.json'
    			pagination={false}
    			columns={columns}
    			style={{height: 700}}
    		/>
      </div>
    ); */
	}
}

DataGridComponent.displayName = 'DataGridComponent';

// Uncomment properties you need
// DataGridComponent.propTypes = {};
// DataGridComponent.defaultProps = {};

export default DataGridComponent;
