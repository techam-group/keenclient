import ApolloClient, { InMemoryCache } from 'apollo-boost'

// Get token from localStorage
const token = localStorage.getItem('keen_token') || ''

// Setup the apollo client
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: 'http://localhost:4044/graphql',
  cache,
  headers: {
    authorization: token
  }
})

export default client