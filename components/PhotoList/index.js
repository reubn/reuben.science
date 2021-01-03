import ActiveLink from '../ActiveLink'

import Section from '@/components/Section'
import {photos as photosStyle, photo} from './styles'

const PhotoList = ({photos, photoSize, fallback=null, ...props}) => (
  photos.length
    ? (
      <Section heading="Recent Photos" moreHref="https://unsplash.com/re" moreAria="More Photos" {...props}>
        <section className={photosStyle} style={{'--columns': Math.min(photos.length, 4), '--photo-size': `${photoSize}px`}}>
          {photos.map(({src, id}) => (
            <a href={`https://unsplash.com/photos/${id}`} className={photo} aria-label={`Unsplash Photo ${id}`} key={id}>
              <img src={src} alt={`Unsplash Photo ${id}`} />
            </a>)
          )}
        </section>
      </Section>
    )
    : fallback
)

export default PhotoList
