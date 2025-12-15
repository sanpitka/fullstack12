export const updateCache = (cache, query, addedBook) => {
  const uniqByTitle = (a) => {
    let seen = new Set()
    return a.filter((item) => {
      let k = item.title
      return seen.has(k) ? false : seen.add(k)
    })
  }

  cache.updateQuery(query, (data) => {
    if (!data) {
      return {
        allBooks: [addedBook],
      }
    }
    return {
      allBooks: uniqByTitle(data.allBooks.concat(addedBook)),
    }
  })
}
