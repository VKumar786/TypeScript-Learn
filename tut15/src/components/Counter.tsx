import React, { Component } from "react";

class Counter extends Component<CounterProps, CounterStateProps> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Increment</button>
        <br />
        {this.props.message} {this.state.count}
      </>
    );
  }
}

type CounterProps = {
  message: string;
};

type CounterStateProps = {
  count: number;
};

export default Counter;
