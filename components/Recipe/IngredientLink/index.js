import {useEffect, useState, useMemo} from 'react'

import IngredientText from '../IngredientText'

import {link, quantity, hover as hoverStyle, conjunction} from './styles'

export const IngredientLink = ({ingredients, children}) => {
  // console.log('RENDER LINK', ingredients.map(i => i.name))
  const hover = ingredients.some(ingredient => ingredient.hover === ingredient.hover === 'definition')

  return (
    <span
     className={[link, hover && hoverStyle].filter(cn => cn).join(' ')}
     style={{'--ingredient-accent': `var(--colours-${ingredients[0].colour})`}}
     >
      <span className={quantity}>
        {ingredients.map((ingredient, index) => {
          const ingredientText = (
            <IngredientText
             key={ingredient.id}
             ingredient={ingredient}
             name={false}
             interactive={true}

             onMouseEnter={() => ingredient.setHover('link')}
             onMouseLeave={() => ingredient.setHover(false)}
            />
          )

          if(index) return (
            <>
              <span className={conjunction}>or</span>
              {ingredientText}
            </>
          )

          return ingredientText

        })}
      </span>
      <span
       onMouseEnter={() => ingredients.forEach(ingredient => ingredient.setHover('link'))}
       onMouseLeave={() => ingredients.forEach(ingredient => ingredient.setHover(false))}
      >{children || ingredients[0].name.toLowerCase()}</span>
    </span>
  )
}

export const createIngredientLink = recipe => ({id, ids=[id], scale: localScale=1, ...props}) => {
  const ingredients = ids.map(id => {
    const ingredient = recipe.getIngredient(id)

    if(!ingredient) throw `Ingredient ${id} not defined`

    return ingredient
  })

  const locallyScaledIngredients = useMemo(
    () => localScale === 1 ? ingredients : ingredients.map(ingredient => ingredient.withScale(localScale)),
    [...ingredients.flatMap(ingredient => [ingredient, ingredient.displayUnit, ingredient.hover]), recipe.scale, localScale]
  )

  const [_, setDummy] = useState()

  useEffect(() => {
    const forceUpdate = () => setDummy({})

    recipe.addListener(forceUpdate)
    return () => recipe.removeListener(forceUpdate)
  }, [])

  return useMemo(() => (
    <IngredientLink ingredients={locallyScaledIngredients} {...props} />
  ), [locallyScaledIngredients, recipe.scale])
}
export default createIngredientLink
