import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import Header from "./components/Header.js";
import CardSection from "./components/CardSection.js";
import { QUERY_USER_SEARCH, generateClient } from "./helpers/graphqlHelper.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      token: "",
      client: null
    };

    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput = event => {
    this.setState({ searchText: event.target.value.trim() });
  };

  handleTokenInput = token => {
    this.setState({ token, client: generateClient(token) });
  };

  render() {
    return (
      <div className="App">
        <Header inputHandler={this.handleTokenInput} token={this.state.token} />
        <br />
        <div className="columns">
          <div className="column" />
          <div className="column is-two-fifths">
            <label className="label">Search</label>
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="User Name"
                onChange={this.handleTextInput}
                value={this.state.searchText}
              />
            </p>
          </div>
          <div className="column" />
        </div>

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
