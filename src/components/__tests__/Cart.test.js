import React from "react";
import ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";

jest.unmock('../Card.js')
import Card from "../Card.js";

it("user is null", () => {
  // Render a checkbox with label in the document
  const user = null;
  const card = TestUtils.renderIntoDocument(<Card user={user} />);
  const cardNode = ReactDOM.findDOMNode(card);

  expect(TestUtils.isDOMComponent(cardNode)).toEqual(true)
});

it("user is not null", () => {
  // Render a checkbox with label in the document
  const user = {
    login: "test user",
    name: "I'm a test",
    avatarUrl: "https://test.dev"
  };
  const card = TestUtils.renderIntoDocument(<Card user={user} />);
  const cardNode = ReactDOM.findDOMNode(card);

  expect(TestUtils.isDOMComponent(cardNode)).toEqual(true)
});
