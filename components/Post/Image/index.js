import {useState} from 'react'

import {loading} from './styles'

import Lazy from '../../Lazy'

const Image = ({src, className, ...props}) => {
  const densities = Array.isArray(src) ? src : [src]
  const srcset = densities.map((s, i) => `${s} ${i + 1}x`).join(', ')

  const [loaded, setLoaded] = useState(!process.browser)

  return (
    <Lazy>
      {({_ref, inView}) => (
        <img
          ref={_ref}

          onLoad={() => setLoaded(true)}

          src={inView ? densities[0] : ''}
          srcSet={inView ? srcset : ''}

          width={src.meta.width || 1000}
          height={src.meta.height || 0}
          className={loaded ? className : [loading, className].join(' ')}
          loading="lazy"
          {...props}
        />
      )}
    </Lazy>
  )
}

export default Image
