import {useMemo} from 'react'

import makeSrcSet from '@/src/makeSrcSet'

import {image as imageStyle} from './styles'

const Image = ({image={}, className, lazy=true, alt, aspectRatio, sizes='min(1000px, 100vw - 1rem)', ...props}) => {
  const {resolutions} = image
  const srcSet = useMemo(() => makeSrcSet(resolutions), [resolutions])

  const baseResolution = resolutions[1]

  return (
    <img
      width={baseResolution.width}
      height={baseResolution.height}

      src={baseResolution.src}
      srcSet={srcSet}

      sizes={sizes}

      className={[imageStyle, className].join(' ')}
      style={{aspectRatio: aspectRatio || `${baseResolution.width}/${baseResolution.height}`}}
      loading={lazy ? "lazy" : "eager"}

      alt={alt}

      {...props}
    />
  )
}

export default Image
