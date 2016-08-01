import React from "react";
import ReactUIDropdown from "react-ui-dropdown";

const data = [
  {
    "id": "6476",
    "title": "Prod Fds for testing"
  },
  {
    "id": "6484",
    "title": "KH FS"
  },
  {

        "id": "6926",
        "title": "Intergrated Fees(copy beta)"
  },
  {
    "id": "6953",
          "title": "MB Copy made of KH FS Grp(2) - Mike"
  },
  {
    "id": "7187",
          "title": "sggroup"
  },
  {
    "id": "7300",
        "title": "Statement of Condition Fund Group_DBK6 KRS1 KRS2"
  }

];



//class DropDownComponent extends React.Component {

var  DropDownComponent = React.createClass ({
  handleDropdownChange: function(selectedItems) {

    this.props.handleChange(selectedItems);
  },
  render() {
		return(

      <div class="dropdown">
        <ReactUIDropdown
          label="Fund Groups"
          initialItems={data}
          placeholder = "Fund Groups"
          multiple= "false"
          onChange={this.handleDropdownChange}/>
      </div>
	);
}
});

DropDownComponent.displayName = 'DropDownComponent';


export default DropDownComponent;
