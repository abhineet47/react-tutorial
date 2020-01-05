
const initialState = {
	filters:[],
};



export default (state=initialState,action)=>{
	var newState = {...state}; 
	switch(action.type){

		case 'FILTER_CHANGE':
	 	newState.filters = action.payload;
		console.log(newState);
		break;

	}
	return newState;
}