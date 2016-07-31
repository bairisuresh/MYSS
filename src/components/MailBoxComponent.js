'use strict';

import React from 'react';
import ActiveItem from './AiitemComponent';
import Image from './ImageBgComponent';
require('styles//MailBox.scss');

class MailBoxComponent extends React.Component {
      constructor(props,context){
          super(props,context);
          this.state = {
           content: [{
              image1 : "group.png",
              type : "Investment Access Report",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsum Dolor Spec",
              image2 : "arrow-r.svg"
          },{
              image1 : "group.png",
              type : "Accounting Summary",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsum",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsum",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Dolor specturuem",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsu",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsum",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsu",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsum",
              image2 : "arrow-r.svg"
          },
          {
              image1 : "group.png",
              type : "Lorem Ipsum",
              image2 : "arrow-r.svg"
          }]
        }
      }
    render() {
    //console.log("state is: "+JSON.stringify(this.getState()));
      return (
        <div className="mailbox-component">
          <div className="mailbox-header">
          	<div>Inbox</div>
          	<hr/>
          </div>
          <div className="mailbox-body container-fluid">
          {
          	this.state.content.map(function(data){
          		return(
                <div className="mailbox-img-component row">
          			<div className="col-md-2"><Image image={data.image1}/></div>
          		  	<div className="col-md-8">
          		  		{data.type}
          		  	</div>
          		  	<div className="col-md-2">
          		  		<Image image={data.image2}/>
          		  	</div>
                </div>
              )
          	})

          }
          </div>
        </div>
      );
    }
}

MailBoxComponent.displayName = 'MailBoxComponent';

// Uncomment properties you need
// MailBoxComponent.propTypes = {};
// MailBoxComponent.defaultProps = {};

export default MailBoxComponent;
