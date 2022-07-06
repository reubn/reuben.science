import {useEffect, useState, useMemo, useRef, Fragment} from 'react'

import gradient from '@/src/gradient'

import {metric, US} from '../Unit/constants'

import {container, content, title, icon, control} from '../RecipeConfig/styles'
import {control as localControl} from './styles'

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
  }/* ,
  {
    name: 'Imperial',
    unitSystem: Symbol('imperial'),
    colour: 'green'
  } */
]

const optionKey = name => `unitSystemControl-${name}`

export const UnitSystemControl = ({options}) => (
  <div className={container}>
    <div className={content}>
    <h3 className={title}><span className={icon}>⚖️</span> Preferred Units</h3>
      <div className={`${control} ${localControl}`}>
        {options.map(({name, colour, checked, onChange}) => (
          <Fragment key={name}>
            <input type="checkbox" id={optionKey(name)} checked={checked} onChange={onChange} />
            <label htmlFor={optionKey(name)} style={{'--option-underline': gradient(colour)}}>
              <span>{name}</span>
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  </div>
)

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
  const previousSelectionStrings = previousSelectionJSON ? JSON.parse(previousSelectionJSON) : null
  const previousSelections = previousSelectionStrings?.map(unitSystemName => unitSystemConfig.find(({name}) => name === unitSystemName)?.unitSystem).filter(x => x)

  const initialState = (previousSelections?.length && previousSelections) || regionMap[region] || regionMap.default

  return new Set(initialState)
}

export const createUnitSystemControl = recipe => ({...props}) => {
  const {current: activeUnitSystems} = useRef(createInitialState())

  const removingLastDisabled = activeUnitSystems.size <= 1

  const unitSystemsUpdate = (unitSystem, checked) => {
    if(checked) activeUnitSystems.add(unitSystem)
    else {
      activeUnitSystems.delete(unitSystem)
      if(removingLastDisabled){
        const {unitSystem: next} = unitSystemConfig.find(({unitSystem: uS}) => uS !== unitSystem)
        activeUnitSystems.add(next)
      }
    }

    const json = JSON.stringify([...activeUnitSystems.values()].map(unitSystem => unitSystemConfig.find(({unitSystem: uS}) => unitSystem === uS)?.name))
    global.localStorage?.setItem(localStorageKey, json)

    applyFilter()
  }

  const applyFilter = () => recipe.setUnitFilterFn(unit => unit.config.systems?.some?.(system => activeUnitSystems.has(system)) ?? true)

  const options = unitSystemConfig.map(({unitSystem, ...other}) => ({
    ...other,
    unitSystem,
    checked: activeUnitSystems.has(unitSystem),
    onChange: ({target: {checked}}) => unitSystemsUpdate(unitSystem, checked)
  }))

  const [_, setDummy] = useState()

  useEffect(() => {
    applyFilter()
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <UnitSystemControl
      options={options}
      removingLastDisabled={removingLastDisabled}
     {...props} />
  ), [options, removingLastDisabled])
}

export default createUnitSystemControl
