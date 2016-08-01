'use strict';

import React from 'react';
import TabPanel from 'react-tab-panel'
import Image from './ImageBgComponent';
require('styles//TradeNews.scss');

class TradeNewsComponent extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
         content: [{
            image1 : "group.png",
            type : "Global Market Information",
        },
        {
            image1 : "group.png",
            type : "Global Tax Information",
            image2 : "arrow-r.svg"
        },
        {
            image1 : "group.png",
            type : "News and Publication",
        },
        {
            image1 : "group.png",
            type : "Investment Manager Guide",
        },
        {
            image1 : "group.png",
            type : "Online Documents",
        },
        {
            image1 : "group.png",
            type : "Cyber Security Information",
        },
        {
            image1 : "group.png",
            type : "U.S Retirement Resources",
        },
        {
            image1 : "group.png",
            type : "Lorem Ipsum",
        },
        {
            image1 : "group.png",
            type : "Lorem Ipsu",
        },
        {
            image1 : "group.png",
            type : "Lorem Ipsum",
        },
        {
            image1 : "group.png",
            type : "Lorem Ipsum",
        }]
      }
    }
  render() {
    return (
      <div className="tradenews-component">
        <TabPanel className="pannel">
          <div  tabTitle="Resources">
          <div className="tradenews-body container-fluid">
          {
              this.state.content.map(function(data){
                  return(
                <div className="tradenews-img-component row">
                      <div className="col-md-2"><Image image={data.image1}/></div>
                      <div className="col-md-10">
                          {data.type}
                      </div>
                </div>
              )
              })

          }
          </div>
          </div>
          <div tabTitle="News">

          </div>
          <div tabTitle="Regulations">

          </div>
        </TabPanel>
      </div>

    );
  }
}

TradeNewsComponent.displayName = 'TradeNewsComponent';

// Uncomment properties you need
// TradeNewsComponent.propTypes = {};
// TradeNewsComponent.defaultProps = {};

export default TradeNewsComponent;
