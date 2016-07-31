'use strict';

import React from 'react';

require('styles//Ssapps.scss');

class SsappsComponent extends React.Component {

	constructor(props,context){
      super(props,context);
      this.state = {
       content: [{
          app : "RRC",
          name : "Regulatory Resource Center"
      	},{
          app : "CM",
          name : "Custody Maintenance"
      	},{
          app : "WM",
          name : "Wealth Management"
      	}]
    }
  }
  render() {
    return (
      <div className="ssapps-component">
        <div className="ssapps-header">
            <div>State Street Applications</div>
            <hr/>
          </div>
          <div className="ssapps-body container-fluid">
          {
            this.state.content.map(function(data){
              return(
                <div className="ssapps-item row">
                <div className="col-md-2 app"><div className="oval"><div>{data.app}</div></div></div>
                  <div className="col-md-10 app-name">
                  <div>
                    {data.name}
                    </div>
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

SsappsComponent.displayName = 'SSAppsComponent';

// Uncomment properties you need
// SsappsComponent.propTypes = {};
// SsappsComponent.defaultProps = {};

export default SsappsComponent;
