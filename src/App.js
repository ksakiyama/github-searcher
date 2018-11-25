import React from "react";
import ApolloArea from "./components/ApolloArea.js";
import Header from "./components/Header.js";
import TextBox from "./components/TextBox.js";
import {
  QUERY_USER_SEARCH,
  QUERY_REPOSITORY_SEARCH,
  generateClient
} from "./graphql/graphqlHelper.js";
import "./App.css";

// DEBUG
import { TOKEN } from "./config.js";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    marginTop: "15px"
  }
});

class App extends React.Component {
  constructor() {
    super();

    // TODO
    const initialToken = TOKEN;
    const initialChecked = "User";
    const initialSearchText = "";

    this.QUERIES = {
      User: QUERY_USER_SEARCH,
      Repository: QUERY_REPOSITORY_SEARCH
    };

    this.state = {
      searchText: initialSearchText,
      token: initialToken,
      client: generateClient(initialToken),
      query: this.QUERIES[initialChecked],
      selectedOption: initialChecked
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTokenInput = this.handleTokenInput.bind(this);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }

  handleTextInput = value => {
    this.setState({ searchText: value });
  };

  handleTokenInput = value => {
    this.setState({
      token: value,
      client: generateClient(value)
    });
  };

  handleButtonClicked = name => {
    this.setState({ selectedOption: name, query: this.QUERIES[name] });
  };

  // TODO Responsive Design(button margin, left, right)
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container item spacing={8} justify="center">
          <Grid item xs={6}>
            <Header />
          </Grid>
        </Grid>
        <Grid container item spacing={8} justify="center" className={classes.margin}>
          <Grid item xs={3}>
            <TextBox
              placeholder={"Your API Token"}
              type={"password"}
              textInputHandler={this.handleTokenInput}
              value={this.state.token}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={8} justify="center" className={classes.margin}>
          <Grid item xs={6}>
            {/* TODO controll by tab */}
            <TextBox
              placeholder="Input search text on GitHub"
              value={this.state.searchText}
              textInputHandler={this.handleTextInput}
            />
          </Grid>
        </Grid>
        <ApolloArea object={this.state} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
