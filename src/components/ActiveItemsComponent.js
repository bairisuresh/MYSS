'use strict';

import React from 'react';
import ActiveItem from './AiitemComponent';

require('styles//ActiveItems.scss');

class ActiveItemsComponent extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
         content: [{
            image : "group.svg",
            type : "3-12 Top Holdings",
            date : "07/24/16"
        },
        {
            image : "check-form.svg",
            type : "Valuation Tool Kit",
            date : "10/07/16"
        },{
            image : "group.svg",
            type : "Accounting Summary",
            date : "07/24/16"
        },
        {
            image : "flag.svg",
            type : "Lorem Ipsum",
            date : ""
        },
        {
            image : "check-form.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },
        {
            image : "document.svg",
            type : "Reason by Custodian IFS",
            date : "04/07/16"
        },
        {
            image : "check-form.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },
        {
            image : "flag.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },{
            image : "group.svg",
            type : "3-12 Top Holdings",
            date : "07/24/16"
        },
        {
            image : "check-form.svg",
            type : "Valuation Tool Kit",
            date : "10/07/16"
        },{
            image : "group.svg",
            type : "Accounting Summary",
            date : "07/24/16"
        },
        {
            image : "flag.svg",
            type : "Lorem Ipsum",
            date : ""
        },
        {
            image : "check-form.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },
        {
            image : "document.svg",
            type : "Reason by Custodian IFS",
            date : "04/07/16"
        },
        {
            image : "check-form.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },
        {
            image : "flag.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },{
            image : "group.svg",
            type : "3-12 Top Holdings",
            date : "07/24/16"
        },
        {
            image : "check-form.svg",
            type : "Valuation Tool Kit",
            date : "10/07/16"
        },{
            image : "group.svg",
            type : "Accounting Summary",
            date : "07/24/16"
        },
        {
            image : "flag.svg",
            type : "Lorem Ipsum",
            date : ""
        },
        {
            image : "check-form.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },
        {
            image : "document.svg",
            type : "Reason by Custodian IFS",
            date : "04/07/16"
        },
        {
            image : "check-form.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        },
        {
            image : "flag.svg",
            type : "Lorem Ipsum",
            date : "04/07/16"
        }]
      }
    }
  render() {	
  //console.log("state is: "+JSON.stringify(this.getState()));
    return (
      <div className="activeitems-component">
		<div className="activeitems-header">
			<div>Recent Active Items</div>
			<hr/>
		</div>
		<div className="activeitems-body container-fluid">
		{
			this.state.content.map(function(data){
				return(<ActiveItem item = {data}/>)
			})

		}
		</div>
      </div>
    );
  }
}

ActiveItemsComponent.displayName = 'ActiveItemsComponent';

// Uncomment properties you need
// ActiveItemsComponent.propTypes = {};
// ActiveItemsComponent.defaultProps = {};

export default ActiveItemsComponent;
