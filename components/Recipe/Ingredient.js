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
    this._displayQuantity = null
    this.recipe.ingredientUpdated()
  }

  _displayQuantity = null
  get displayQuantity(){
    if(!this.hasQuantity) return undefined

    if(!this._displayQuantity) {
      const scaleFn = !this.config.doNotScale && (this.config.scaleFn?.bind(null, this.recipe) ?? this.recipe.scaleFn)
      this._displayQuantity = this.quantity.transform(scaleFn).convert(this.displayUnit)
    }
    
    return this._displayQuantity
  }

  withScale(scale){ // TODO: would be better to store the scale as display property - then we can supply custom scaleFn
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

  setQuantity(quantity){
    this.config.quantity = Quantity.from(quantity)
    this.displayUnit = this.config.quantity.unit

    this.recipe.ingredientUpdated()
  }

  recipeUpdated(){
    if(!this.hasQuantity) return
    this._displayQuantity = null

    const betterUnit = this.displayQuantity.betterUnitChoice

    if(betterUnit) this.setDisplayUnit(betterUnit)
  }
}

export default Ingredient
