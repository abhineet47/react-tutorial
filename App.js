import React,{Component} from 'react';
import './App.css';
import {connect } from 'react-redux';


class App extends Component{
/*
 state = {
  age:21
 }


onAgeUp = ()=>{
  let state  = this.state;

  state.age = state.age+1
  this.setState({state});

};
onAgeDown = ()=>{
  let state  = this.state;

  state.age = state.age-1
  this.setState({state});

};
*/
  render(){

    return (
        <div className ="App">
          <div>Age<span>{this.props.age}</span></div>
          <div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
          </div>

        </div>

      );



  }
}

const mapStateToProps = (state)=>{
  return {age:state.age}

}

const mapDispatchToProps = (dispatch)=>{
  return {
        'onAgeUp':()=>dispatch({type:'AGE_UP'}),
        'onAgeDown':()=>dispatch({type:'AGE_DOWN'}),

  }



};



export default connect(mapStateToProps,mapDispatchToProps)(App);




