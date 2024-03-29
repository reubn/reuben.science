import {useMemo} from 'react'
import QuantityText from '../QuantityText'

import {
  alternative as alternativeStyle,
  hover as hoverStyle,
  name as nameStyle,
  comment as commentStyle
} from './styles'

export const IngredientText = ({ingredient, displayedWithName=true, displayedWithQuantity=true, quantityInteractive=false, highlightOnHover=undefined, className, onNameClick, children, ...props}) => {
  const displayQuantity = ingredient.displayQuantity
  const isHovered = ingredient.hover === highlightOnHover

  const rotationUnits = quantityInteractive && useMemo(() => displayQuantity?.sensibleUnits, [displayQuantity])
  const isQuantityInteractive = rotationUnits && rotationUnits.length > 1

  const onQuantityClick = isQuantityInteractive && (() => {
    const currentIndex = rotationUnits.findIndex(({unit}) => unit === displayQuantity.unit)
    const nextIndex = (currentIndex + 1) % rotationUnits.length

    ingredient.setDisplayUnit(rotationUnits[nextIndex].unit)
  })

  const onMouseDown = event => (event.detail >= 2) && event.preventDefault()

  const nameComment = displayedWithName && (
    <span style={{'--ingredient-accent': `var(--colours-${ingredient.colour})`, cursor: onNameClick ? 'pointer' : undefined}} onClick={onNameClick}>
      {' '}
      <span className={nameStyle}>{children || ingredient.name}</span>
      {ingredient.comment && <span className={commentStyle}> {['-', '+', '(', '[', '/'].includes(ingredient.comment[0]) ? '' : '- '}{ingredient.comment}</span>}
    </span>
  )

  return (
    <span
      className={[className, isHovered && hoverStyle].filter(cn => cn).join(' ')}
      {...props}
    >
      {displayedWithQuantity && displayQuantity && <QuantityText quantity={displayQuantity} isInteractive={isQuantityInteractive} isHovered={isHovered} displayedWithName={displayedWithName} onClick={onQuantityClick || undefined} onMouseDown={onMouseDown} />}
      {nameComment}
    </span>
  )
}

export default IngredientText
