import React from "react";
import {TextField as MTextField} from "@material-ui/core"

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput = event => {
    this.props.textInputHandler(event.target.value);
  };

  render() {
    return (
      <MTextField
        type={this.props.type ? this.props.type : "text"}
        placeholder={this.props.placeholder}
        onChange={this.handleTextInput}
        value={this.props.value}
      />
    );
  }
}

export default TextBox;