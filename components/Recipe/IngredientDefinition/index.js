import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

export const IngredientDefinition = ({ingredient, alternative, displayedWithQuantity}) => (
  <IngredientText
   onMouseEnter={() => ingredient.setHover('definition')}
   onMouseLeave={() => ingredient.setHover(false)}

   ingredient={ingredient}
   alternative={alternative}
   displayedWithName={true}
   displayedWithQuantity={displayedWithQuantity}
   interactive={true}
   highlightOnHover={'link'}
  />
)

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
