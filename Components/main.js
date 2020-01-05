import React from 'react';
import Productlist from './products/productlist.js';
import Filter from './filter/filter.js';
import Git from './git/git.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const NavBar = ()=>{

return ( <nav className="navbar navbar-expand-md bg-dark navbar-dark">

  <a class="navbar-brand" href="#">Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
   <Router>
    <ul class="navbar-nav">
      <li class="nav-item">
        <NavLink class="nav-link" activeClassName='active' to="/">Products</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" activeClassName='active' to="git">Git</NavLink>
      </li>
    </ul>
    </Router>
  </div>
</nav> );

}






const Loader  = ()=>{
return (<div style={{'text-align':'center',margin:'81px'}}><div class="spinner-border  text-primary"></div></div>);


}



const Home = ()=>{
	return (<div class="row">
			<div class="col-3">
			<Filter/>

			</div>
			<div class="col-9">
				<Productlist/>
			</div>
			
			</div>);


}






 const Main = ()=>{

	return (
		<div className="container">
			<NavBar/>
			<Router>
		        <Switch>
		          <Route exact path="/">
		            <Home />
		          </Route>
		         <Route exact path="/git">
		            <Git />
		          </Route>
		        </Switch>
			</Router>	
		</div>
		);


}

export default Main;