import {useState, useEffect, useRef} from 'react'

import Input, {top, bottom, left, right} from '@/components/Input'

import {SPECIFIED, ALL_CHILDREN_SPECIFIED, PENDING, IN_USE, CALCULATED} from './MultiStepCalculationGraph'

export const MultiStepCalculationInput = ({node, title, emphasis, userInputSuggested: showAsUserInput, ...props}) => {
  const inputRef = useRef(null)
  const [dummy, forceUpdate] = useState()

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

  const onFocus = () => {
    setFocusState(true)
    node.fireEvent('focusState', {focusState: true})
  }

  const onBlur = () => {
    setFocusState(false)
    node.fireEvent('focusState', {focusState: false})
  }

  const flags = {
    userOverridden: !showAsUserInput && node.valueState === SPECIFIED && !node.isRoot,
    userInputNeeded: (showAsUserInput || node.isRoot) && node.valueState === PENDING && node.useState === IN_USE,
    ignored: node.useState === ALL_CHILDREN_SPECIFIED,
    waiting: !node.isRoot && node.valueState === PENDING && node.useState !== ALL_CHILDREN_SPECIFIED,
    calculated: !node.isRoot && node.valueState === CALCULATED,
    noSideEffects: node.useState === ALL_CHILDREN_SPECIFIED || node.isLeaf,
    canUserOverride: !showAsUserInput && !node.isRoot && !node.isLeaf
  } 

  const colour = (
    flags.userOverridden && !flags.ignored ? 'purple' :
    emphasis ||
    undefined
  )

  let topRight = (
    flags.userInputNeeded ? {text: 'Enter Value', colour: 'blue'} :
    flags.waiting ? {text: 'Waiting to Calc', colour: 'mid-2'} :
    flags.ignored ? {text: 'Not Used', colour: 'mid-2'} :
    flags.calculated ? {text: 'Calculated', colour: 'aqua'} :
    flags.userOverridden ? undefined :
    {text: 'OK', colour: 'green'}
  )

  if(flags.canUserOverride && focusState) topRight = (
    flags.waiting ? {text: 'Enter Value to Lock', colour: 'purple'} :
    flags.calculated ? {text: 'Edit Value to Lock', colour: 'purple'} :
    topRight
  )

  const bottomRight = (
    flags.userOverridden ? {text: 'Locked', actionText: 'Unlock', colour: 'purple', onClick: event => {node.setSpecifiedValue(undefined); onBlur()}} :
    flags.calculated && !focusStateInput ? {text: 'Lock', colour: 'purple', onClick: event => {node.setSpecifiedValue(node.value); document.activeElement.blur()}} :
    undefined
  )

  let labels = [
    {position: [top, right], ...topRight},
    {position: [bottom, right], ...bottomRight}
  ]

  const highlight = topRight?.colour ?? bottomRight?.colour

  // if(flags.userOverridden) emphasis = 'purple'
  if(focusStateOtherInstance) emphasis = emphasis || highlight
  if(emphasis) labels = labels.map(label => ({...label, colour: 'light'}))

  return (
    <Input
      {...props}
      title={title || node.id}
      value={node.value}
      placeholder={flags.waiting ? '...' : ''}
      inputRef={inputRef}

      required={flags.userInputNeeded}
      strikeThrough={flags.ignored}
      readOnly={flags.noSideEffects}

      colour={colour}
      emphasis={emphasis}
      highlight={highlight}

      labels={labels}
      onChange={value => node.setSpecifiedValue(value)}

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