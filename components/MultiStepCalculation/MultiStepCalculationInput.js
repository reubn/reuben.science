import {useState, useEffect, useRef} from 'react'

import Input, {top, bottom, left, right} from '@/components/Input'

import {SPECIFIED, ALL_CHILDREN_SPECIFIED, PENDING, IN_USE, CALCULATED} from './MultiStepCalculationGraph'

const VALID = String('VALID')
const INVALID = String('INVALID')
const UNKNOWN = String('UNKNOWN')

const defaultValidator = rawValue => {
  console.log('VALIDATING', rawValue, typeof rawValue)

  if(typeof rawValue === 'number') {
    return {validity: VALID, parsed: rawValue}
  }

  if(!rawValue?.length) return {validity: UNKNOWN}

  const parsed = parseFloat(rawValue)
  const validity = !isNaN(parsed) && !rawValue.match(/[^\.0-9\-]/)

  return {
    validity: validity ? VALID : INVALID,
    parsed
  }
}

export const MultiStepCalculationInput = ({node, title, type, emphasis, userInputSuggested: showAsUserInput, validator=defaultValidator, ...props}) => {
  const inputRef = useRef(null)
  const [needToUpdate, forceUpdate] = useState({})

  const [focusState, setFocusState] = useState(false)
  const [focusStateAnyInstance, setFocusStateAnyInstance] = useState(false)

  const tabbable = !focusStateAnyInstance || focusState
  const focusStateOtherInstance = focusStateAnyInstance && !focusState
  const focusStateInput = focusState && document.activeElement === inputRef.current

  useEffect(() => {
    const handler = ({detail: {focusState}}) => setFocusStateAnyInstance(focusState)

    node.addEventListener('focusState', handler)
    return () => node.removeEventListener('focusState', handler)
  }, [node])


  const [valueContainer, _setValueContainer] = useState({nodeValue: node.value, valueAsEntered: undefined, validity: UNKNOWN})
  const {nodeValue, valueAsEntered, validity} = valueContainer

  const displayValue = valueAsEntered || nodeValue

  const flags = {
    userOverridden: !showAsUserInput && node.valueState === SPECIFIED && !node.isRoot,
    userInputNeeded: (showAsUserInput || node.isRoot) && node.valueState === PENDING && node.useState === IN_USE,
    ignored: node.useState === ALL_CHILDREN_SPECIFIED,
    waiting: !node.isRoot && node.valueState === PENDING && node.useState !== ALL_CHILDREN_SPECIFIED,
    calculated: !node.isRoot && node.valueState === CALCULATED,
    noSideEffects: node.useState === ALL_CHILDREN_SPECIFIED || node.isLeaf,
    canUserOverride: !showAsUserInput && !node.isRoot && !node.isLeaf,
    wontSpringBackOnceEmpty: (showAsUserInput && !node.inputsSatisfied) || node.isRoot,
  } 

  const newValueFromUser = (newValue, commitUndefined=flags.wontSpringBackOnceEmpty) => {
    console.log('newValueFromUser', node.id, newValue)

    const {parsed, validity} = validator(newValue)

    _setValueContainer({nodeValue: parsed, valueAsEntered: newValue, validity})

    if(validity === VALID && nodeValue !== parsed) return node.setSpecifiedValue(parsed)
    if(validity === UNKNOWN && commitUndefined) return node.setSpecifiedValue(undefined)
  }

  const newValueFromNode = newValue => {
    console.log('newValueFromNode', node.id, newValue)

    const {validity} = validator(newValue)

    _setValueContainer({nodeValue: newValue, validity})
  }

  useEffect(() => newValueFromNode(node.value), [needToUpdate])

  const [specifiedValueAtFocus, setSpecifiedValueAtFocus] = useState(null)

  useEffect(() => {
    const handler = () => {
      // console.log('UPDATING INPUT', node.id)
      forceUpdate({})
    }

    node.addEventListener('nodeValueChanged', handler)
    node.addEventListener('childNodeValueChanged', handler)

    return () => {
      node.removeEventListener('nodeValueChanged', handler)
      node.removeEventListener('childNodeValueChanged', handler)
    }

  }, [node])

  const onChange = valueAsEntered => newValueFromUser(valueAsEntered)

  const onFocus = () => {
    setFocusState(true)
    setSpecifiedValueAtFocus(node.valueState === SPECIFIED ? node.value : undefined)
    node.fireEvent('focusState', {focusState: true})
  }

  const onBlur = () => {
    setFocusState(false)
    node.fireEvent('focusState', {focusState: false})

    console.log('onBlur', {validity})
    
    if(validity === INVALID) newValueFromUser(specifiedValueAtFocus, true)
    if(validity === UNKNOWN) newValueFromUser(undefined, !flags.wontSpringBackOnceEmpty)
  }

  const colour  = (
    flags.ignored ? 'dark-5' : 
    flags.userOverridden ? 'purple' :
    emphasis ||
    undefined
  )

  let topRight = (
    validity === INVALID ? {text: 'ERR', colour: 'red'} :
    flags.userInputNeeded ? {text: 'Enter Value', colour: 'blue'} :
    flags.waiting ? {text: 'Waiting to Calc', colour: 'mid-2'} :
    flags.ignored ? {text: 'Not Used', colour: 'mid-2'} :
    flags.calculated ? {text: 'Calculated', colour: 'aqua'} :
    // flags.userOverridden ? undefined :
    {text: 'OK', colour: 'green'}
  )

  if(flags.canUserOverride && focusStateInput && validity !== INVALID) topRight = (
    flags.waiting ? {text: 'Enter Value to Lock', colour: topRight.colour} :
    flags.calculated ? {text: 'Edit Value to Lock', colour: topRight.colour} :
    topRight
  )

  const bottomRight = (
    flags.userOverridden ? {text: 'Locked', actionText: 'Unlock', colour: 'purple', onClick: event => {node.setSpecifiedValue(undefined); document.activeElement.blur()}} :
    // flags.calculated && !focusStateInput ? {text: 'Lock', colour: 'purple', onClick: event => {node.setSpecifiedValue(node.value); inputRef.current.select()}} :
    undefined
  )

  const bottomLeft = (
    flags.waiting && !showAsUserInput ? {text: `${node.parents.filter(node => node.valueState !== PENDING).length}/${node.parents.length} Inputs`, colour: 'mid-2'} :
    undefined
  )

  const highlight = (
    validity === INVALID ? 'red' :
    flags.userOverridden ? 'purple' :
    topRight?.colour
  )

  let labels = [
    {position: [top, right], ...topRight},
    {position: [bottom, right], ...bottomRight},
    {position: [bottom, left], ...bottomLeft}
  ]

  // if(flags.userOverridden) emphasis = 'purple'
  if(focusStateOtherInstance) emphasis = emphasis || highlight
  if(emphasis) labels = labels.map(label => ({...label, colour: 'light'}))
  if(flags.ignored) labels = labels.map(label => ({...label, colour: 'dark-5'}))

  const typeOptions = ({
    number: {
      type: 'text',
      inputMode: 'decimal',
      onKeyDown: event => {
        const {key} = event
        const current = validity !== VALID ? 0 : nodeValue

        const setTo = delta => {
          if(!flags.noSideEffects) newValueFromUser(current + delta)
          event.preventDefault()
        }

        if(key === 'ArrowUp') setTo(+1)
        if(key === 'ArrowDown') setTo(-1)
      }
    }
  })[type]

  return (
    <Input
      {...props}

      {...typeOptions}

      title={title || node.id}
      value={displayValue}
      placeholder={flags.waiting ? '...' : displayValue || '???'}
      inputRef={inputRef}

      style={{
        '--placeholder-size': flags.userInputNeeded ? 'var(--input-size' : undefined,
        '--placeholder-size-active': flags.waiting ? 'var(--placeholder-size)' : undefined,
        '--placeholder-colour': flags.ignored ? 'var(--colours-dark-3)' : undefined,
        '--title-colour': flags.ignored ? 'var(--colours-dark-5)' : undefined,
      }}

      required={flags.userInputNeeded}
      strikeThrough={flags.ignored}
      readOnly={flags.noSideEffects}

      colour={colour}
      emphasis={emphasis}
      highlight={highlight}

      labels={labels}
      onChange={onChange}

      tabIndex={tabbable ? undefined : -1} // prevent user from tabbing to identical input if 2nd instance follows
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}

export const createInputFactory = graph => (...args) => {
  const node = graph.createNode(...args)
  const InputWrapper = props => <MultiStepCalculationInput node={node} {...props} />

  return [node, InputWrapper]
}