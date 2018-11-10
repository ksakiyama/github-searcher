import React from "react";
import TextBox from "./TextBox.js";

const Header = (props) => {
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
            <TextBox
              type="password"
              placeholder="Token"
              value={props.text}
              textInputHandler={props.textInputHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
