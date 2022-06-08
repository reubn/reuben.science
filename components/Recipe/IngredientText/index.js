import QuantityText from '../QuantityText'

import {
  alternative as alternativeStyle,
  hover as hoverStyle,
  name as nameStyle,
  comment as commentStyle,
  conjunction
} from './styles'

export const IngredientText = ({ingredient, alternative=false, displayedWithName=true, displayedWithQuantity=true, interactive=false, highlightOnHover=undefined, className, onNameClick, ...props}) => {
  const displayQuantity = ingredient.displayQuantity
  const isHovered = ingredient.hover === highlightOnHover

  const rotationUnits = interactive && displayQuantity?.sensibleUnits
  const isQuantityInteractive = rotationUnits && rotationUnits.length > 1

  const onQuantityClick = isQuantityInteractive && (() => {
    const currentIndex = rotationUnits.indexOf(displayQuantity.unit)
    const nextIndex = (currentIndex + 1) % rotationUnits.length

    ingredient.setDisplayUnit(rotationUnits[nextIndex])
  })

  const onMouseDown = event => (event.detail >= 2) && event.preventDefault()

  const nameComment = displayedWithName && (
    <span style={{ '--ingredient-accent': `var(--colours-${ingredient.colour})`, cursor: interactive ? 'pointer' : undefined }} onClick={interactive && onNameClick}>
      {' '}
      <span className={nameStyle}>{ingredient.name}</span>
      {ingredient.comment && <span className={commentStyle}> {['-', '+', '(', '[', '/'].includes(ingredient.comment[0]) ? '' : '- '}{ingredient.comment}</span>}
    </span>
  )

  return (
    <span
      className={[className, alternative && alternativeStyle, isHovered && hoverStyle].filter(cn => cn).join(' ')}
      {...props}
    >
      {alternative && <span className={conjunction}>or </span>}
      {displayedWithQuantity && displayQuantity && <QuantityText quantity={displayQuantity} isInteractive={isQuantityInteractive} isHovered={isHovered} displayedWithName={displayedWithName} onClick={onQuantityClick || undefined} onMouseDown={onMouseDown} />}
      {nameComment}
    </span>
  )
}

export default IngredientText
