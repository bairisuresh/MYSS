'use strict';
import { combineReducers } from 'redux';
const reducers = (state={path : 'home'},action) =>{
	switch(action.type){
		case 'iviews':
			return{path:'iviews'};
		default :
			return {path : 'home'};
	}
}
export default combineReducers(reducers);
