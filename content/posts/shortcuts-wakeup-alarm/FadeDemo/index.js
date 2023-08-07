import {useState} from "react"

import {demo, wrapper, roomGroup, room, on, off, light, light2, lightGroup, linearLight, bezierLight, progress, progressLabels} from './styles'

const Room = ({className, title, ...props}) => (
  <div {...props} className={`${room} ${className}`}>
    <div className={lightGroup}>
      <div className={light} />
      <div className={light2} />
    </div>
    <p>{title}</p>
  </div>
)

export default ({className, ...props}) => {
  const [mode, setMode] = useState(false)

  return (
    <div {...props} className={`${className || ''} ${demo} ${mode ? on : off}`} onClick={() => setMode(x => !x)}>
      <h2>Easing Function Demo</h2>
      <div className={wrapper}>
        <div>
          <div className={progress}>
            <span />
          </div>
          <div className={progressLabels}>
            <span>0'</span>
            <span>15'</span>
            <span>30'</span>
          </div>
        </div>
        <div className={roomGroup}>
          <Room title="Linear" className={linearLight} />
          <Room title="Bézier + Stagger" className={bezierLight} />
        </div>
      </div>
    </div>
  )
}