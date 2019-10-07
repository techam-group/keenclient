import ApolloClient, { InMemoryCache } from 'apollo-boost'
const mode = process.env.NODE_ENV === 'production'

// Get token from localStorage
const token = localStorage.getItem('keen_token') || ''

// Setup the apollo client
const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: mode ? 'https://keenserver.herokuapp.com' : 'http://localhost:4000/graphql',
  cache,
  headers: {
    authorization: token
  }
})

export default client