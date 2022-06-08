import Recipe from './Recipe'
import Ingredient from './Ingredient'
import Quantity from './Quantity'
import Unit from './Unit'

import createIngredientDefinition from './IngredientDefinition'
import createIngredientLink from './IngredientLink'
import createServingsControl from './ServingsControl'
import createInlineQuantity from './InlineQuantity'

const createRecipe = config => {
  const recipe = new Recipe(config || {})

  return {
    recipe,
    IngredientDefinition: createIngredientDefinition(recipe),
    IngredientLink: createIngredientLink(recipe),
    ServingsControl: createServingsControl(recipe),
    InlineQuantity: createInlineQuantity(recipe)
  }
}

export default createRecipe

export {
  Recipe,
  Ingredient,
  Quantity,
  Unit
}
