import React from "react";
import Card from "./Card.js";
import CardRepository from "./CardRepository.js";
import Grid from "@material-ui/core/Grid";

class CardSection extends React.Component {
  render() {
    const users = this.props.users;
    return (
      <Grid container item spacing={16}>
        {users.map(user => (
          <Grid key={user.login} item xs={4}>
            <Card user={user} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default CardSection;
