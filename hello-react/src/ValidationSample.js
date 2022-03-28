import React, { Component } from "react";
import "./ValidationSample.css";
class ValidationSample extends Component {
  state = {
    clicked: false,
    password: "",
    validate: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validate: "0000" === this.state.password,
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validate
                ? "success"
                : "failure"
              : ""
          }
        ></input>
        <button onClick={this.handleClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
