import React from 'react';
import {connect} from 'react-redux';

import Product from './product/product';
import {loadProducts} from '../../services/products/actions.js'



const Loader  = ()=>{
	return (<div style={{'text-align':'center',margin:'81px'}}><div class="spinner-border  text-primary"></div></div>);
}




class Productlist extends React.Component {

	state = {
		loading:true,
		products:[],

	}
	componentDidMount(){
		this.props.loadProducts();

	}	



	filterProducts(){

		if(this.props.filter.length<1){
			return this.props.products;
		}
		return  this.props.products.filter((prod)=>{
				console.log(this.props.filter);
				return false;

		})

	}

	render() {
		const newProducts  = this.filterProducts();

		if(this.props.loading){
			return <Loader/>;
		}


		return (<div clas="row">
			{newProducts.map((product)=>{
				return <Product product = {product}/>;
			})}
		
	</div>);
}

}

const mapdispatchToProps = {
		loadProducts:loadProducts
	}
const mapstatetoProps = (state, ownProps) =>{
	return {
		loading:state.product.loading,
		products:state.product.products,
		filter:state.filter.filters
	}


}
export default connect(mapstatetoProps,mapdispatchToProps)(Productlist);


