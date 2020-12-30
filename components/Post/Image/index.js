import {useState, useRef} from 'react'

import {loading} from './styles'

import Lazy from '../../Lazy'

import supportsWebp from '@/src/supportsWebp'

const Image = ({image, className, ...props}) => {
  const {src, srcSet='', size: {width=1000, height=0}={}} = image

  const imageId = useRef(Math.random())

  const [loaded, setLoaded] = useState(false)
  const [useSrc, setUseSrc] = useState(src)

  const onError = async () => {
    if(await supportsWebp()) return

    const polyfillSrc = document.getElementById(imageId.current).currentSrc
    if(!polyfillSrc.endsWith('.webp')) return

    const {default: decodeWebp} = await import('@/src/decodeWebp')

    setUseSrc(await decodeWebp(polyfillSrc))
  }

  return (
    <Lazy>
      {({_ref, inView, ...lazyProps}) => (
        <img
          ref={_ref}
          id={imageId.current}

          onLoad={() => setLoaded(true)}
          onError={() => inView && onError()}

          src={inView ? useSrc : ''}
          srcSet={inView ? useSrc === src ? srcSet : undefined : ''}

          width={width}
          height={height}
          className={loaded ? className : [loading, className].join(' ')}
          loading="lazy"

          {...props}
          {...lazyProps}
        />
      )}
    </Lazy>
  )
}

export default Image
