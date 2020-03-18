export type GraphQLMessageError = {
  statusCode: number
  error: string
}

export type Pagination = {
  offset: number
  limit: number
}

export type Sorting = {
  field: string
  order: 'ASC' | 'DESC'
}
