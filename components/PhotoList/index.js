import ActiveLink from '../ActiveLink'

import Section from '@/components/Section'
import Image from '@/components/Image'

import {photos as photosStyle, photo} from './styles'

const PhotoList = ({photos: {photos, size}, fallback=null, ...props}) => (
  photos.length
    ? (
      <Section heading="Recent Photos" moreHref="https://unsplash.com/re" moreAria="More Photos" {...props}>
        <div className={photosStyle} style={{'--columns': Math.min(photos.length, 4), '--photo-size': `${size}px`}} role="grid">
          {photos.map(({id, desc, src}) => (
            <a href={`https://unsplash.com/photos/${id}`} className={photo} title={`Photo: ${desc}`} key={id}>
              <Image image={{src, size: {width: size}}} alt={`Photo: ${desc}`} lazy={false} />
            </a>)
          )}
        </div>
      </Section>
    )
    : fallback
)

export default PhotoList
