import Lazy from '../../Lazy'

const Image = ({src, ...props}) => {
  const densities = Array.isArray(src) ? src : [src]
  const srcset = densities.map((s, i) => `${s} ${i + 1}x`).join(', ')

  return (
    <Lazy>
      {({_ref, inView}) => (
        <img
          ref={_ref}

          src={inView ? densities[0] : ''}
          srcSet={inView ? srcset : ''}

          width={src.meta.width || 1000}
          height={src.meta.height || 0}
          loading="lazy"
          {...props}
        />
      )}
    </Lazy>
  )
}

export default Image
