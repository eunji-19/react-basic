import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ComponentWillUmount");
    clearInterval(this.timerID);
  }

  tick() {
    // console.log("Tick Function");
    this.setState({ date: new Date() });
  }

  //   handleClick() {
  //     alert(this.state.date);
  //   }

  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, This is ClassComponents!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClassComponent;
