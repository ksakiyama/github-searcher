import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const TOKEN_LENGTH = 40;

export const QUERY_USER_SEARCH = gql`
  query SearchUser($queryString: String!) {
    search(query: $queryString, type: USER, first: 30) {
      userCount
      nodes {
        ... on User {
          name
          url
          login
          avatarUrl
          bio
          repositories(first: 10) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export function generateClient(token) {
  if (token.length !== TOKEN_LENGTH) {
    return null;
  }
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
      operation.setContext({
        headers: {
          authorization: "Bearer " + token
        }
      });
    }
  });
  return client;
}
