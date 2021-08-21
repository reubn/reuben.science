import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

import {link, label, quantity, hover, mousetrap} from './styles'

export const IngredientLink = ({ingredient, quantityOnly=false, inlineQuantity=false, children}) => (
  <span
   className={[link, (ingredient.hover === 'definition') && hover].filter(cn => cn).join(' ')}
   style={{'--ingredient-accent': `var(--colours-${ingredient.colour})`}}
   onMouseEnter={() => ingredient.setHover('link')}
   onMouseLeave={() => ingredient.setHover(false)}
   >
    {!inlineQuantity && <span className={mousetrap} />}
    {
      ingredient.hasQuantity && (
        <IngredientText
         ingredient={ingredient}
         name={false}
         interactive={true}

         className={!inlineQuantity && quantity}
        />
      )
    }
    {!quantityOnly && <span className={label}>{inlineQuantity ? ' ' : ''}{children || ingredient.name.toLowerCase()}</span>}
  </span>
)

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
