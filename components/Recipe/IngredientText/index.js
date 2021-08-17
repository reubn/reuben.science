import {
  interactive as interactiveStyle,
  alternative as alternativeStyle,
  hover as hoverStyle,
  quantity as quantityStyle,
  value as valueStyle,
  unit as unitStyle,
  name as nameStyle,
  noUnitSpacing as noUnitSpacingStyle,
  conjunction
} from './styles'

export const IngredientText = ({ingredient, alternative=false, name=true, interactive=false, highlightOnHover=undefined, className, ...props}) => {
  const components = ingredient.displayQuantity.formatted({displayedWithName: name})
  const unit = ingredient.displayQuantity.unit

  const hover = ingredient.hover

  const rotationUnits = interactive && ingredient.quantity.sensibleUnits
  const onClick = interactive && (() => {
    if(rotationUnits.length <= 1) return

    const currentIndex = rotationUnits.indexOf(ingredient.displayQuantity.unit)
    const nextIndex = (currentIndex + 1) % rotationUnits.length

    ingredient.setDisplayUnit(rotationUnits[nextIndex])
  })

  return (
    <span
      className={[className, alternative && alternativeStyle, rotationUnits.length > 1 && interactiveStyle, (hover === highlightOnHover) && hoverStyle].filter(cn => cn).join(' ')}
      {...props}
      >
        {alternative && <span className={conjunction}>or </span>}
        <span
         className={quantityStyle}
         style={{'--unit-accent': `var(--colours-${unit.colour})`}}
         onClick={onClick}
         >
         {
           components.map(([type, content, noUnitSpacing, alt]) => ({
             value: () => <span className={valueStyle}>{content}</span>,
             unit: () => <span className={`${unitStyle} ${noUnitSpacing ? noUnitSpacingStyle : ''}`} title={alt}>{content}</span>,
             raw: () => content
           })[type]())
         }
        </span>
        {name && <span className={nameStyle}>{ingredient.name}</span>}
      </span>
  )
}

export default IngredientText
