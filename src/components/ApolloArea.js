import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import Grid from "@material-ui/core/Grid";

class ApolloArea extends React.Component {
  constructor(props) {
    super();
  }

  isRenderable() {
    const { token, client, searchText } = this.props.object;
    return token !== "" && searchText !== "" && client !== null;
  }

  render() {
    const { client, query, searchText } = this.props.object;
    return (
      <div id="ApolloArea">
        {this.isRenderable() && (
          <ApolloProvider client={client}>
            <Query query={query} variables={{ queryString: searchText }}>
              {({ loading, error, data }) => {
                if (error) {
                  return (
                    <Grid container item spacing={8} justify="center">
                      <Grid item>
                        <p>
                          <b>ERROR: </b>
                          {error.message}
                        </p>
                      </Grid>
                    </Grid>
                  );
                }

                if (loading) {
                  return (
                    <Grid container item spacing={8} justify="center">
                      <Grid item>
                        <h1>Loading...</h1>
                      </Grid>
                    </Grid>
                  );
                }

                console.log(data); // DEBUG

                return (
                  // <CardSection
                  //   name={this.state.selectedOption}
                  //   users={data.search.nodes}
                  // />
                  <h1>Apollo desu</h1>
                );
              }}
            </Query>
          </ApolloProvider>
        )}
      </div>
    );
  }
}

export default ApolloArea;
