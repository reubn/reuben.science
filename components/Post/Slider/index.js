import {ReactCompareSlider} from 'react-compare-slider'

import {slider, handle} from './styles'

const Slider = props => {
  const Handle = () => (
    <div className={handle} />
  )

  return (
    <ReactCompareSlider
    	className={slider}
    	handle={<Handle />}
      {...props}
    />
  )
}

export default Slider
