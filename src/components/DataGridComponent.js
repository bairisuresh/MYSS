'use strict';

import React from 'react'
import DataGrid from '../config/griddle-react'
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
        console.log("aaaa",reqUserData);

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

        return fundObj.id === userObj.fund_id;

      })

      $(fundUserData).each(function(k,obj){

        fundUsersData.push(obj);

      })

   })

   this.setState({ reqGridData: fundUsersData});

 }

  },
  render() {
		return(
    <div className="datagrid-component">
    <DropDownComponent handleChange={this.handleChange}/>
    <div className="container-flued">
		<section className="row page-title-holder">
			<div className="col-md-8">
				<h2 className="page-title">Interactive Views</h2>
			</div>
			<div className="col-md-4 text-right">
				<input type="search" className="menu-inner-search-field" placeholder="Search here"/>
			</div>
		</section>
	</div>
  <DataGrid results={this.state.reqGridData} showSettings={true}
    sortAscendingComponent={<span className="fa fa-sort-alpha-asc"></span>}
  sortDescendingComponent={<span className="fa fa-sort-alpha-desc"></span>}
    showFilter={true} columns={["fund_id", "fund_name","dual_prcng_bss_cd","nav_per_shr_amt","priorday_to_input_dt_nav_prs","nav_pershr_chg_amt","perc_chg_nav_prs_by_day","tot_nav_amt","perc_total_net_assets","tot_mkt_val_amt","shrs_unt_ots_qty","crncy_cd_base","price_dt"]}/>
		</div>
	);
	}
});

DataGridComponent.displayName = 'DataGridComponent';

export default DataGridComponent;
