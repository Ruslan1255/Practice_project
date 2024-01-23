import React, { Component } from "react";

import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handlePLusClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  handleMinusClick = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };

  handleResetClick = () => {
    this.setState({
      value: (this.state.value = 0),
    });
  };

  render() {
    return (
      <>
        <div className="counter_box">
          <div className="counter_box_title">Counter App</div>
          <div className="counter">
            <button className="minus_button" onClick={this.handleMinusClick}>
              Descrease
            </button>
            <div className="value_box">Value :{this.state.value}</div>
            <button className="plus_button" onClick={this.handlePLusClick}>
              Increase
            </button>
          </div>
          <button className="reset_button" onClick={this.handleResetClick}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
export default Counter;
