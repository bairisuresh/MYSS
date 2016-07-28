/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/
"use strict";

var React = require('react');

var GridFilter = React.createClass({
    displayName: "GridFilter",

    getDefaultProps: function getDefaultProps() {
        return {
            "placeholderText": ""
        };
    },
    handleChange: function handleChange(event) {
      if(event.target.type == "button"){
      //  this.props.filterByColumn(e.target.name, "city");
        this.props.changeFilter(event.target.name,"month");
        //this.props.filterByColumn(event.target.name, this.props.columnName);
        //console.log("change filter",this.props);
      }
      else {
      
        this.props.changeFilter(event.target.value);
     }
    },
    render: function render() {

//return React.createElement("input", { type: "text", name: "filter", placeholder: this.props.placeholderText, className: "form-control", onChange: this.handleChange });

       return React.createElement("div",
        { className: "filter-container" },
        React.createElement("input", { type: "text", name: "filter", placeholder: this.props.placeholderText, className: "form-control", onChange: this.handleChange }),
        React.createElement("input", { type: "button", name: "Jan", value:"Jan",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Feb", value:"Feb",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Mar", value:"Mar",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Apr", value:"Apr",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "May", value:"May",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Jun", value:"Jun",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Jul", value:"Jul",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Aug", value:"Aug",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Sep", value:"Sep",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Oct", value:"Oct",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Nov", value:"Nov",  onClick: this.handleChange }),
        React.createElement("input", { type: "button", name: "Dec", value:"Dec",  onClick: this.handleChange })



      );


    }
});

module.exports = GridFilter;
