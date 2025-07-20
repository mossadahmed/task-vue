/* eslint-disable prettier/prettier */
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export const query = createHttpLink({
  uri: "https://api.escuelajs.co/graphql",
});

const apolloClient = new ApolloClient({
  link: query,
  cache: new InMemoryCache(),
});

export default apolloClient;
export { DefaultApolloClient };
