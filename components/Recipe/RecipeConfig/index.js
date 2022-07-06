import {recipeConfig} from './styles'

export const createRecipeConfig = ({ServingsControl, UnitSystemControl}) => props => {
 return (
  <section className={recipeConfig}>
    <ServingsControl {...props} />
    <UnitSystemControl {...props} />
  </section>
 )
}

export default createRecipeConfig
