import {useState, useRef, useEffect} from 'react'

import supportsWebp from '@/src/supportsWebp'

import Lazy from '../Lazy'

import imageCacheList from './imageCacheList'

import {image as imageStyle, loading} from './styles'

const Image = ({image={}, className, lazy=true, alt, ...props}) => {
  const {src: srcProp='', srcSet='', size: {width, height}={}} = image

  const backingImage = useRef()

  const [loaded, setLoaded] = useState(!lazy)
  const [src, setSrc] = useState(srcProp)
  const [polyfilled, setPolyfilled] = useState(false)

  const imageInCache = imageCacheList.has(src)

  const onLoad = img => {
    imageCacheList.add(src)
    setLoaded(true)
  }

  const onError = async img => {
    if(await supportsWebp()) return
    if(!img.currentSrc.endsWith('.webp')) return

    const {default: decodeWebp} = await import('@/src/decodeWebp')

    const result = await decodeWebp(polyfillSrc)
    setSrc(result)
    setPolyfilled(true)
  }

  const imageFn = ({_ref, inView, ...lazyProps}) => {
    const noScript = lazyProps['data-noscript'] === 'yes'
    const usingReal = imageInCache || loaded || noScript || polyfilled
    const loadingMode = (lazy && !noScript) ? 'eager' : 'lazy' /* we're handling the lazy loading, dw*/

    useEffect(() => {
      if(
        lazy && !polyfilled && (
          !backingImage.current || backingImage.current.props.image !== image
        )
      ) backingImage.current = createBackingImage({alt, image, onLoad, onError})
    }, [lazy, polyfilled, image, backingImage.current])

    useEffect(() => {
      if(inView && !usingReal && !backingImage.current.going) backingImage.current.go()
    }, [inView, usingReal, backingImage.current])

    return (
      <img
        ref={_ref}

        width={width}
        height={height}

        src={usingReal ? src : ''}
        srcSet={usingReal ? (!polyfilled ? srcSet : undefined) : ''}

        className={[imageStyle, className].join(' ')}
        style={{aspectRatio: `${width}/${height}`}}
        loading={loadingMode}

        alt={alt}

        {...props}
        {...lazyProps}
      />
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

const createBackingImage = props => {
  if(typeof window === 'undefined') return

  const {alt, image, onLoad, onError} = props
  const {src='', srcSet='', size: {width, height}={}} = image
  
  const img = document.createElement('img')
  img.width = width
  img.height = height

  img.props = props

  img.go = () => {
    img.going = true

    img.src = src
    img.srcset = srcSet
  }

  img.onload = () => onLoad(img)
  img.onerror = () => onError(img)

  return img
}

export default Image
