export default json => {
  const {shapes: jsonShapes, imageHeight, imageWidth} = json

  const shapes = jsonShapes.map(shape => {
    const {label: id, points, group_id: group, shape_type: type, flags} = shape

    return {
      id,
      type,
      group,
      flags,
      points
    }
  })

  return {
    shapes,
    imageHeight,
    imageWidth
  }
}