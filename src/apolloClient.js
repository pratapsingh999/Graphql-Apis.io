import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // GraphQL API endpoint for the Rick and Morty API
  cache: new InMemoryCache(),
});

export default client;
