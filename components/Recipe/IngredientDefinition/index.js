import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

export const IngredientDefinition = ({ingredient, alternative}) => (
  <IngredientText
   onMouseEnter={() => ingredient.setHover('definition')}
   onMouseLeave={() => ingredient.setHover(false)}

   ingredient={ingredient}
   alternative={alternative}
   name={true}
   interactive={true}
   highlightOnHover={'link'}
  />
)

export const createIngredientDefinition = recipe => ({id, alternative, ...props}) => {
  const ingredient = recipe.getIngredient(id) || recipe.addIngredient({id, ...props})

  const [_, setDummy] = useState()

  useEffect(() => {
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <IngredientDefinition ingredient={ingredient} alternative={alternative} />
  ), [ingredient, ingredient.displayUnit, ingredient.hover, recipe.scale, alternative])
}

export default createIngredientDefinition
