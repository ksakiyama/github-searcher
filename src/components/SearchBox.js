import React from "react";
import Button from "./Button.js";
import TextBox from "./TextBox.js";

const SearchBox = props => {
  return (
    <div className="columns">
      <div className="column" />
      <div className="column is-two-fifths">
        <div className="columns">
          <Button
            name={"User"}
            selectedOption={props.selectedOption}
            onButtonClicked={props.buttonClickHandler}
          />
          <Button
            name={"Repository"}
            selectedOption={props.selectedOption}
            onButtonClicked={props.buttonClickHandler}
          />
        </div>
        <TextBox
          placeholder="Input search text"
          value={props.searchText}
          textInputHandler={props.textInputHandler}
        />
      </div>
      <div className="column" />
    </div>
  );
};

export default SearchBox;
