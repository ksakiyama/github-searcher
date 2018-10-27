import React from "react";
import Button from "./Button.js";

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput = event => {
    this.props.handleTextInput(event);
  };

  render() {
    return (
      <div className="columns">
        <div className="column" />
        <div className="column is-two-fifths">
          <div className="columns">
            <Button
              name={"User"}
              selectedOption={this.props.selectedOption}
              onButtonClicked={this.props.onButtonClicked}
            />
            <Button
              name={"Repository"}
              selectedOption={this.props.selectedOption}
              onButtonClicked={this.props.onButtonClicked}
            />
          </div>
          <input
            className="input"
            type="text"
            placeholder="Input search text"
            onChange={this.handleTextInput}
            value={this.props.searchText}
          />
        </div>
        <div className="column" />
      </div>
    );
  }
}
