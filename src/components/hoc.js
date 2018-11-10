import React from "react";

const enhanceTextBox = function(WrappedComponent) {
  return class newButton extends React.Component {
    constructor(props) {
      super(props);
      this.handleTextInput = this.handleTextInput.bind(this);
    }
    render() {
      return <WrappedComponent type="password"/>;
    }
  };
};
