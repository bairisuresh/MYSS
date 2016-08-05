import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores';
import App from './components/AppComponent';
import Body from './components/BodyComponent';
import Grid from './components/DataGridComponent'
import {browserHistory, IndexRoute, Router, Route} from 'react-router';
import {navigateToHome, navigateToGrid} from './actions/const';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Body}/>
    		<Route path="grid" component={Grid}/>
    		<Route path="home" component={Body}/>
    	</Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
store.dispatch(navigateToHome());
store.dispatch(navigateToGrid({id : "11",
            activityName : "3-12 Top Holding IV pm SLB1",
            activityDate : "19/06/16",
          }));