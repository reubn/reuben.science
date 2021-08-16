import {
  interactive as interactiveStyle,
  alternative as alternativeStyle,
  hover as hoverStyle,
  quantity as quantityStyle,
  value as valueStyle,
  unit as unitStyle,
  name as nameStyle,
  normalSpace as normalSpaceStyle,
  conjunction
} from './styles'

export const IngredientText = ({ingredient, alternative=false, name=true, interactive=false, highlightOnHover=undefined, className, ...props}) => {
  const [value, unit, normalSpace] = ingredient.displayQuantity.formatted({displayedWithName: name})
  const unitAccentColour = ingredient.displayQuantity.unit.colour

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
         className={[quantityStyle, normalSpace && normalSpaceStyle].filter(nc => nc).join(' ')}
         style={unit && {'--unit-accent': `var(--colours-${unitAccentColour})`}}
         onClick={onClick}
         >
          <span className={valueStyle}>{value}</span>
          {normalSpace ? ' ' : ''}
          {unit && <span className={unitStyle} title={ingredient.displayQuantity.unit.name}>{unit}</span>}
        </span>
        {name && <span className={nameStyle}>{ingredient.name}</span>}
      </span>
  )
}

export default IngredientText
