import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: "center"
  }
};

class Header extends React.Component {
  state = {
    value: 0
  };

  labels = ["User", "Repository"];

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.tabClickHandler(this.labels[value]);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <h1 className={classes.title}>Github App</h1>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={this.labels[0]} />
            <Tab label={this.labels[1]} />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
