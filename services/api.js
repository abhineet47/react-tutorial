
import axios from 'axios';





export const fetchProducts= ()=>{
	const PRODUCTURL = "https://react-shopping-cart-67954.firebaseio.com/products.json";
	return axios.get(PRODUCTURL);
}


export const fetchRepos= (lang)=>{
	const URL = "https://api.github.com/search/repositories?q=stars:>1+language:"+lang+"&sort=stars&order=desc&type=Repositories";
	return axios.get(URL);
}
