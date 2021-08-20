import Quantity from './Quantity'
import Unit from './Unit'

class Ingredient {
  constructor(recipe, config){
    this.config = config
    this.recipe = recipe
    this.displayUnit = this.quantity.unit
  }

  get id(){
    return this.config.id
  }

  get name(){
    return this.config.name
  }

  get colour(){
    return this.config.colour || 'accent'
  }

  get comment(){
    return this.config.comment
  }

  get quantity(){
    return Quantity.from(this.config.quantity)
  }

  setDisplayUnit(unit){
    this.displayUnit = unit
    this.recipe.ingredientUpdated()
  }

  get displayQuantity(){
    const scaleFn = this.config.scaleFn?.bind(null, this.recipe) || this.recipe.scaleFn

    return this.quantity.transform(scaleFn).convert(this.displayUnit)
  }

  withScale(scale){
    const scaledIngredient = new Ingredient(this.recipe, {
      ...this.config,
      quantity: this.quantity.transform(v => scale * v)
    })

    scaledIngredient.recipeUpdated()

    return scaledIngredient
  }

  setHover(hover){
    this.hover = hover
    this.recipe.ingredientUpdated()
  }

  recipeUpdated(){
    const betterUnit = this.displayQuantity.betterUnitChoice

    if(betterUnit) this.setDisplayUnit(betterUnit)
  }
}

export default Ingredient
