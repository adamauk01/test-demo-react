// class component
// function component
import React from "react";
class MyComponent extends React.Component{
  state = {
    name: 'eric',
    address: 'hoi dan it',
    age: 26
  }
  handleClick = (event)=>{
    console.log("Random ", Math.floor((Math.random() * 100) + 1))
    this.setState({
      name: 'Vanh'
    })
  }
  handleOnMouseOver(event){
    // console.log(event)
  }
  //JSX
  render() {
    return (
      <div>My name is {this.state.name} and i'm  {this.state.age}
      <button onMouseOver={this.handleOnMouseOver}>hover me</button>
      <button onClick={(event)=>{this.handleClick(event)}}>click me</button>
      </div>
    );
  }
}
export default MyComponent;