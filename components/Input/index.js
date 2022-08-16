import {useRef, useState} from 'react'
import {
  input,
  title as titleStyle,
  label as labelStyle,
  strikeThrough as strikeThroughStyle,
  container
} from './styles'

export {top, bottom, left, right} from './styles'

const Input = ({
  title,
  type,
  value,
  onChange: _onChange,
  onFocus: _onFocus,
  onBlur: _onBlur,
  className,
  labels: labelsConfig=[],
  colour,
  colourActive, 
  emphasis, 
  highlight, 
  strikeThrough, 
  style: styleProp={}, 
  ...props
}) => {
  const {current: inputId} = useRef(Math.random())
  const preventScrollEdits = useRef(false)

  const [focusState, setFocusState] = useState(false)
  const onFocus = event => {
    setFocusState(true)
    _onFocus?.(event)
  }
  const onBlur = event => {
    setFocusState(false)
    _onBlur?.(event)
  }

  const onChange = event => {
    if(preventScrollEdits.current) return preventScrollEdits.current = false

    const {target: {value}} = event
    if(type === 'number') {
      const parsed = parseFloat(value)

      return _onChange(isNaN(parsed) ? undefined : parsed, event)
    }

    return _onChange(value, event)
  }

  const labels = labelsConfig.filter(label => label.text).map(({text, actionText, colour, colourActive='light', position, className, onClick, ...otherProps}) => {
    const style = {
      '--border-colour-label': `var(--colours-${colour})`,
      '--border-colour-active-label': `var(--colours-${colourActive})`
    }

    const props = {
      style,
      key: position,
      className: `${[...position, labelStyle].join(' ')} ${className}`,
      role: onClick ? 'button' : 'status',
      tabIndex: focusState ? undefined : -1, // Input must be focused before button can be focused => tabbing back takes user to input
      'aria-live': 'off',
      onClick: onClick,
      ...otherProps
    }

    return (
      onClick
       ? (
        <button {...props}>
          <span>{text}</span>
          <span>{actionText}</span>
       </button>
       )
       : (
        <span {...props}>
          <span>{text}</span>
          <span>{actionText}</span>
       </span>
       )
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
    <control 
      className={`${container} ${className}`}
      style={style}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <input
        className={`${input} ${strikeThrough ? strikeThroughStyle : ''}`}
        type={type}
        value={value === undefined ? '' : value}
        onChange={onChange}

        id={inputId}
        title={title}

        onWheel={() => preventScrollEdits.current = true}
        
        {...props}
      />
      <label className={titleStyle} htmlFor={inputId}>{title}</label>
      {labels}
    </control>
  )
}

export default Input