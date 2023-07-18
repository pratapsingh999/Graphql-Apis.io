import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', // Replace this with your actual GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
