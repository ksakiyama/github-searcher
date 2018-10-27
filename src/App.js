import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import Header from "./components/Header.js";
import SearchBox from "./components/SearchBox.js";
import CardSection from "./components/CardSection.js";
import {
  QUERY_USER_SEARCH,
  QUERY_REPOSITORY_SEARCH,
  generateClient
} from "./helpers/graphqlHelper.js";
import "./App.css";

// DEBUG
import { TOKEN } from "./config.js";

class App extends React.Component {
  constructor() {
    super();

    // DEBUG
    const initialToken = TOKEN;

    this.state = {
      searchText: "",
      token: initialToken,
      client: generateClient(initialToken),
      query: QUERY_USER_SEARCH,
      searchCategory: "user",
      selectedOption: ""
    };

    this.QUERIES = {
      user: QUERY_USER_SEARCH,
      repository: QUERY_REPOSITORY_SEARCH
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTokenInput = this.handleTokenInput.bind(this);
    this.handleUserButtonClicked = this.handleUserButtonClicked.bind(this);
    this.handleRepositoryButtonClicked = this.handleRepositoryButtonClicked.bind(
      this
    );
  }

  handleTextInput = event => {
    this.setState({ searchText: event.target.value.trim() });
  };

  handleTokenInput = token => {
    this.setState({ token, client: generateClient(token) });
  };

  handleUserButtonClicked = event => {
    this.setState({ searchCategory: "user" });
  };

  handleRepositoryButtonClicked = event => {
    this.setState({ searchCategory: "repository" });
  };

  // TODO Responsive Design(button margin, left, right)
  render() {
    return (
      <div className="App">
        <Header inputHandler={this.handleTokenInput} token={this.state.token} />
        <br />
        <SearchBox
          handleTextInput={this.handleTextInput}
          searchText={this.state.searchText}
        />
        {this.state.token !== "" &&
          this.state.searchText !== "" &&
          this.state.client !== null && (
            <ApolloProvider client={this.state.client}>
              <Query
                query={QUERY_USER_SEARCH}
                variables={{ queryString: this.state.searchText }}
              >
                {({ loading, error, data }) => {
                  if (loading) {
                    return <div className="notification">Loading...</div>;
                  }
                  if (error) {
                    return (
                      <div className="notification">
                        <b>ERROR: </b>
                        Rendering was failed!
                      </div>
                    );
                  }

                  console.log(data); // DEBUG

                  return <CardSection users={data.search.nodes} />;
                }}
              </Query>
            </ApolloProvider>
          )}
      </div>
    );
  }
}

export default App;
