'use strict';

import React from 'react';
import Header from './HeaderComponent';
import SideNav from './SideNavComponent';

require('styles//App.scss');

class AppComponent extends React.Component {
  render() {
    return (
	<div id="myssApp" className="app-component">
	    <Header/>
	    <SideNav>
	    	{this.props.children}
	    </SideNav>
	  </div>
    );
  }
}

AppComponent.displayName = 'AppComponent';

// Uncomment properties you need
// AppComponent.propTypes = {};
// AppComponent.defaultProps = {};

export default AppComponent;
