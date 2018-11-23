import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField as MTextField } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput = event => {
    this.props.textInputHandler(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
      <MTextField
        className={classes.root}
        label={this.props.placeholder}
        type={this.props.type ? this.props.type : "text"}
        placeholder={this.props.placeholder}
        onChange={this.handleTextInput}
        value={this.props.value}
        fullWidth
      />
    );
  }
}

export default withStyles(styles)(TextBox);
