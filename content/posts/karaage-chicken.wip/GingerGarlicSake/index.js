import * as React from "react"

import {svg} from '../styles'
import {accent, main, sake, fill, butt} from './styles'

function SvgComponent(props) {
  return (  
    <svg
     xmlns="http://www.w3.org/2000/svg"
     overflow="visible"
     viewBox="0 0 247.6 202.6"
     className={svg}
     {...props}
   >
      <g>
        <path className={`${accent} ${butt}`} d="M14.2,116.4c5-2.6,9.2-2.6,13.2,0" />
        <path className={`${accent} ${butt}`} d="M19.9 164.5c8.3-2 16-.4 23.4 4.2M19.8 152.9c9.5-5.3 19.2-4.3 29.5 2.3M35.4 132.9c7.4 1.1 13.1 6.1 16.8 14.3M56 113.5c5.5 2.3 11.1 8.8 12 19.5M28.6 108.6c7.8-7.9 17-9.7 27.1-4M25 105.2c1-6.1 4-9.9 8.6-11M10.5 131.7c3.2-5.1 9.1-7.4 17.2-6.4M1.4 164.8c3.9-3.4 8.2-4.6 12.7-3.5"/>
        <path className={main} d="M23.3,190c-3.3-1.7-5.1-6.1-10.5-11c-2.1-1.2-2.1-2.8-6.3-4.1c-5.3-2.5-6.5-7.7-3.6-15.6 c1.5-5.1,3.4-7.7,5.9-7.7c3.6,0,4.5,6,5.1,7.7s0,5.8,5,5.8s-1.1-24.7-3.8-27.4s-5.8-7.5-5.8-10.1s0.4-2.7,3.6-5.6 c0.7-0.9,1.3-3.7,1.8-8.3c0.1-1.7,1.7-2.5,4.9-2.5s4.9,0.1,3.8,0c2.1,0.1,3.4,0.3,3.8,1.9c0.7,2.4,0,22,3.6,23.6 c5.2,2.1,7-11.7,5.6-16.1c-1.4-4.4-8.1-14.5-15.3-17.9c-4.3-2-3.3-4.5-1-9c2.3-4.5,2.6-7.1,7.1-4.7c4.5,2.4,2.7,0.5,7,5.5 c2.2,1.9,1.7-4.8,1.5-6c-0.4-2.5-1.5-4.1,3.3-4.5c3.2-0.3,5.7-0.4,7.5-0.5c5.2-0.5,6.7,1.6,7.8,6.5c0.6,2.5,4.2,7,2.8,11.3 s-3.8,8.6-3.8,12.4c0,1.4,1.5,1,4.4-1.3c3.7-2.8,6.7-1.7,9.2,3.3c3.7,7.5,3.3,13.5,2.3,15.8c-2.3,5.2-13.6,3.6-16.8,15.7 S38.6,172.5,42,180.1C44.1,184.6,24.4,190.9,23.3,190z" />
        <circle cx="48.7" cy="94.2" r="1.5" className={`${accent} ${fill}`} />
        <circle cx="34.3" cy="110.6" r="1.5" className={`${accent} ${fill}`} />
        <circle cx="24.6" cy="139.4" r="1.5" className={`${accent} ${fill}`} />
        <circle cx="59.9" cy="124.3" r="1.5" className={`${accent} ${fill}`} />
        <circle cx="29.3" cy="178.6" r="1.5" className={`${accent} ${fill}`} />
        <circle cx="37.1" cy="159.8" r="1.5" className={`${accent} ${fill}`} />
      </g>
      <g>
        <path className={main} d="M118,97.2l2.1,11c1.3,10.2,6,19.5,14,27.7c6.7,6.9,11.8,11.3,15.3,15.8c2.4,3.1,5.7,10.8,5.7,13.3 c0,17.7-17,21.3-22.2,21.3c-5.2,0-13.2-3-16.9-3.8c-3.7-0.8-4.9-1-7.1,0.4c-2.2,1.4-3.2,2-5.2,2c-0.9,0-6.2,0-11.9-2 c-7.1-2.5-13.3-7.9-14.2-16.2c-1.3-11.3,5-18.4,8-21.9c3-3.5,13.8-11.1,18.1-16.6c4.3-5.5,7.4-7,4.3-20.1 c-0.7-4.4-1.1-6.9-1.1-7.6"/>
        <path className={main} d="M119.7 140.1c8.6 7.4 12.4 15.5 11.4 24.6-1 9-1.8 14.1-2.4 15.2M111.6 140.1c-6.1 7.1-9.7 13.8-11 19.9s-1.4 12.3-.6 18.6" />
        <path className={accent} d="M120.1 186.7c2.2 4 6.3 6.2 12.3 6.5 1.6 0-2.3 2.4-3.9 2.4-1.6 0-5.9-.6-9.9-6.7-.4-.8-1.1 0-.8 1.9.3 1.8.9 2.8 3.3 4.5.6.5-1.7.9-2.7 0-1-.9-3.6-3.4-3.6-6.4 0-1.4-2.7 3.7-3.5 4.5-.8.7-4.3 3.9-5.7 3-.3-.2.8-.9 1.9-2.1.9-1 1.5-1.8 1.8-2.9.2-1.1 1.2-4.1 1-4.8-.1-.5-1 .6-2.5 3.2-1.7 2.9-3.7 5-5.8 6.1-3.2 1.7-4.6 1.4-5 1.1-.4-.3-.5-.7-.2-1.1.2-.3.6 0 1.5-.3.9-.2 1.1-.4 1.6-.7.5-.3 4.2-4.8 4.7-7" />
      </g>
      <g>
        <path className={`${main} ${butt}`} d="M246.3,184.5l-0.3-56.6c-26.6,2.9-49.3,3-68.4,0l0.8,56.6C198.7,190.3,221.3,190.3,246.3,184.5z" />
        <path className={main} d="M222.2,18.9c1.2,20.6,2.7,31.2,3.2,34.8c0.7,5.5,3,14.9,5.3,21.1c1.7,4.7,10.7,29,11.3,31.2s4,11.5,4,21.9 s0.5,51.5,0,61.9c0,3-3.7,10.6-20.6,11.2c-11.3,0.4-18.4,0.4-21.3,0c-16.3,0-24.7-3.4-25.3-10.2c-0.5-7.2-0.9-28.1-1.2-62.9 c0.1-8.5,1.4-15.8,3.7-21.9c3.6-9.2,11.9-35.7,13.8-42.2c1.9-6.5,3.4-40.8,3.4-44.7" />
        <path className={sake} d="M205.7 144.2c6.9-.7 13.8-1.5 20.7-2.2M213.4 145.1c.1 7 1.6 11.1-2.5 16.3M219.1 144.8c-.1 13.6-4.7 16.1 5 16.1M207 173.5c0-7.2 0-14.5-.1-21.7M206.9 151.9c5.8 0 11.7 0 17.5-.1M224.8 151.8c0 7.1 0 14.2 0 21.3M207.3 165.8c5.8-.1 11.6-.2 17.4-.3M224.7 171.1c-5.8.1-11.7.1-17.5.2M200.9 162.3c-.8 1.5-1.9 3.4-5.3 9.4M199.9 155.6c1.7 1.6.9.9-3.8-3.6M201.3 147.7c1.9 1.4.4.3-5.5-4.1" />
        <path className={accent} d="M199.6 1.3h21.3c2.9 0 5.3 2.4 5.3 5.3v7.1c0 2.9-2.4 5.3-5.3 5.3h-21.3c-2.9 0-5.3-2.4-5.3-5.3V6.6C194.2 3.7 196.6 1.3 199.6 1.3z" />
      </g>
   </svg>
  )
}

export default SvgComponent
