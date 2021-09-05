import {useState, useRef, useEffect, useMemo} from 'react'

import supportsWebp from '@/src/supportsWebp'
import makeSrcSet from '@/src/makeSrcSet'

import Lazy from '../Lazy'

import imageCacheList from './imageCacheList'

import {image as imageStyle, loading} from './styles'

const Image = ({image={}, className, lazy=true, alt, sizes='min(1000px, 100vw - 1rem)', ...props}) => {
  const {resolutions} = image
  const srcSet = useMemo(() => makeSrcSet(resolutions), [resolutions])

  const backingImage = useRef()

  const [loaded, setLoaded] = useState(!lazy)
  const [src, setSrc] = useState(resolutions[1].src)
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
      ) backingImage.current = createBackingImage({alt, image, sizes, onLoad, onError})
    }, [lazy, polyfilled, image, sizes, backingImage.current])

    useEffect(() => {
      if(inView && !usingReal && !backingImage.current.going) backingImage.current.go()
    }, [inView, usingReal, backingImage.current])

    return (
      <img
        ref={_ref}

        width={resolutions[1].width}
        height={resolutions[1].height}

        src={usingReal ? src : ''}
        srcSet={usingReal ? (!polyfilled ? srcSet : undefined) : ''}

        sizes={sizes}

        className={[imageStyle, className].join(' ')}
        style={{aspectRatio: `${resolutions[1].width}/${resolutions[1].height}`}}
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

  const {alt, image, sizes, onLoad, onError} = props
  const {resolutions} = image
  const srcSet = makeSrcSet(resolutions)

  const img = document.createElement('img')
  img.width = resolutions[1].width
  img.height = resolutions[1].height

  img.props = props

  img.go = () => {
    img.going = true

    img.src = resolutions[1].src
    img.srcset = srcSet
    img.sizes = sizes
  }

  img.onload = () => onLoad(img)
  img.onerror = () => onError(img)

  return img
}

export default Image
