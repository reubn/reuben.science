import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

import {link, label, quantity, hover, mousetrap} from './styles'

export const IngredientLink = ({ingredient, quantityOnly=false, inlineQuantity=quantityOnly, children}) => (
  <span
   className={[link, ingredient.hover && hover].filter(cn => cn).join(' ')}
   style={{'--ingredient-accent': `var(--colours-${ingredient.colour})`}}
   onMouseEnter={() => ingredient.setHover('link')}
   onMouseLeave={() => ingredient.setHover(false)}
   >
    {ingredient.hasQuantity && (<>
      {!inlineQuantity && <span className={mousetrap} />}
      <IngredientText
        ingredient={ingredient}
        displayedWithName={false}
        quantityInteractive={true}

        className={!inlineQuantity && quantity}
      />
    </>)
    }
    {' '}
    {!quantityOnly && <span className={label}>{children || ingredient.name.toLowerCase()}</span>}
  </span>
)

export const createIngredientLink = recipe => ({id, ingredient=recipe.getIngredient(id), doNotSubscribe, scale: localScale=1, ...props}) => {
  if(!ingredient) throw `Ingredient ${id} not defined`

  const locallyScaledIngredient = useMemo(
    () => localScale === 1 ? ingredient : ingredient.withScale(localScale),
    [ingredient, ingredient.displayUnit, ingredient.hover, recipe.scale, localScale]
  )

  const [_, setDummy] = useState()

  useEffect(() => {
    if(doNotSubscribe) return

    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <IngredientLink ingredient={locallyScaledIngredient} {...props} />
  ), [locallyScaledIngredient, locallyScaledIngredient.displayUnit, locallyScaledIngredient.hover, recipe.scale])
}
export default createIngredientLink
