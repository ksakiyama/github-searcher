import React from "react";
import Card from "./Card.js";
import CardRepository from "./CardRepository.js";
import Grid from "@material-ui/core/Grid";

class CardSection extends React.Component {
  render() {
    const { name, objects } = this.props;
    return (
      <Grid container item spacing={16}>
        {objects.map(obj => (
          <Grid key={obj.login} item xs={4}>
            <Card user={obj} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default CardSection;
