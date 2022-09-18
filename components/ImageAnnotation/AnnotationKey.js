import {useState, useEffect} from 'react'

import c from '@/src/colour'

import {key, colourIndicator, active, group, primary, secondary} from './styles'

const AnnotationKey = ({list}) => {
  const [annotations, setAnnotations] = useState({})

  useEffect(() => {
    console.log('list changed - key', list)
    
    const update = () => {
      setAnnotations({...list.annotations})
    }

    list.addEventListener('change', update)

    update()

    return () => {
      list.removeEventListener('change', update)
    }
  }, [list])

  return (
    <ul className={key}>
      {Object.entries(annotations).map(([id, annotation]) => (
        <li
          key={id}
          data-marker=""
          id={`key-${id}`}
          style={{'--colour': c(annotation.colour)}}
          className={annotation.active ? active : ''}
          onMouseEnter={() => list.setAnnotationActive(id, true)}
          onMouseLeave={() => list.setAnnotationActive(id, false)}
        >
          <a href={`#svg-${id}`}><div className={colourIndicator} /></a>
          <div className={group}>
            <span className={primary}>{annotation?.titleOnly ? annotation.title : id}</span>
            {!annotation?.titleOnly && annotation?.title && <span className={secondary}>{annotation.title}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AnnotationKey