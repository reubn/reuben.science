import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

import {hasRotation, quantity as quantityStyle, value as valueStyle, unit as unitStyle, name as nameStyle} from './styles'

export const IngredientDefinition = ({ingredient, alternative}) => {
  // console.log('RENDER DEFINITION', ingredient.name)

  return (
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
}

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
