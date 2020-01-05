import {fetchProducts} from '../api.js';

export const loadProducts = ()=>{
	return (dispatch)=>{
		
			fetchProducts().then((response)=>{
				return dispatch({type:'LOADPRODUCTS',payload:response.data.products})


		});
	}
}
