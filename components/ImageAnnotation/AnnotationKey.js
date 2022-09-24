import {useState, useEffect} from 'react'

import c from '@/src/colour'

import {key, colourIndicator, active, group, primary, secondary} from './styles'

const AnnotationKey = ({list, style, ...props}) => {
  const [annotations, setAnnotations] = useState({})

  useEffect(() => {
    const update = () => {
      setAnnotations({...list.annotations})
    }

    list.addEventListener('change', update)

    update()

    return () => {
      list.removeEventListener('change', update)
    }
  }, [list])

  const annotationsEntries = Object.entries(annotations)

  return (
    <ul className={key} style={{...style, '--annotations-count': annotationsEntries.length}}{...props}>
      {annotationsEntries.map(([id, annotation]) => (
        <li
          key={id}
          data-marker=""
          id={`key-${id}`}
          style={{'--colour': c(annotation.colour)}}
          className={annotation.active ? active : ''}
          onMouseEnter={() => list.setAnnotationActive(id, 'key')}
          onMouseLeave={() => list.setAnnotationActive(id, false)}
        >
          <a href={`#svg-${id}`}>
            <div className={colourIndicator}>
              {annotation.icon}
            </div>
          </a>
          <div className={group}>
            <span className={primary}>{list.getTitle(id)}</span>
            {list.getDesc(id) && <span className={secondary}>{list.getDesc(id)}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AnnotationKey