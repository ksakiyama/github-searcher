import React from "react";
import { Button as MButton } from "@material-ui/core";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }

  handleButtonClicked = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <MButton
        variant="contained"
        color="primary"
        onClick={this.handleButtonClicked}
      >
        {this.props.name}
      </MButton>
    );
  }
}

export default Button;
