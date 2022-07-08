import createRecipe from '@/components/Recipe'

const {recipe, IngredientDefinition, IngredientLink, RecipeConfig, InlineQuantity, IngredientList, StepList} = createRecipe({scale: 1})

export {
  recipe,
  IngredientDefinition,
  IngredientLink,
  RecipeConfig,
  InlineQuantity,
  IngredientList,
  StepList
}
