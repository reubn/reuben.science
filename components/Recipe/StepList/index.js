import {tldr} from '@/components/Post/styles'
import {container, content, title as titleStyle, icon} from '../RecipeConfig/styles'
import {container as localContainer} from './styles'


export const StepList = ({emoji, title, children}) => (
  <div className={`${tldr} ${container} ${localContainer}`}>
    <div className={content}>
      {emoji && title && <h3 className={titleStyle}><span className={icon}>{emoji}</span> {title}</h3>}
      {children}
    </div>
  </div>
)

export default StepList
