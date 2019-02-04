import React, { Component } from "react";

class MyTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("un update a eu lieu");
  }

  render() {
    return (
      <div>
        <p>MyTimer</p>
        <span>{this.state.timer}</span>
      </div>
    );
  }
}

export default MyTimer;
