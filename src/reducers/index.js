/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import {actions} from '../actions/const'
/* Populated by react-webpack-redux:reducer */
const reducers = {
	stateOne : "Home",
	stateTwo : "Grid"
};
const initialState = {
	stateOne : "Home"
}
function ssReducer(state = initialState, action) {
  switch (action.type) {
    case actions.NAV_HOME:
      return Object.assign({}, state, {
        actionPlan: action.type
      })
    	break;
    case actions.NAV_GRID:
    	return Object.assign({}, state, {
        actionPlan: action.type
      })
    break;
    default:
      return state
  }
}
module.exports = combineReducers({ssReducer});
