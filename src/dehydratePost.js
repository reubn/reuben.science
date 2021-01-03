export default post => {
  post.metadata.date = post.metadata.date.toJSON()
  return post
}
