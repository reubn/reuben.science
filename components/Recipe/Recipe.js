import Ingredient from './Ingredient'
import Quantity from './Quantity'
import Unit from './Unit'

class Recipe {
  constructor(config){
    this.config = config
    this.ingredients = {}
    this.listeners = new Set()
  }

  get scale(){
    return this.config.scale || 1
  }

  get scaleFn(){
    return value => typeof value === 'number' ? value * this.scale : value
  }

  setScale(scale){
    if(this.config.scale === scale) return

    this.config.scale = scale
    this.recipeUpdated()
  }

  unitFilterFn = this.config?.unitFilterFn ?? (unit => true)

  setUnitFilterFn(fn){
    this.unitFilterFn = fn
    this.recipeUpdated()
  }

  hasIngredient(id){
    return !!this.ingredients[id]
  }

  addIngredient(ingredientConfig){
    const ingredient = new Ingredient(this, ingredientConfig)

    if(this.hasIngredient(ingredient.id)) throw `Ingredient with id ${id} already defined`

    this.ingredients[ingredient.id] = ingredient

    ingredient.recipeUpdated()

    return this.ingredients[ingredient.id]
  }

  removeIngredient(id){
    delete this.ingredients[id]
  }

  getIngredient(id){
    return this.ingredients[id]
  }

  addListener(handler){
    this.listeners.add(handler)
  }

  removeListener(handler){
    this.listeners.delete(handler)
  }

  recipeUpdated(){
    for(const reactListener of this.listeners.values()) reactListener()
    for(const ingredient of Object.values(this.ingredients)) ingredient.recipeUpdated()
  }

  ingredientUpdated(){
    for(const reactListener of this.listeners.values()) reactListener()
    // for(const ingredient of Object.values(this.ingredients)) ingredient.recipeUpdated()
  }
}

export default Recipe
