import React from 'react';
import Logo from  '../../../logo.svg'
const Product = (props)=>{
  return (<div class="card col-md-6 float-left mt-2  mb-1 " >
  <img class="card-img-top" src={Logo} alt="Card image"/>
  <div class="card-body">
    <h4 class="card-title">{props.product.title}</h4>
    <p class="card-text">Price : {props.product.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>);


}
export default Product;