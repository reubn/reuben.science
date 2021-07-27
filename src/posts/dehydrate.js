export default ({metadata: {date, ...metadata}, ...post}) => ({
  ...post,
  metadata: {
    ...metadata,
    date: date.toJSON()
  }
})
