export default post => {
  post.metadata.date = new Date(post.metadata.date)
  return post
}
