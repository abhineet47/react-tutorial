import React from 'react';
import {selectedFilterChange} from '../../services/git/actions.js';
import {connect} from 'react-redux';
import Logo from  '../../logo.svg'
class GitNavBar extends React.Component{
 
	constructor(){
		super();
		this.filter = ['All','Javascript','Ruby','Python','Java','Css']
	}


	render(){

	 return  (<ul class="nav nav-pills justify-content-center">
	 		{this.filter.map((filter)=>{
 			 return <li class="nav-item">
	      			<a class="nav-link" className={"nav-link "+(this.props.selected==filter ? 'active' : '')} href="javascript:void(0)" onClick={()=>this.props.onSelectedFilter(filter)}>{filter}</a>
	    		</li>
	 		})}
	  </ul>);

	}
}


const Loader  = ()=>{
	return (<div style={{'text-align':'center',margin:'81px'}}><div class="spinner-border  text-primary"></div></div>);
}



const GitRepo = (props)=>{
	const ImageUrl = "https://avatars0.githubusercontent.com/u/"+props.repo.id;
	return (<div class="card col-md-3 float-left mt-2  mb-1 mh-300" >
  <img class="card-img-top" src={props.repo.owner.avatar_url} alt="Card image" width="130" height="150"/>
  <div class="card-body">
    <h4 class="card-title text-truncate" >{props.repo.name}</h4>
    <p class="card-text text-truncate">{props.repo.description}</p>

  </div>
</div>)

}

const GitRepos = (props)=>{
	return (
			<>
			{props.repos.map((repo)=>{

				return <GitRepo repo = {repo} />

			})}
			</>

		);

}

class Git extends React.Component{


	componentDidMount(){
		this.props.selectedFilterChange('All');
	}



	onSelectedFilter(selectedFilter){
		this.props.selectedFilterChange(selectedFilter);
	}


	render(){
		const loading = this.props.isLoading;


		return (
					<>
					<GitNavBar selected = {this.props.selected} onSelectedFilter={this.onSelectedFilter.bind(this)}/>
					
						{loading && <Loader/>}
						{!loading && <GitRepos repos = {this.props.repos} />}
						
						</>
					

				);
	}
}


const mapPropsToState = (state)=>{
	console.log(state);
	return {
			'repos':state.git.repos,
			'isLoading':state.git.isLoading,
			'selected':state.git.selectedFilter,
	}

}

const mapDispatchToProps = {
		selectedFilterChange : selectedFilterChange
} 


export default connect(mapPropsToState,mapDispatchToProps)(Git);
