import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

import {checkable, checked as checkedStyle} from './styles'

const getSavedCheckedKey = ({id}) => `saved-checked-${id}`
const getSavedChecked = ingredient => sessionStorage.getItem(getSavedCheckedKey(ingredient)) === 'true'
const setSavedChecked = (ingredient, status) => sessionStorage.setItem(getSavedCheckedKey(ingredient), status)

export const IngredientDefinition = ({ingredient, alternative, displayedWithQuantity}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => setChecked(getSavedChecked(ingredient)), [])
  useEffect(() => setSavedChecked(ingredient, checked), [checked])

  return (
    <span className={`${checkable} ${checked && checkedStyle}`} onClick={() => checked && setChecked(false)}>
      <IngredientText
        onMouseEnter={() => ingredient.setHover('definition')}
        onMouseLeave={() => ingredient.setHover(false)}
        onNameClick={() => !checked && setChecked(true)}

        ingredient={ingredient}
        alternative={alternative}
        displayedWithName={true}
        displayedWithQuantity={displayedWithQuantity}
        quantityInteractive={!checked}
        highlightOnHover={'link'}
      />
    </span>
  )
}

export const createIngredientDefinition = recipe => ({id, alternative=false, display=true, displayedWithQuantity, ...props}) => {
  const ingredient = recipe.getIngredient(id) || recipe.addIngredient({id, ...props})

  const [_, setDummy] = useState()

  useEffect(() => {
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  if(!display) return null

  return useMemo(() => (
    <IngredientDefinition ingredient={ingredient} alternative={alternative} displayedWithQuantity={displayedWithQuantity} />
  ), [ingredient, ingredient.displayUnit, ingredient.hover, recipe.scale, alternative, displayedWithQuantity])
}

export default createIngredientDefinition
