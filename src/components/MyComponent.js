// class component
// function component
import React from "react";
class MyComponent extends React.Component{
  state = {
    name: 'eric',
    address: 'hoi dan it',
    age: 26
  }
  //JSX
  render() {
    return (
      <div>My name is {this.state.name} and i'm from {this.state.address}</div>
    );
  }
}
export default MyComponent;