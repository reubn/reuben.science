import Recipe from './Recipe'
import Ingredient from './Ingredient'
import Quantity from './Quantity'
import Unit from './Unit'

import createIngredientDefinition from './IngredientDefinition'
import createIngredientLink from './IngredientLink'
import createServingsControl from './ServingsControl'
import createUnitSystemControl from './UnitSystemControl'
import createInlineQuantity from './InlineQuantity'
import createRecipeConfig from './RecipeConfig'

const createRecipe = config => {
  const recipe = new Recipe(config || {})

  const ServingsControl = createServingsControl(recipe)
  const UnitSystemControl = createUnitSystemControl(recipe)

  return {
    recipe,
    IngredientDefinition: createIngredientDefinition(recipe),
    IngredientLink: createIngredientLink(recipe),
    ServingsControl,
    UnitSystemControl,
    InlineQuantity: createInlineQuantity(recipe),
    RecipeConfig: createRecipeConfig({ServingsControl, UnitSystemControl}),
  }
}

export default createRecipe

export {
  Recipe,
  Ingredient,
  Quantity,
  Unit
}
