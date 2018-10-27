import React from "react";

export default class SearchBox extends React.Component {
  constructor(props) {
    super();
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
            <div className="column">
              <a class="button is-fullwidth is-dark">User</a>
            </div>
            <div className="column">
              <a class="button is-fullwidth is-outlined">Repository</a>
            </div>
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
