import QuantityText from '../QuantityText'

import {
  alternative as alternativeStyle,
  hover as hoverStyle,
  name as nameStyle,
  comment as commentStyle,
  conjunction
} from './styles'

export const IngredientText = ({ingredient, alternative=false, name=true, interactive=false, highlightOnHover=undefined, className, ...props}) => {
  const rotationUnits = interactive && ingredient.quantity.sensibleUnits
  const onClick = interactive && (() => {
    if(rotationUnits.length <= 1) return

    const currentIndex = rotationUnits.indexOf(ingredient.displayQuantity.unit)
    const nextIndex = (currentIndex + 1) % rotationUnits.length

    ingredient.setDisplayUnit(rotationUnits[nextIndex])
  })

  const isHovered = ingredient.hover === highlightOnHover
  const isInteractive = rotationUnits && rotationUnits.length > 1

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
        <QuantityText quantity={ingredient.displayQuantity} isInteractive={isInteractive} isHovered={isHovered} displayedWithName={name} onClick={onClick} />
        {nameComment}
      </span>
  )
}

export default IngredientText
