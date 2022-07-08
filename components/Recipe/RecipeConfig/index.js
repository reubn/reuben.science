import {tldr} from '@/components/Post/styles'
import {recipeConfig} from './styles'

export const createRecipeConfig = ({ServingsControl, UnitSystemControl}) => props => {
 return (
  <section className={`${tldr} ${recipeConfig}`}>
    <ServingsControl {...props} />
    <UnitSystemControl {...props} />
  </section>
 )
}

export default createRecipeConfig
