import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    
  }

  handleTextInput = () => {
    this.props.handleTextInput()
  }

  render() {
    return (
      <div className="columns">
        <div className="column" />
        <div className="column is-two-fifths">
          {/* <label className="label">Search</label> */}
          <div className="columns">
            <div className="column">
              <a class="button is-fullwidth is-dark">User</a>
            </div>
            <div className="column">
              <a class="button is-fullwidth is-outlined">Repository</a>
            </div>
          </div>
          {/* <p className="control"> */}
          <input
            className="input"
            type="text"
            placeholder="Input search text"
            onChange={this.handleTextInput}
            value={this.props.searchText}
          />
          {/* </p> */}
        </div>
        <div className="column" />
      </div>
    );
  }
}
