import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    paddingTop: 10,
    paddingLeft: 20,
    marginTop: 10,
    height: 120
  },
  avatar: {
    width: 50,
    height: 50
  }
});

class Card extends React.Component {
  render() {
    const { classes } = this.props;
    const user = this.props.user;

    if (!user) {
      return <h1>No result</h1>;
    }

    return (
        <Paper className={classes.root} elevation={2}>
          <Avatar className={classes.avatar} alt={user.login} src={user.avatarUrl} />
          <Typography variant="h5" component="h3">
            {user.login}
          </Typography>
          <Typography component="p">{user.name}</Typography>
        </Paper>
    );
  }
}

export default withStyles(styles)(Card);
