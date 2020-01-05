
const initialState = {
	products:[],
	loading:true
};



export default (state=initialState,action)=>{
	var newState = {...state}; 
	switch(action.type){

		case 'LOADPRODUCTS':
	 	newState.products = action.payload;
		newState.loading = false;
		console.log(newState);
		break;

	}
	return newState;
}