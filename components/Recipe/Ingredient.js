import Quantity from './Quantity'
import Unit from './Unit'

class Ingredient {
  constructor(recipe, config){
    if(Array.isArray(config)) this.config = {
      id: config[0],
      name: config[1],
      quantity: config[2],
      scaleFn: config[3]
    }
    else this.config = config

    this.recipe = recipe
    this.displayUnit = this.quantity.unit
  }

  get id(){
    return this.config.id
  }

  get name(){
    return this.config.name
  }

  get quantity(){
    return Quantity.from(this.config.quantity)
  }

  setDisplayUnit(unit){
    this.displayUnit = unit
    this.recipe.ingredientUpdated()
  }

  get displayQuantity(){
    const scaleFn = this.config.scaleFn?.bind(null, this.recipe.scale) || this.recipe.scaleFn

    return this.quantity.convert(this.displayUnit).transform(scaleFn)
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
