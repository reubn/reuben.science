import {useState} from 'react'
import Lazy from '../../Lazy'

import {loading} from './styles'

const Video = ({video, className, ...props}) => {
  const {sources, size: {width=1000, height=0}={}} = video

  const [loaded, setLoaded] = useState(false)

  return (
    <Lazy>
      {({_ref, inView, ...lazyProps}) => (
        <video
          ref={_ref}
          key={inView ? 1 : 0}

          onLoadedData={() => setLoaded(true)}

          width={width}
          height={height}

          className={loaded ? className : [loading, className].join(' ')}

          {...props}
          {...lazyProps}
        >
          {sources.map(({src, ...sourceProps}) => <source key={src} src={inView ? src : null} {...sourceProps} />)}
        </video>
      )}
    </Lazy>
  )
}

export default Video
