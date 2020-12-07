import {useState} from 'react'
import Lazy from '../../Lazy'

import {loading} from './styles'

const Video = ({srcSet, className, ...props}) => {
  const [loaded, setLoaded] = useState(!process.browser)

  return (
    <Lazy>
      {({_ref, inView}) => (
        <video
          ref={_ref}
          key={inView ? 1 : 0}

          onLoadedData={() => setLoaded(true)}

          width={srcSet.meta.width || 1000}
          height={srcSet.meta.height || 0}

          className={loaded ? className : [loading, className].join(' ')}

          {...props}>
          {srcSet.map(({src, ...srcProps}) => <source src={inView ? src : null} {...srcProps} />)}
        </video>
      )}
    </Lazy>
  )
}

export default Video
