import {
  input,
  title as titleStyle,
  label as labelStyle,
  strikeThrough as strikeThroughStyle,
  container
} from './styles'

export {top, bottom, left, right} from './styles'

export default ({title, type, value, onChange: _onChange, className, labels: labelsConfig=[], colour, colourActive, emphasis, highlight, strikeThrough, style: styleProp={}, ...props}) => {
  const onChange = event => {
    const {target: {value}} = event
    if(type === 'number') {
      const parsed = parseFloat(value)

      return _onChange(isNaN(parsed) ? undefined : parsed, event)
    }

    return _onChange(value, event)
  }

  const labels = labelsConfig.filter(label => label.text).map(({text, colour, colourActive='light', position, className, onClick, ...props}) => {
    const style = {
      cursor: onClick ? 'pointer' : undefined,
      '--border-colour-label': `var(--colours-${colour})`,
      '--border-colour-active-label': `var(--colours-${colourActive})`,
    }

    return (
      <span style={style} key={position} className={`${[...position, labelStyle].join(' ')} ${className}`} onClick={onClick} {...props}>{text}</span>
    )
  })

  const style = {
    '--input-colour': colour ? `var(--colours-${colour})` : undefined,
    '--input-colour-active': colourActive ? `var(--colours-${colourActive})` : undefined,

    '--border-colour': emphasis ? `var(--colours-${emphasis})` : undefined,
    '--border-colour-active': emphasis ? `var(--colours-${emphasis})` : `var(--colours-${highlight})` || undefined,
    '--border-colour-label': emphasis ? `var(--colours-light` : undefined,

    ...styleProp
  }

  return (
    <label className={`${container} ${className}`} style={style}>
      <span className={titleStyle}>{title}</span>
      {labels}
      <input
        className={`${input} ${strikeThrough ? strikeThroughStyle : ''}`}
        type={type}
        value={value === undefined ? '' : value}
        onChange={onChange}

        {...props}
      />
    </label>
  )
}