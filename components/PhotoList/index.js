import ActiveLink from '../ActiveLink'

import Section from '@/components/Section'
import Image from '@/components/Image'

import {photos as photosStyle, photo} from './styles'

const PhotoList = ({photos: {photos, size}, fallback=null, ...props}) => (
  photos.length
    ? (
      <Section heading="Recent Photos" moreHref="https://unsplash.com/re" moreAria="More Photos" {...props}>
        <section className={photosStyle} style={{'--columns': Math.min(photos.length, 4), '--photo-size': `${size}px`}}>
          {photos.map(({src, id}) => (
            <a href={`https://unsplash.com/photos/${id}`} className={photo} aria-label="Unsplash Photo" key={id}>
              <Image image={{src, size: {width: size}}} alt="Unsplash Photo" lazy={false} />
            </a>)
          )}
        </section>
      </Section>
    )
    : fallback
)

export default PhotoList
