import {useState} from 'react'

import supportsWebp from '@/src/supportsWebp'

import Lazy from '../Lazy'

import {image as imageStyle, loading, notLoading, imageLoading, intersectionHandle} from './styles'

const Image = ({image={}, className, lazy=true, alt, ...props}) => {
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

  const imageFn = ({_ref, inView, ...lazyProps}) => {
    let insideLoaded = lazyProps['data-noscript'] === 'yes' ? true : loaded

    return (
      <>
        <img
          ref={_ref}
          id={id}

          onLoad={event => setLoaded(event.target.complete)}
          onError={() => inView && onError()}

          src={(insideLoaded || inView) ? useSrc : ''}
          srcSet={(insideLoaded || inView) ? useSrc === src ? srcSet : undefined : ''}

          width={width}
          height={height}
          className={[imageStyle, className, insideLoaded ? '' : imageLoading].join(' ')}
          loading={lazy ? "eager" : "lazy" /* we're handling the lazy loading, dw*/}

          {...props}
          {...lazyProps}
        />
        <span
          key={id}
          className={[className, insideLoaded ? notLoading : loading].join(' ')}
          style={{aspectRatio: `${width}/${height}`}}
          {...lazyProps}
          >
            {alt}
        </span>
      </>
    )
  }

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
