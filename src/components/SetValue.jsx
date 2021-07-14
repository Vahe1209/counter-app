import React from "react";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0,
    };
  }

  handleDecreaseNumber = () => {
    if (this.state.currentNumber <= 0) {
      return this.state;
    }
    this.setState((prevState) => ({
      currentNumber: prevState.currentNumber - 1,
    }));
  };

  handleIncreaseNumber = () => {
    if (this.state.currentNumber >= 10) {
      return this.state;
    }
    this.setState((prevState) => ({
      currentNumber: prevState.currentNumber + 1,
    }));
  };

  handleResetNumber = () => {
    this.setState(() => ({
      currentNumber: 0,
    }));
  };

  render() {
    return (
      <div className="setNumber">
        <div>{this.state.currentNumber}</div>
        <button onClick={this.handleDecreaseNumber} className="changeButton">
          -
        </button>
        <button onClick={this.handleIncreaseNumber} className="changeButton">
          +
        </button>
        <button onClick={this.handleResetNumber} className="changeButton">
          Reset
        </button>
      </div>
    );
  }
}

export default Calc;
