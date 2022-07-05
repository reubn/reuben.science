import {container} from './styles'

export const createRecipeConfig = ({ServingsControl, UnitSystemControl}) => props => {
 return (
  <section className={container}>
    <ServingsControl {...props} />
    <UnitSystemControl {...props} />
  </section>
 )
}

export default createRecipeConfig
