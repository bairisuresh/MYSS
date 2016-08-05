/* Populated by react-webpack-redux:action */
 export const actions = {
	NAV_HOME : "NAVIGATEHOME",
	NAV_GRID : "NAVIGATEGRID"
}

export function navigateToHome(){
	return {type : actions.NAV_HOME}
}

export function navigateToGrid(dataToBePassed){
	return {type : actions.NAV_GRID,data:dataToBePassed}	
}