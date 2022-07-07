import {Children} from 'react'

import {ingredientDefinitionSymbol} from '../IngredientDefinition'

import {container, content, title as titleStyle, icon} from '../RecipeConfig/styles'
import {container as localContainer, list} from './styles'

export const IngredientList = ({emoji='📝', title='Ingredients', children}) => (
  <div className={`${container} ${localContainer}`}>
    <div className={content}>
      <h3 className={titleStyle}><span className={icon}>{emoji}</span> {title}</h3>
      <ul className={list}>
        {Children.map(children, child => child.type[ingredientDefinitionSymbol] ? <li>{child}</li> : child)}
      </ul>
    </div>
  </div>
)

export default IngredientList
