import React from "react";
import Card from "./Card.js";
import CardRepository from "./CardRepository.js";

export default class CardSection extends React.Component {
  render() {
    const users = this.props.users;
    let elements = [];
    for (let i = 0; i < users.length; i += 3) {
      const line = (
        <div key={i} className="columns">
          {Array.from(Array(3), (_, k) => k + i).map(j => {
            if (this.props.name === "User") {
              return <Card key={j} user={users[j]} />;
            } else {
              return <CardRepository key={j} repository={users[j]} />;
            }
          })}
        </div>
      );
      elements.push(line);
    }
    return <section className="section">{elements}</section>;
  }
}
