import createRecipe from '@/components/Recipe'

const {recipe, IngredientDefinition, IngredientLink, ServingsControl, InlineQuantity} = createRecipe({scale: 1})

export {
  recipe,
  IngredientDefinition,
  IngredientLink,
  ServingsControl,
  InlineQuantity
}
