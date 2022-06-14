import {useEffect, useState, useMemo, useRef} from 'react'

import {createIngredientLink} from '../IngredientLink'

export const InlineQuantity = ({IngredientLink, ingredient, ...props}) => {
  return (
    <IngredientLink
     ingredient={ingredient}
     quantityOnly
     wrapped

     {...props}
    />
  )
}

export const createInlineQuantity = recipe => {
  const IngredientLink = createIngredientLink(recipe)

  return ({id: _id=Math.random()+'', display=true, shouldScale=false, quantity, ...props}) => {
    const {current: id} = useRef(_id)

    const preExistingIngredient = recipe.getIngredient(id)
   
    useEffect(() => {
      if(preExistingIngredient && !preExistingIngredient.hasQuantity && quantity) preExistingIngredient.setQuantity(quantity)
    }, [preExistingIngredient])

    const ingredient = preExistingIngredient || recipe.addIngredient({id, doNotScale: !shouldScale, quantity})

    const [_, setDummy] = useState()

    useEffect(() => {
      const forceUpdate = () => setDummy({})

      recipe.addListener(forceUpdate)
      return () => recipe.removeListener(forceUpdate)
    }, [])

    if(!display) return null

    return useMemo(() => (
      <InlineQuantity IngredientLink={IngredientLink} ingredient={ingredient} {...props} />
    ), [ingredient, ingredient.displayUnit, ingredient.quantity, recipe.scale])
  }
}

export default createInlineQuantity
