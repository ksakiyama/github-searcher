import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import Header from "./components/Header.js";
import SearchBox from "./components/SearchBox.js";
import CardSection from "./components/CardSection.js";
import {
  QUERY_USER_SEARCH,
  QUERY_REPOSITORY_SEARCH,
  generateClient
} from "./graphql/graphqlHelper.js";
import "./App.css";

// DEBUG
import { TOKEN } from "./config.js";

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
    return (
      <div className="App">
        <Header
          textInputHandler={this.handleTokenInput}
          text={this.state.token}
        />
        <br />
        <SearchBox
          textInputHandler={this.handleTextInput}
          searchText={this.state.searchText}
          selectedOption={this.state.selectedOption}
          buttonClickHandler={this.handleButtonClicked}
        />
        {this.state.token !== "" &&
          this.state.searchText !== "" &&
          this.state.client !== null && (
            <ApolloProvider client={this.state.client}>
              <Query
                query={this.state.query}
                variables={{ queryString: this.state.searchText }}
              >
                {({ loading, error, data }) => {
                  if (loading) {
                    return <div className="notification">Loading...</div>;
                  }
                  if (error) {
                    return (
                      <div className="notification">
                        <p>
                          <b>ERROR</b>
                        </p>
                        <p>{error.message}</p>
                      </div>
                    );
                  }

                  //console.log(data); // DEBUG

                  return (
                    <CardSection
                      name={this.state.selectedOption}
                      users={data.search.nodes}
                    />
                  );
                }}
              </Query>
            </ApolloProvider>
          )}
      </div>
    );
  }
}

export default App;
