import React from "react";
import ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";

jest.unmock("../Header.js");
import Header from "../Header.js";

it("Change value", () => {
  let actual = "not changed";
  const testFunc = value => {
    actual = value;
  };

  const header = TestUtils.renderIntoDocument(
    <Header inputHandler={testFunc} token={"initial_token"} />
  );
  const headerNode = ReactDOM.findDOMNode(header);
  const inputTag = headerNode.getElementsByTagName("input")[0];

  TestUtils.Simulate.change(inputTag, { target: { value: "changed" } });
  expect(actual).toEqual("changed");
  expect(inputTag.value).toEqual("initial_token");
});
