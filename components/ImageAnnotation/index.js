import {useState, useEffect} from 'react'

import c from '@/src/colour'

import Image from '@/components/Image'

import parseLabelMe from './parseLabelMe'
import SVG from './SVG'

import {container, imageContainer, active} from './styles'

const ImageAnnotation = ({image, list, children, ...props}) => {
  const [annotations, setAnnotations] = useState({})

  useEffect(() => {
    console.log('list changed', list)

    const update = () => {
      console.log('setting annotations', list.annotations)
      setAnnotations({...list.annotations})
    }

    list.addEventListener('change', update)

    update()

    return () => {
      list.removeEventListener('change', update)
    }
  }, [list])

  console.log('annotations', annotations)

  const {json} = image

  const {shapes, imageHeight, imageWidth} = parseLabelMe(json)

  const displayShapes = shapes.map(({id, type, points}) =>({
    id,
    type,
    points,
    title: annotations[id]?.titleOnly ? annotations[id]?.title : annotations[id]?.title ? `${id} - ${annotations[id].title}` : id,
    props: {
      'data-id': id,
      style: {
        color: c(annotations[id]?.colour),
      },
      className: annotations[id]?.active ? active : '',
      onMouseEnter: () => list.setAnnotationActive(id, true),
      onMouseLeave: () => list.setAnnotationActive(id, false),
      ...annotations[id]?.props
    }
  }))

  console.log('rerender', displayShapes)

  return (
    <section
    	className={container}
      {...props}
    > 
      <div className={imageContainer}>
        <SVG shapes={displayShapes} imageHeight={imageHeight} imageWidth={imageWidth} />
        <Image image={image} {...props} />
      </div>
      {children}
    </section>
  )
}

export default ImageAnnotation

export {default as AnnotationKey} from './AnnotationKey'
export {default as AnnotationList} from './AnnotationList'