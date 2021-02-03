import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: "Backend for usewalter",
  version: "1",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default client;
