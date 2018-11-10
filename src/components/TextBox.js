import React from "react";

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput = event => {
    this.props.textInputHandler(event);
  };

  render() {
    return (
      <input
        className="input"
        type={this.props.type ? this.props.type : "text"}
        placeholder={this.props.placeholder}
        onChange={this.handleTextInput}
        value={this.props.value}
      />
    );
  }
}
