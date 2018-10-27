import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    this.props.inputHandler(event.target.value);
  };

  render() {
    return (
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="title">GitHub App</h1>
              <h2 className="subtitle">By React, GraphQL</h2>
            </div>
            <div className="column">
              <label className="label has-text-white">Your API token</label>
              <input
                className="input"
                type="password"
                placeholder="Token"
                onChange={this.handleInputChange}
                value={this.props.token}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
