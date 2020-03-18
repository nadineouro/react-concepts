const getFormattedQuery = (params: any): string => {
  let str = ''

  if (!Object.keys(params).length) {
    return ''
  }

  let separator = ''

  Object.keys(params).map(key => {
    if (params[key] !== false) {
      str = str.concat(separator, key.toString())
      if (separator === '') {
        separator = ', '
      }
      const child = getFormattedQuery(params[key])
      str = str.concat(' ' + child)
    }
    return str
  })
  return `{ ${str} } `
}

export default getFormattedQuery
