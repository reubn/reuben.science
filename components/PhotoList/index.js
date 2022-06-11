import ActiveLink from '../ActiveLink'

import Section from '@/components/Section'
import Image from '@/components/Image'

import {photos as photosStyle, photo} from './styles'

const PhotoList = ({photos: {photos, width, maxHeight}, fallback=null, ...props}) => (
  photos.length
    ? (
      <Section heading="Recent Photos" moreHref="https://unsplash.com/re" moreAria="More Photos" {...props}>
        <div className={photosStyle} style={{'--photo-count': photos.length, '--photo-width': `${width}px`}} role="list">
          {photos.map(({id, desc, resolutions}) => (
            <a href={`https://unsplash.com/photos/${id}`} className={photo} title={`Photo: ${desc}`} key={id} role="listitem">
              <Image image={{id, resolutions}} alt={`Photo: ${desc}`} lazy={false} aspectRatio={`${resolutions[1].width}/${resolutions[1].width * Math.min(maxHeight / width, resolutions[1].height / resolutions[1].width)}`} sizes="(max-width: 360px) calc(min(1000px, 100vw - 3.5rem) - 1rem), (max-width: 800px) calc((min(1000px, 100vw - 3.5rem) - 1rem) / 2), (max-width: 900px) calc((min(1000px, 100vw - 3.5rem) - 1rem) / 3), calc((min(1000px, 100vw - 3.5rem) - 1rem) / 4)" />
            </a>)
          )}
        </div>
      </Section>
    )
    : fallback
)

export default PhotoList
