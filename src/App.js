import logo from './logo.svg';
import React from 'react';
import './App.css';

/*class App extends React.Component{
  render() {
    return (
      <div>
        <h1>Hello from Bridgelabz</h1>
      </div>
    );
  }
}*/


class App extends React.Component{
  url="http://bridgelabz.com/";
  constructor(){
    super()
    this.state = {
      //title : "Hello from Bridgelabz"
      userName:''
    }
  }

  onClick=($event)=>{
    console.log("save button is clicked", $event);
    window.open(this.url,"_blank");
  }

  onNameChange=(event)=>{
    console.log("Value is ", event.target.value);
    this.setState({userName: event.target.value});
  }

  render(){
    return(
      <div>
      <div>
        <h1>{this.state.userName} from Bridgelabz</h1>
        <img src={logo} onClick={this.onClick} alt="Bridgelabz gives employment"/>
      </div>
      <div className="text-box"> 
        <input onChange={this.onNameChange}/>
      </div>
      </div>
    );
  }
}

export default App;
