import Lazy from '../../Lazy'

const Video = ({srcSet, ...props}) => {

  return (
    <Lazy>
      {({_ref, inView}) => (
        <video
          ref={_ref}
          key={inView ? 1 : 0}
          width={srcSet.meta.width || 1000}
          height={srcSet.meta.height || 0}

          {...props}>
          {srcSet.map(({src, ...srcProps}) => <source src={inView ? src : null} {...srcProps} />)}
        </video>
      )}
    </Lazy>
  )
}

export default Video
