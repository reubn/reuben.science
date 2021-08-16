import {useEffect, useState, useMemo, useRef} from 'react'

import toFixedOrInteger from '@/src/toFixedOrInteger'

import {container, content, title, icon, control, input, incDec, servingsName, equals, recipeScaleInput} from './styles'

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
  const name = servings !== 1 ? plural : singular

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
        if(value > 1) setLocalServings(Math.ceil(value) - 1)
      }

      if(event.key === 'Enter'){
        event.preventDefault()
        event.target.blur()
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

      if(event.key === 'Enter'){
        event.preventDefault()
        event.target.blur()
      }
    }

    scaleRef.current?.addEventListener('keydown', listener)

    return () => scaleRef.current?.removeEventListener('keydown', listener)
  }, [scaleRef.current])

  return (
    <div className={container}>
      <div className={content}>
      <h3 className={title}><span className={icon}>🔢</span> Recipe Makes</h3>
        <div className={control} style={{'--digits': (localServings.string || servingsUsedInRecipe).length ?? 1}}>
          <input
            ref={servingsRef}
            type="text"
            inputMode="decimal"

            className={input}

            value={localServings.string}
            placeholder={servingsUsedInRecipe}
            onChange={event => setLocalServings(event.target.value)}
            onBlur={event => {
              if(localServings.number) return

              const numeric = localServings.string.replace(/[^\d\.]/g, '')

              if(+numeric) _setLocalServings(makeServingsState(numeric))
              else _setLocalServings(makeServingsState(servings))
            }}
          />
          <div
           className={servingsName}
           style={{
             '--maxLetters': Math.max(plural.length, singular.length),
             '--letters': name.length
           }}
           onClick={() => {
            const position = servingsRef.current.value.length
            servingsRef.current.setSelectionRange(position, position);
            servingsRef.current.focus()
          }}>
            {name}
          </div>
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
            if(localScale.number && localScale.string.endsWith('x')) return

            const numeric = localScale.string.replace(/[^\d\.]/g, '')

            if(+numeric) setLocalScale(numeric + 'x')
            else _setLocalScale(makeScaleState(scale))
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
