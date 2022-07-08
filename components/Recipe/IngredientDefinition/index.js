import {useEffect, useState, useMemo, cloneElement} from 'react'

import IngredientText from '../IngredientText'

import {checkable, checked as checkedStyle, alternative as alternativeStyle} from './styles'

const getSavedCheckedKey = ({id}) => `saved-checked-${id}`
const getSavedChecked = ingredient => sessionStorage.getItem(getSavedCheckedKey(ingredient)) === 'true'
const setSavedChecked = (ingredient, status) => sessionStorage.setItem(getSavedCheckedKey(ingredient), status)

export const IngredientDefinition = ({ingredient, alternative, isAlternative, displayedWithQuantity, children}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => setChecked(getSavedChecked(ingredient)), [])
  useEffect(() => setSavedChecked(ingredient, checked), [checked])

  return (
    <>
      <IngredientText
        onMouseEnter={() => ingredient.setHover('definition')}
        onMouseLeave={() => ingredient.setHover(false)}
        onNameClick={() => !checked && setChecked(true)}

        ingredient={ingredient}
        displayedWithName={true}
        displayedWithQuantity={displayedWithQuantity}
        quantityInteractive={!checked}
        highlightOnHover={'link'}

        className={`${checkable} ${checked && checkedStyle}`}
        onClick={() => checked && setChecked(false)}

        children={children}
      />
      {alternative && <span className={alternativeStyle}> or {cloneElement(alternative, {isAlternative: true})}</span>}
    </>
  )
}

export const ingredientDefinitionSymbol = Symbol('ingredientDefinition')

export const createIngredientDefinition = recipe => {
  const fn = ({id, alternative, isAlternative=false, display=true, displayedWithQuantity, children, ...props}) => {
    const ingredient = recipe.getIngredient(id) || recipe.addIngredient({id, ...props})
  
    const [_, setDummy] = useState()
  
    useEffect(() => {
      const forceUpdate = () => setDummy({})
  
      recipe.addListener(forceUpdate)
      return () => recipe.removeListener(forceUpdate)
    }, [])
  
    if(!display) return null
  
    return useMemo(() => (
      <IngredientDefinition ingredient={ingredient} alternative={alternative} isAlternative={isAlternative} displayedWithQuantity={displayedWithQuantity} children={children}/>
    ), [ingredient, ingredient.displayUnit, ingredient.hover, recipe.scale, children, alternative, isAlternative, displayedWithQuantity])
  }

  fn[ingredientDefinitionSymbol] = true

  return fn
}

export default createIngredientDefinition
