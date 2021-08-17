import {
  interactive as interactiveStyle,
  hover as hoverStyle,
  quantity as quantityStyle,
  value as valueStyle,
  unit as unitStyle,
  noUnitSpacing as noUnitSpacingStyle
} from './styles'

export const QuantityText = ({quantity, isInteractive, isHovered, displayedWithName, className, ...props}) => {
  const components = quantity.formatted({displayedWithName: displayedWithName})
  const unit = quantity.unit
  
  const elements = components.map(([type, content, noUnitSpacing, alt]) => ({
     value: () => <span className={valueStyle}>{content}</span>,
     unit: () => <span className={`${unitStyle} ${noUnitSpacing ? noUnitSpacingStyle : ''}`} title={alt}>{content}</span>,
     raw: () => content
   })[type]())

  return (
    <span
     className={[quantityStyle, className, isInteractive && interactiveStyle, isHovered && hoverStyle].filter(cn => cn).join(' ')}
     style={{'--unit-accent': `var(--colours-${unit.colour})`}}
     {...props}
    >
      {elements}
    </span>
  )
}

export default QuantityText
