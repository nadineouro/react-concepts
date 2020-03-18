import { ApolloClient, ApolloError } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import config from '../config'
import { setContext } from 'apollo-link-context'
import { graphQLOnError } from './helpers'
import { GraphQLRequest, DocumentNode, FetchResult } from 'apollo-link'

const httpLink = createHttpLink({
  uri: config.graphqlUrl
})

const authLink = (token: string) =>
  setContext((_: GraphQLRequest, prevContext: any) => {
    return {
      headers: {
        ...prevContext.headers,
        authorization: `Bearer ${token}`
      }
    }
  })

const defaultOptions: any = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const getClient = (token?: string): ApolloClient<any> => {
  return token
    ? new ApolloClient({
        link: authLink(token).concat(httpLink),
        cache: new InMemoryCache(),
        defaultOptions
      })
    : new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
        defaultOptions
      })
}

export default class API {
  static mutate = (mutation: DocumentNode, variables?: any, token?: string): any =>
    getClient(token)
      .mutate({ mutation, variables })
      .then((response: FetchResult) => response)
      .catch((e: ApolloError) => graphQLOnError(e))

  static query = (query: DocumentNode, variables?: any, token?: string): any =>
    getClient(token)
      .query({ query, variables })
      .then((response: FetchResult) => response)
      .catch((e: ApolloError) => graphQLOnError(e))
}
