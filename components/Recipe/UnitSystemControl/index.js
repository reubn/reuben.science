import {useEffect, useState, useMemo, useRef, Fragment} from 'react'

import gradient from '@/src/gradient'

import {metric, US} from '../Unit/constants'

import {container, content, title, icon, control} from './styles'

const unitSystemConfig = [
  {
    name: 'Metric',
    unitSystem: metric,
    colour: 'blue'
  },
  {
    name: 'US',
    unitSystem: US,
    colour: 'red'
  },
  {
    name: 'Imperial',
    unitSystem: Symbol('imperial'),
    colour: 'green'
  }
]

export const ServingsControl = ({options, removingLastDisabled}) => {
  return (
    <div className={container}>
      <div className={content}>
      <h3 className={title}><span className={icon}>⚖️</span> Preferred Units</h3>
        <div className={control}>
          {options.map(({name, colour, checked, onChange}, index) => (
            <Fragment key={name}>
              <input type="checkbox" id={index} checked={checked} onChange={onChange} />
              <label htmlFor={index} style={{'--option-underline': gradient(colour)}}><span>{name}</span></label>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

const localStorageKey = 'unitSystem'

const createInitialState = () => {
  if(!global.navigator) return new Set()

  const localeString = navigator?.languages?.length ? navigator?.languages[0] : navigator?.language
  const locale = localeString && new Intl.Locale(localeString)

  const {region} = locale ?? {}

  const regionMap = {
    US: [US],
    CA: [US, metric],
    default: [metric]
  }

  const previousSelectionJSON = global.localStorage?.getItem(localStorageKey)
  const previousSelectionStrings = previousSelectionJSON ? JSON.parse(previousSelectionJSON).filter(x => x) : null
  const previousSelections = previousSelectionStrings?.length && previousSelectionStrings?.map(unitSystemName => unitSystemConfig.find(({name}) => name === unitSystemName)?.unitSystem)

  const initialState = previousSelections || regionMap[region] || regionMap.default

  return new Set(initialState)
}

export const createServingsControl = recipe => ({...props}) => {
  const {current: activeUnitSystems} = useRef(createInitialState())

  const removingLastDisabled = activeUnitSystems.size <= 1

  const unitSystemsUpdate = (unitSystem, checked) => {
    if(checked) activeUnitSystems.add(unitSystem)
    else {
      activeUnitSystems.delete(unitSystem)
      if(removingLastDisabled){
        const currentIndex = unitSystemConfig.findIndex(({unitSystem: uS}) => uS === unitSystem)
        const nextIndex = (currentIndex + 1) % unitSystemConfig.length

        activeUnitSystems.add(unitSystemConfig[nextIndex].unitSystem)
      }
    }

    recipe.setUnitFilterFn(unit => unit.config.systems?.some?.(system => activeUnitSystems.has(system)) ?? true)

    const json = JSON.stringify([...activeUnitSystems.values()].map(unitSystem => unitSystemConfig.find(({unitSystem: uS}) => unitSystem === uS)?.name))
    global.localStorage?.setItem(localStorageKey, json)
  }

  const options = unitSystemConfig.map(({unitSystem, ...other}) => ({
    ...other,
    unitSystem,
    checked: activeUnitSystems.has(unitSystem),
    onChange: ({target: {checked}}) => unitSystemsUpdate(unitSystem, checked)
  }))

  const [_, setDummy] = useState()

  useEffect(() => {
    unitSystemsUpdate()
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <ServingsControl
      options={options}
      removingLastDisabled={removingLastDisabled}
     {...props} />
  ), [options, removingLastDisabled])
}

export default createServingsControl
