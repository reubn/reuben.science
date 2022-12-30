import {useState} from 'react'

import Card3D from './Card3D'

import {thumbnail} from './styles'

const CardLink = ({card}) => {
  const [flipCount, setFlipCount] = useState(0)

  return (
    <div className={thumbnail} onClick={() => setFlipCount(flip => flip + 1)}>
      <Card3D card={card} flipCount={flipCount} />
      <h1>{card.year}</h1>
    </div>
  )
}

export default CardLink