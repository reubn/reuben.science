import ActiveLink from '../ActiveLink'

import Section from '@/components/Section'
import Image from '@/components/Image'

import {photos as photosStyle, photo} from './styles'

const PhotoList = ({photos: {photos, width}, fallback=null, ...props}) => (
  photos.length
    ? (
      <Section heading="Recent Photos" moreHref="https://unsplash.com/re" moreAria="More Photos" {...props}>
          {photos.map(({id, desc, src, height}) => (
        <div className={photosStyle} style={{'--photo-count': photos.length, '--photo-width': `${width}px`}} role="grid">
            <a href={`https://unsplash.com/photos/${id}`} className={photo} title={`Photo: ${desc}`} key={id}>
              <Image image={{src, size: {width, height}}} alt={`Photo: ${desc}`} lazy={false} />
            </a>)
          )}
        </div>
      </Section>
    )
    : fallback
)

export default PhotoList
