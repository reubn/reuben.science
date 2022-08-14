import {useState, useEffect} from 'react'

import Input, {top, bottom, left, right} from '@/components/Input'

import {SPECIFIED, ALL_CHILDREN_SPECIFIED, PENDING, IN_USE, CALCULATED} from './MultiStepCalculationGraph'

export const MultiStepCalculationInput = ({node, title, emphasis, ...props}) => {
  const [dummy, forceUpdate] = useState()

  useEffect(() => {
    const handler = () => {
      console.log('UPDATING INPUT', node.id)
      forceUpdate({})
    }

    node.addEventListener('valueChanged', handler)
    node.addEventListener('childValueChanged', handler)

    return () => {
      node.removeEventListener('valueChanged', handler)
      node.removeEventListener('childValueChanged', handler)
    }

  }, [node])

  const [focusState, setFocusState] = useState(false)
  const [focusStateAnyInstance, setFocusStateAnyInstance] = useState(false)

  const tabbable = !focusStateAnyInstance || focusState

  useEffect(() => {
    const handler = ({detail: focusState}) => setFocusStateAnyInstance(focusState)

    node.addEventListener('focusState', handler)
    return () => node.removeEventListener('focusState', handler)
  }, [node])

  const onFocus = () => {
    setFocusState(true)
    node.dispatchEvent(new CustomEvent('focusState', {detail: true}))
  }

  const onBlur = () => {
    setFocusState(false)
    node.dispatchEvent(new CustomEvent('focusState', {detail: false}))
  }

  const flags = {
    userOverridden: node.valueState === SPECIFIED && !node.isRoot,
    userInputNeeded: node.isRoot && node.valueState === PENDING && node.useState === IN_USE,
    ignored: node.useState === ALL_CHILDREN_SPECIFIED,
    waiting: !node.isRoot && node.valueState === PENDING && node.useState !== ALL_CHILDREN_SPECIFIED,
    calculated: !node.isRoot && node.valueState === CALCULATED,
    noSideEffects: node.useState === ALL_CHILDREN_SPECIFIED || node.isLeaf,
    canUserOverride: !node.isRoot && !node.isLeaf
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
    flags.userOverridden ? {text: 'Locked', hoverText: 'Unlock', colour: 'purple', onClick: event => {node.setSpecifiedValue(undefined); onBlur()}} :
    // flags.calculated ? {text: 'Fix', colour: 'light', onClick: event => {node.setSpecifiedValue(node.value); event.preventDefault()}} :
    undefined
  )

  let labels = [
    {position: [top, right], ...topRight},
    {position: [bottom, right], ...bottomRight}
  ]

  const labelsColour = labels.map(({colour}) => colour).filter(x => x).pop()

  // if(flags.userOverridden) emphasis = 'purple'
  if(emphasis) labels = labels.map(label => ({...label, colour: 'light'}))

  return (
    <Input
      {...props}
      title={title || node.id}
      value={node.value}
      placeholder={flags.waiting ? '...' : ''}

      required={flags.userInputNeeded}
      strikeThrough={flags.ignored}
      readOnly={flags.noSideEffects}

      colour={colour}
      emphasis={emphasis}
      highlight={labelsColour}

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
  const Input = props => <MultiStepCalculationInput node={node} {...props} />

  return [node, Input]
}