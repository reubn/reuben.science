import Quantity from './Quantity'
import Unit from './Unit'

class Ingredient {
  constructor(recipe, config){
    this.config = config
    this.recipe = recipe

    if(this.hasQuantity) this.displayUnit = this.quantity.unit
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

  get hasQuantity(){
    return !!this.config.quantity
  }

  get quantity(){
    if(!this.hasQuantity) return undefined

    return Quantity.from(this.config.quantity)
  }

  setDisplayUnit(unit){
    if(!this.hasQuantity) return

    this.displayUnit = unit
    this.recipe.ingredientUpdated()
  }

  get displayQuantity(){
    if(!this.hasQuantity) return undefined

    const scaleFn = this.config.scaleFn?.bind(null, this.recipe) || this.recipe.scaleFn

    return this.quantity.transform(scaleFn).convert(this.displayUnit)
  }

  withScale(scale){
    if(!this.hasQuantity) return this

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
    if(!this.hasQuantity) return

    const betterUnit = this.displayQuantity.betterUnitChoice

    if(betterUnit) this.setDisplayUnit(betterUnit)
  }
}

export default Ingredient
