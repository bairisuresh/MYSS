'use strict';

import React from 'react';
import Search from './SearchComponent'
import NavChart from './charts/NavComponent'
import AItems from './ActiveItemsComponent'
import TypeOfFinacialServices from './TypesFsComponent'
import MailBox from './MailBoxComponent'
import TradeNews from './TradeNewsComponent'
import SSApps from './SsappsComponent'
import HSupport from './HelpNsupportComponent'
require('styles//Body.scss');

class BodyComponent extends React.Component {
  render() {
    return (
      <div className="body-component">
       	<Search/>
       	<div className="body-first-row">
       		<NavChart/>
       		<AItems/>
       	</div>
        <div className="body-second-row">
          <TypeOfFinacialServices/>
          <MailBox/>
        </div>
        <div className="body-third-row">
          <SSApps/>
          <TradeNews/>
          <HSupport/>
        </div>
      </div>
    );
  }
}

BodyComponent.displayName = 'BodyComponent';

// Uncomment properties you need
// BodyComponent.propTypes = {};
// BodyComponent.defaultProps = {};

export default BodyComponent;
