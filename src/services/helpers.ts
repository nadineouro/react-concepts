import Exception from '../helpers/Exception'
import { ApolloError } from 'apollo-client'
import Codes from '../helpers/Codes'

const graphQLErrorHandler = (e: any) => {
  let exception: any
  try {
    exception = new Exception(e.message.statusCode, 'GraphQL error handler', e.toString())
  } catch (error) {
    throw new Exception(Codes.Internals.UNEXPECTED_ERROR, 'api/helpers/graphQLErrorHandler', e)
  }
  throw exception
}

const NetworkErrorHandler = (e: any) => {
  let exception: any
  try {
    exception = new Exception(e.statusCode, 'GraphQL error handler', e.result)
  } catch (error) {
    throw new Exception(e.statusCode, 'api/helpers/NetworkErrorHandler', e.result)
  }
  throw exception
}

export const graphQLOnError = (error: ApolloError) => {
  const { graphQLErrors, networkError } = error

  if (graphQLErrors.length) {
    graphQLErrorHandler(graphQLErrors[0])
    return
  }

  if (networkError) {
    NetworkErrorHandler(networkError)
    return
  }

  throw new Exception(Codes.Internals.UNEXPECTED_ERROR, 'api/helpers/graphQLOnError', JSON.stringify(error))
}
