import React,{Component} from "react";
import Filters from './filters.js';
import ProductList from './productlist.js';
class Main extends Component{


	render(){

		return (<div className="main">
				<Filters/>
				<ProductList/>

			</div>)

	}





}
export default Main;