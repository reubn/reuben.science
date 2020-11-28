export default posts => posts.map(({props}) => {
  props.metadata.date = new Date(props.metadata.date)
  return props
})
.sort(({metadata: {date: a}}, {metadata: {date: b}}) => a - b)
