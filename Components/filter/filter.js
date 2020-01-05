import React from 'react';
import {updateFilters} from '../../services/filters/actions.js';
import {connect} from 'react-redux';
const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];


const CreateCheckBox = (props)=>{

return (
 <div class="form-check mb-2 mr-sm-2">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" onChange={()=>{

      	props.onCheckBoxChange(props.name);
      }} value={props.name}/> {props.name}
    </label>
  </div>);
 

}



class Filter extends React.Component{


componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

 onCheckBoxChange=(label)=>{

	if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }


    this.props.updateFilters(Array.from(this.selectedCheckboxes));
 };



 render(){
 	const onCheckBoxChange = this.onCheckBoxChange;
 return (<div class="card mt-2">
 	 		<div class="card-header">Filter By Size</div>
 			 <div class="card-body">{availableSizes.map((elm)=>{
 			 		return <CreateCheckBox name={elm} onCheckBoxChange = {onCheckBoxChange} />

 			 })}</div>
		</div>);




 }


}


const mapDisptachToProp  = {
	updateFilters

}

export default connect(null,mapDisptachToProp)(Filter);

