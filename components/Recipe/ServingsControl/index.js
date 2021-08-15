import {useEffect, useState, useMemo, useRef} from 'react'

import toFixedOrInteger from '@/src/toFixedOrInteger'

import {container, content, title, icon, stuff, input, incDec, servingsName, equals, recipeScaleInput} from './styles'

const makeServingsState = servings => ({
  string: toFixedOrInteger(servings, 2) + '',
  number: servings
})

const makeScaleState = scale => ({
  string: toFixedOrInteger(scale, 2) + 'x',
  number: scale
})

export const ServingsControl = ({scale, servingsAsWritten, servingsChanged, scaleChanged, plural, singular=(plural.endsWith('s') ? plural.slice(0, -1) : plural)}) => {
  const servingsRef = useRef()
  const scaleRef = useRef()

  const servings = scale * servingsAsWritten

  const [localServings, _setLocalServings] = useState(makeServingsState(servings))
  const [localScale, _setLocalScale] = useState(makeScaleState(scale))

  const setLocalServings = value => _setLocalServings({
    string: value + '',
    number: +value
  })
  const setLocalScale = value => _setLocalScale({
    string: value + '',
    number: +(value + '').replace(/x$/, '')
  })

  useEffect(() => _setLocalServings(makeServingsState(servings)), [servings])
  useEffect(() => _setLocalScale(makeScaleState(scale)), [scale])

  useEffect(() => servingsChanged(localServings), [localServings])
  useEffect(() => scaleChanged(localScale), [localScale])

  const servingsUsedInRecipe = toFixedOrInteger(servings, 2) + ''

  useEffect(() => {
    const listener = event => {
      const value = event.target.value || event.target.placeholder

      if(event.key === 'ArrowUp' || event.key === '=' || event.key === '+'){
        event.preventDefault()
        setLocalServings(Math.floor(value) + 1)
      }

      if(event.key === 'ArrowDown' || event.key === '-' || event.key === '_'){
        event.preventDefault()
        setLocalServings(Math.ceil(value) - 1)
      }
    }

    servingsRef.current?.addEventListener('keydown', listener)

    return () => servingsRef.current?.removeEventListener('keydown', listener)
  }, [servingsRef.current])

  useEffect(() => {
    const listener = event => {
      const value = (event.target.value || event.target.placeholder).replace(/x$/, '')

      if(event.key === 'ArrowUp' || event.key === '=' || event.key === '+'){
        event.preventDefault()
        setLocalScale((Math.floor(value) + 1) + 'x')
      }

      if(event.key === 'ArrowDown' || event.key === '-' || event.key === '_'){
        event.preventDefault()
        if(value > 1) setLocalScale((Math.ceil(value) - 1) + 'x')
      }
    }

    scaleRef.current?.addEventListener('keydown', listener)

    return () => scaleRef.current?.removeEventListener('keydown', listener)
  }, [scaleRef.current])

  return (
    <div className={container}>
      <div className={content}>
      <h3 className={title}><span className={icon}>🔢</span> Recipe Makes</h3>
        <div className={stuff} style={{'--digits': (localServings.string || servingsUsedInRecipe).length ?? 1}}>
          <input
            ref={servingsRef}
            type="number"
            inputMode="decimal"

            className={input}

            value={localServings.string}
            placeholder={servingsUsedInRecipe}
            onChange={event => setLocalServings(event.target.value)}
          />
          <div className={servingsName} onClick={() => servingsRef.current.focus()}>{servings !== 1 ? plural : singular}</div>
          <div className={incDec}>
            <button
             onClick={() => setLocalServings(Math.floor(servingsRef.current.value || servingsRef.current.placeholder) + 1)}
            >+</button>
            <button
             onClick={() => setLocalServings(Math.ceil(servingsRef.current.value || servingsRef.current.placeholder) - 1)}
             disabled={servings <= 1}
            >−</button>
          </div>
        </div>
        <span className={equals}>=</span>
        <input
          ref={scaleRef}
          type="text"
          inputMode="decimal"

          className={recipeScaleInput}
          style={{'--digits': localScale.string.length}}

          value={localScale.string}
          placeholder="1x"
          onChange={event => setLocalScale(event.target.value)}
          onMouseDown={event => {
            if(document.activeElement === event.target) return

            event.preventDefault()

            const position = (event.target.value || event.target.placeholder).replace(/x$/, '').length
            event.target.setSelectionRange(position, position)

            event.target.focus()
          }}
          onClick={event => event.preventDefault()}
          onBlur={event => {
            const value = event.target.value || event.target.placeholder
            if(!value.endsWith('x')) setLocalScale(value + 'x')
          }}
        />
      </div>
    </div>
  )
}

export const createServingsControl = recipe => ({servings: servingsAsWritten, ...props}) => {
  const servingsChanged = state => {
    const {string, number} = state

    console.log('servingsChanged', state)

    if(number <= 0) return

    const newScale = number / servingsAsWritten

    recipe.setScale(newScale)
  }

  const scaleChanged = state => {
    const {string, number} = state

    console.log('scaleChanged', state)

    if(recipe.scale === number || string.endsWith('.x') || !string.endsWith('x') || number <= 0 || isNaN(number)) return

    recipe.setScale(number)
  }

  const [_, setDummy] = useState()

  useEffect(() => {
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <ServingsControl
     servingsAsWritten={servingsAsWritten}
     scale={recipe.scale}

     servingsChanged={servingsChanged}
     scaleChanged={scaleChanged}
     {...props} />
  ), [recipe.scale, servingsAsWritten])
}

export default createServingsControl
