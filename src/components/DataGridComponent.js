'use strict';


import React from 'react'
import DataGrid from '../config/griddle-react'
//require('griddle-react/css/griddle.css')
//import ReactDOM from 'react-dom';

var gridData = [
              {
                "id": "J638",
                "name": "SAF - GLOBAL ALPHA (USD) FUND",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-07-25",
                "month":"Jul"

              },
              {
                "id": "J617",
                "name": "FUND CLOSED ON 06/28/2010",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-05-25",
                "month":"May"
              },
              {
                "id": "SW7Y",
                "name": "CALPERS",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-01-25",
                "month":"Jan"
              },
              {
                "id": "CH0C",
                "name": "RUSSELL US CORE EQUITY FUND",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-02-25",
                "month":"Feb"
              },
              {
                "id": "C7U5",
                "name": "COL VAR PORT - SMALL CAP VALUE",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-03-25",
                "month":"Mar"
              },
              {
                "id": "SK80",
                "name": "FUND CLOSED ON 04/04/2014",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-04-25",
                "month":"Apr"
              },
              {
                "id": "SJ38",
                "name": "CALPERS",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-05-25",
                "month":"May"
              },
              {
                "id": "N4N1",
                "name": "FUND CLOSED ON 10/7/2011",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-06-25",
                "month":"Jun"
              },
              {
                "id": "DD01",
                "name": "DB-X TRACKERS MSCI WORLD",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-08-25",
                "month":"Aug"
              },
              {
                "id": "0AXC",
                "name": "FUND CLOSED ON 24/06/2011",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-09-25",
                "month":"Sep"
              },
              {
                "id": "UAG5",
                "name": "ADB/BLACKROCK FIN MGMT",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-10-25",
                "month":"Oct"
              },
              {
                "id": "SCWG",
                "name": "BLACKROCK GLOBAL EQUITY",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-11-25",
                "month":"Nov"
              },
              {
                "id": "Q3VD",
                "name": "FULLERTON(PRIVATE)LIMITED",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-12-25",
                "month":"Dec"
              },
              {
                "id": "Q2RL",
                "name": "WSSP - CURRENCY HEDGED FUND",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-07-25",
                "month":"Jul"
              },
              {
                "id": "Q2DY",
                "name": "IB RREEF GLB (EX-AUS) PROP SEC",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-06-25",
                "month":"Jun"
              },
              {
                "id": "FE6W",
                "name": "THE ROLLS ROYCE PENSION FUND",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-07-25",
                "month":"Jul"
              },
              {
                "id": "ABNK",
                "name": "FUND CLOSED ON 20/09/2011",
                "_dual_prcng_bss_cd": "D",
                "_nav_per_shr_amt": "104.0108",
                "_priorday_to_input_dt_nav_prs": "103.9282",
                "_nav_pershr_chg_amt": ".08",
                "_perc_chg_nav_prs_by_day": ".08",
                "_tot_nav_amt": "436854.46",
                "_perc_total_net_assets": "1.50164741431197318511202856987167957023E-04",
                "_tot_mkt_val_amt": "0",
                "_shrs_unt_ots_qty": "4200.088",
                "_crncy_cd_base": "EUR",
                "_price_dt": "2016-07-25",
                "month":"Jul"
              }
            ];




class DataGridComponent extends React.Component {
  render() {
		return(
    <div className="datagrid-component">

    <DataGrid results={gridData} showFilter={true} columns={["id", "name","_dual_prcng_bss_cd","_nav_per_shr_amt","_priorday_to_input_dt_nav_prs","_nav_pershr_chg_amt","_perc_chg_nav_prs_by_day","_tot_nav_amt","_perc_total_net_assets","_tot_mkt_val_amt","_shrs_unt_ots_qty","_crncy_cd_base","_price_dt", "month"]}/>


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
