const initialState = {
	repos:[],
	isLoading:true,
	selectedFilter:'All',

}


export default (state=initialState,action)=>{
	var newState = {...state}; 
	switch(action.type){

		case 'LOADREPO':
		newState.isLoading = false;
	 	newState.repos = action.payload;
	 	
		break;
		case 'SELECTFILTER':
	 	newState.selectedFilter = action.payload;
	 	newState.isLoading = true;
		break;



	}

	return newState;
}
