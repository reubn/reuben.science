import QuantityText from '../QuantityText'

import {
  alternative as alternativeStyle,
  hover as hoverStyle,
  name as nameStyle,
  comment as commentStyle,
  conjunction
} from './styles'

export const IngredientText = ({ingredient, alternative=false, name=true, interactive=false, highlightOnHover=undefined, className, ...props}) => {
  const displayQuantity = ingredient.displayQuantity
  const isHovered = ingredient.hover === highlightOnHover

  const rotationUnits = interactive && ingredient.quantity.sensibleUnits
  const isInteractive = rotationUnits && rotationUnits.length > 1

  const onClick = isInteractive && (() => {
    const currentIndex = rotationUnits.indexOf(displayQuantity.unit)
    const nextIndex = (currentIndex + 1) % rotationUnits.length

    ingredient.setDisplayUnit(rotationUnits[nextIndex])
  })

  const nameComment = name && (
    <span style={{'--ingredient-accent': `var(--colours-${ingredient.colour})`}}>
      <span className={nameStyle}>{ingredient.name}</span>
      {ingredient.comment && <span className={commentStyle}> - {ingredient.comment}</span>}
    </span>
  )

  return (
    <span
      className={[className, alternative && alternativeStyle, isHovered && hoverStyle].filter(cn => cn).join(' ')}
      {...props}
      >
        {alternative && <span className={conjunction}>or </span>}
        <QuantityText quantity={displayQuantity} isInteractive={isInteractive} isHovered={isHovered} displayedWithName={name} onClick={onClick} />
        {nameComment}
      </span>
  )
}

export default IngredientText
