import Quantity from './Quantity'
import Unit from './Unit'

class Ingredient {
  constructor(recipe, config){
    if(Array.isArray(config)) this.config = {
      id: config[0],
      name: config[1],
      quantity: config[2]
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
    return this.quantity.convert(this.displayUnit).transform(this.recipe.scalingFn)
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
    const comfort = this.displayQuantity.comfort
    // console.log(this.id, this.displayQuantity.unit.label, comfort.comfortable, {comfort})

    if(!comfort.comfortable){
      const changeTo = comfort.suggested
        || this.quantity.unit.sensibleUnitsWith(this.quantity.value)
           .find(unit => unit !== this.displayQuantity && this.displayQuantity.convert(unit).comfort.comfortable)

      if(changeTo) {
        // console.log(this.id, 'changing to', changeTo.label, 'as not comfortable with', this.displayQuantity.value, this.displayQuantity.unit.label)
        this.setDisplayUnit(changeTo)
      }
    }
  }
}

export default Ingredient
