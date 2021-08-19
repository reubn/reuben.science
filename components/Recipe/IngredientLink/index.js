import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

import {link, quantity, hover} from './styles'

export const IngredientLink = ({ingredient, children}) => {
  // console.log('RENDER LINK', ingredient.name)

  return (
    <span
     className={[link, (ingredient.hover === 'definition') && hover].filter(cn => cn).join(' ')}
     style={{'--ingredient-accent': `var(--colours-${ingredient.colour})`}}
     onMouseEnter={() => ingredient.setHover('link')}
     onMouseLeave={() => ingredient.setHover(false)}
     >
      <IngredientText
       ingredient={ingredient}
       name={false}
       interactive={true}

       className={quantity}
      />
      {children || ingredient.name.toLowerCase()}
    </span>
  )
}

export const createIngredientLink = recipe => ({id, scale: localScale=1, ...props}) => {
  const ingredient = recipe.getIngredient(id)

  if(!ingredient) throw `Ingredient ${id} not defined`

  const locallyScaledIngredient = useMemo(
    () => localScale === 1 ? ingredient : ingredient.withScale(localScale),
    [ingredient, ingredient.displayUnit, ingredient.hover, recipe.scale, localScale]
  )

  const [_, setDummy] = useState()

  useEffect(() => {
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <IngredientLink ingredient={locallyScaledIngredient} {...props} />
  ), [locallyScaledIngredient, locallyScaledIngredient.displayUnit, locallyScaledIngredient.hover, recipe.scale])
}
export default createIngredientLink
