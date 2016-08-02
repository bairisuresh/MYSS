'use strict';

import React from 'react'
import DataGrid from '../config/griddle-react'
import BreadCrumb from './BCrumbComponent'
require('styles//DataGrid.scss');
//import ReactDOM from 'react-dom';
import DropDownComponent from './DropDownComponent';

var gridData;
var userData;

var reqGridData;
var reqUserData;

var  DataGridComponent = React.createClass ({
  getInitialState: function(){
      return {
       data: ""
    };
  },
  loadListData: function() {
    $.ajax({
      url: './sources/griddata.json',
      dataType: 'json',
      success: function(data) {
        gridData = data;
        reqGridData = gridData.FundGroups.FundGroup;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
    $.ajax({
      url: './sources/userDetails.json',
      dataType: 'json',
      success: function(data) {
        userData = data;
        reqUserData = userData.DataResponse.Rows.Row;

      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });

  },
  componentDidMount: function() {
    this.loadListData();
  },
  handleChange: function(value){

  var reqData = $.grep(gridData.FundGroups.FundGroup, function(obj) {
      return obj.id === value[0].id;
  });

  this.filterData(reqData);

  },
  filterData:function(reqData){
var fundData = reqData[0].memberList.Funds.Fund;//this.state.reqGridData;
var fundUsersData = [];
var fundUserData;
 if(fundData){
   $(fundData).each(function(key,fundObj){
    fundUserData =  $.grep(reqUserData,function(userObj){

        return fundObj.id === userObj.Fund;

      })

      $(fundUserData).each(function(k,obj){

        fundUsersData.push(obj);

      })

   })

   this.setState({ reqGridData: fundUsersData});

 }

  },
  render() {
  	var that = this;
  	console.log("Interactive compu ",this.props.data);
		return(
    <div className="datagrid-component">

    <div className="container-flued">
		<section className="row page-title-holder">
			<div className="col-md-8">
				<h2 className="page-title">Interactive Views</h2>
			</div>
			<div className="col-md-4 text-right">
				<input type="search" className="menu-inner-search-field" placeholder="Search here"/>
			</div>
		</section>
		<section className="row">
			<div className="col-md-12">
				<div className="grid-boxes-holder">
					<article className=" row">
						<div className="col-md-7">
							<BreadCrumb titles={that.props.data.title}/>
						</div>
						<div className="col-md-5 clearfix">
							<section className="pull-left">
								<span className="modified-date">Last Modified: 20 July 2016</span>
							</section>
							<section className="text-right">
								<ul className="list-inline icons-list">
									<li>
										<a href="javascript:void(0);" className="icon setting-icon"></a>
									</li>
									<li>
										<a href="javascript:void(0);" className="icon download-icon"></a>
									</li>
									<li>
										<a href="javascript:void(0);" className="icon refresh-icon"></a>
									</li>
									<li>
										<a href="javascript:void(0);" className="icon print-icon"></a>
									</li>
									<li>
										<a href="javascript:void(0);" className="icon dup-icon"></a>
									</li>
									<li>
										<a href="javascript:void(0);" className="icon save-icon"></a>
									</li>
								</ul>
							</section>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section className="row">
			<div className="col-md-6">
				<DropDownComponent handleChange={this.handleChange}/>
			</div>
		</section>

        <DataGrid results={this.state.reqGridData} showSettings={true}
        sortAscendingComponent={<span className="fa fa-sort-alpha-asc"></span>}
      sortDescendingComponent={<span className="fa fa-sort-alpha-desc"></span>}
        showFilter={true} columns={["Fund","Asset Class","Security Name","CUSIP#","Shares/Par","Base Total Market Value","Local Trade Market Value","OTC Record Type","Trade Source Name","Underlying Country Code","Underaying Susip Number","Base Total Cost","Currency Code","Base Premium Amount","month"]}/>
		</div>
	</div>

	);
	}
});

DataGridComponent.displayName = 'DataGridComponent';

export default DataGridComponent;
