export default ({metadata: {date, ...metadata}, ...post}) => ({
  ...post,
  metadata: {
    ...metadata,
    date: new Date(date)
  }
})
