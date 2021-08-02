import {useState} from 'react'

import supportsWebp from '@/src/supportsWebp'

import Lazy from '../Lazy'

import {image as imageStyle, loading} from './styles'

const Image = ({image={}, className, lazy=true, ...props}) => {
  const {src='', srcSet='', size: {width, height}={}, id} = image

  const [loaded, setLoaded] = useState(!lazy)
  const [useSrc, setUseSrc] = useState(src)

  const onError = async () => {
    if(await supportsWebp()) return

    const polyfillSrc = document.getElementById(id).currentSrc
    if(!polyfillSrc.endsWith('.webp')) return

    const {default: decodeWebp} = await import('@/src/decodeWebp')

    setUseSrc(await decodeWebp(polyfillSrc))
  }

  const imageFn = ({_ref, inView, ...lazyProps}) => (
    <img
      ref={_ref}
      id={id}

      onLoad={() => setLoaded(true)}
      onError={() => inView && onError()}

      src={inView ? useSrc : ''}
      srcSet={inView ? useSrc === src ? srcSet : undefined : ''}

      width={width}
      height={height}
      className={[imageStyle, className, loaded ? '' : loading].join(' ')}
      loading={lazy ? "eager" : "lazy" /* we're handling the lazy loading, dw*/}

      {...props}
      {...lazyProps}
    />
  )

  return (
    lazy
    ? (
      <Lazy>
        {imageFn}
      </Lazy>
    )
    : imageFn({inView: true})
  )
}

export default Image
