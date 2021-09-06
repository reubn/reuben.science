import {
  interactive as interactiveStyle,
  hover as hoverStyle,
  quantity as quantityStyle,
  value as valueStyle,
  unit as unitStyle
} from './styles'

export const QuantityText = ({quantity, isInteractive, isHovered, displayedWithName, className, ...props}) => {
  const components = quantity.formatted({displayedWithName: displayedWithName})
  const unit = quantity.unit

  const elements = components.map(([type, content, fullSpaceBeforeUnit, alt=unit.name]) => ({
     value: () => <span key={content} className={valueStyle}>{content}</span>,
     unit: () => (
       <>
         <span style={fullSpaceBeforeUnit ? undefined : {display: 'inline-block', width: '1px'}}>{' '}</span>
         <span key={content} className={unitStyle} title={alt}>{content}</span>
       </>
     ),
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
