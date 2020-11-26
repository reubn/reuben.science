import readingTime from 'reading-time'

export default ({metadata, content}) => {

  return {
    ...metadata,
    readingTime: content ? readingTime(content).text : undefined
  }
}
