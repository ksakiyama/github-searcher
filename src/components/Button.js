import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }

  handleButtonClicked = () => {
    this.props.onButtonClicked(this.props.name);
  };

  render() {
    const classes =
      this.props.name === this.props.selectedOption
        ? "button is-fullwidth is-dark"
        : "button is-fullwidth is-outlined";
    return (
      <div className="column">
        <div className={classes} onClick={this.handleButtonClicked}>
          {this.props.name}
        </div>
      </div>
    );
  }
}
