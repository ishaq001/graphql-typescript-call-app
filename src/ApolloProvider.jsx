import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

import { setContext } from 'apollo-link-context'
import App from './App'
import { getItem as getFromStorage } from './utils/localStorage'

const httpLink = createHttpLink({
  uri: 'https://frontend-test-api.aircall.io/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = getFromStorage('jwtToken')
  console.log('the auth link is called for every mutation')
  console.log('token on every calll OR NOT', token, 'headers', headers)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
