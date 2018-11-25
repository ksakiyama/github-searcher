import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import Grid from "@material-ui/core/Grid";
import CardSection from "./CardSection.js";

class ApolloArea extends React.Component {
  constructor(props) {
    super();
  }

  isRenderable() {
    const { token, client, searchText } = this.props.object;
    return token !== "" && searchText !== "" && client !== null;
  }

  render() {
    const { client, query, searchText, selectedOption } = this.props.object;
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

                return (
                  <div>
                    {data && (
                      <CardSection
                        name={selectedOption}
                        objects={data.search.nodes}
                      />
                    )}
                  </div>
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
