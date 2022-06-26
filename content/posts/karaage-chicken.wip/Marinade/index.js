import * as React from "react"

import {svg} from '../styles'
import {line, tub, fluid, fluidLevel, chicken} from './styles'

function SvgComponent(props) {
  return (  
    <svg
     xmlns="http://www.w3.org/2000/svg"
     overflow="visible"
     viewBox="-3 -3 334 337"
     className={svg}
     {...props}
   >

  <path className={tub} d="M1 180.4c0-2.8.9-5.9 3.1-8.1 1.1-1.1 2.3-1.9 3.7-2.5l171.3-71.2c4.2-1.7 9.1-.8 12.2 2.5l132.6 135.5c2.4 2.4 3.2 5.7 3 8.8M185.2 1.1v97.5"/>
  <path className={chicken} d="M237.5 178.1h-3.9c-3.3 0-9.1 2.5-17.5 7.6-6.2 5.6-8.3 10.9-6.1 16.1s1.6 8.2-1.7 9.2c-4 2.1-6.4 6.1-7.4 11.9-1.4 8.7-1.8 15.8-3 20.3s-2.8 16.8 3 20.5c3.8 2.5 8 3.9 12.4 4.3 6.9-2.9 11.2-4.7 12.9-5.3 2.5-.9 5.9-2.3 14.2 0 5.5 1.6 11.6 1.2 18.3-1.2 7.1-4.4 11.4-10.5 13-18.3 2.3-11.7-3.8-20.9-3.8-24.1 0-3.2 0-11.3 2.2-22.4M237.1 268c-1.9 11.3-8.1 17-18.7 17-15.8 0-16.2 7.5-21.6 10.1s-18.2 9.6-24.3 2.6c-4.1-4.7-5.7-9.2-4.9-13.6"/>
  <path className={chicken} d="M178.9 245.7c2.9 6 3.9 11.6 2.9 16.6-1.4 7.5-1.8 9.6-4.5 13-2.7 3.4-7.9 11.3-22.3 10.2-14.4-1.2-15.2-.9-20.7-2s-13.6 1.1-17.9-12.3c-4.2-13.4-3.6-13.7-3.6-19.1 0-3.2 4-9.5 8.5-13.7 2.9-2.7 6.6-4.3 7.9-4.7M272.4 241.9c8.2 6.8 18.2 8.5 30 5.1 11.8-3.4 16-12 12.5-25.7-.8-12.5-.4-19.7 1.3-21.6 1.7-1.9.1-6.1-4.5-12.8l-4-4.3M307.6 182.5c-8.3 10.7-20.7 15.4-37.3 14.1-16.6-1.3-27.5-7.5-32.8-18.6-2.8-8.6-2.4-14.7 1.2-18.4 5.3-5.5 6.7 2.2 12.5-7.7s12.6-13.4 21.9-13.4c9.2 0 13.1 7.1 17.6 13.4s20.1 11.3 19.4 17.9c-.5 4.5-1.3 8.7-2.5 12.7z"/>
  <path className={chicken} d="M200.4 225.2c-6.6 9.9-13.8 16.8-21.4 20.5-11.5 5.6-43-6.8-49.5-12s-14.3-19.8-13.2-30.9c1.1-11.1 2-19.7 9.1-24.7s14-10.6 17.1-10.6c3.1 0 9.4-2.6 19.8 4.5 7 4.8 16 7.4 27.1 7.8 10.2 2.3 16.8 8.5 19.9 18.6M225.5 180.8c-4.4-4.3-8.2-6.8-11.4-7.6-4.9-1.2-18.9-9-18.9-15.3 0-6.3 1.2-15.9 0-19.8-1.2-3.9.7-20.2 4.1-23.5 3.5-3.2 5.5-11.6 19.8-9.2 14.3 2.4 7.1-3.2 25.2 9.2 3.9 4.4 3.8 3.8 7.8 11.6 5.3 5.4 8.5 7.6 8.5 14.8"/>
  <path className={chicken} d="M214 173.2c-1.7 4.4-7.5 7.6-17.2 9.6M171.8 176.9c8.6-6.8 11.7-14.4 9.2-22.8-6.1-12.6-9.5-19.5-10.5-24.7-.9-5.1-1.2-9.9-8-12-6.8-2.1-13.9-1-17.4 1.5-2.3 1.7-6 4.5-11.1 8.5M128.2 175.9c-6.6-1.9-11.2-6.6-14-14.2-2.7-7.6-3.4-14.7-2-21.1"/>
  <path className={chicken} d="M112.3 140.5c-9.9-.1-17.6 1.5-23.2 4.9-8.4 5.2-22.2 15.2-33.4 15.2-7.5 0-14.4.4-20.8 1.3-8.1 3.8-12.1 9.8-12.1 17.8 0 12 7.5 10.8 9.8 16 2.3 5.2 4.2 5.6 12.2 16 8 10.4 19 8.8 21.6 6.7 2.6-2.1 18.8-19.3 23.8-21s14.6-.7 17.5-5.9c2.9-5.2 8.7-11.4 6.7-20.5-2-9.1-3.7-18.5-10.6-21.4-4.6-2-9.1-3.4-13.6-4.2M114.7 264.7c-15.2-7.1-24.4-13-27.7-17.7-4.9-7-7.4-1.7-7.4-14.4 0-12.7 8.4-20.9 15.1-24.9 4.4-2.6 11.6-4.3 21.4-5.2"/>
  <path className={chicken} d="M167.8 120.8c.9-1.2 4.6-4.9 10.7-10.4s14.6-6.8 16.3-11.4c1.7-4.6 1.7-5.2-3-25.4S172 57.7 166.9 58.3c-5.1.7-15.3 10.8-17.7 12.5-2.4 1.7-9.5 4.9-17.6 6.2s-19.4 16.8-18 25 7.3 13.3 11.3 15.5c2.7 1.5 5.7 4.8 9.2 10 1.6 8.7-.4 13-5.9 13h-16.7M195.9 124.7c-7.4-3-15.8-1.1-25.1 5.7"/>
  <path className={chicken} d="M114.7 107.3c-10.6-13.9-27.2-15.9-49.8-5.9s-30.1 23.8-22.5 41.5c2.6 5.9 7.1 11.8 13.2 17.8"/>
  <path className={fluid} d="M191.4 40.5 324 176c2.4 2.4 3.4 5.6 3.1 8.8h.1v59.4l-.1-.1c-.2 2.5-1.3 5-3.3 7-.9.9-1.9 1.6-3 2.1l-76.9 36.5-84.7 38c-4.2 1.9-9.1 1-12.3-2.2L4.3 186.8C1.8 184.3.7 181 1 177.7H.9v-58.4H1c0-2.8 1.1-5.5 3.2-7.7 1.1-1.1 2.3-1.9 3.7-2.5L179.1 38c4.2-1.8 9.1-.8 12.3 2.5z" />
  <path className={tub} d="M326.9 245.5c-.2 2.6-1.2 5-3.1 6.9-.9.9-1.9 1.6-3 2.1L243.9 291l-84.7 38c-4.2 1.9-9.1 1-12.3-2.2L4.3 188.1C2.1 186 1 183.3 1 180.4" />
  <path className={tub} d="M1 83v97.4M326.9 148.7v96.8"/>
  <path className={fluidLevel} d="m244 231.7-84.7 37.9c-4.2 1.9-9.1 1-12.3-2.2L4.5 128.8C.1 124.5 0 117.5 4.3 113c1.1-1.1 2.3-1.9 3.7-2.5l171.2-71.2c4.2-1.8 9.1-.8 12.3 2.5l132.2 135.5c4.3 4.4 4.2 11.5-.2 15.8-.9.9-1.9 1.6-3 2.1L244 231.7z" />
  <path className={tub} d="m243.9 194.2-84.7 38c-4.2 1.9-9.1 1-12.3-2.2L4.3 91.3C-.1 87-.2 79.9 4.1 75.5c1.1-1.1 2.3-1.9 3.7-2.5L179.1 1.8c4.2-1.7 9.1-.8 12.2 2.5l132.6 135.5c4.3 4.4 4.2 11.5-.2 15.8-.9.9-1.9 1.6-3 2.1l-76.8 36.5zM152.7 232.8v97.0"/>
   </svg>
  )
}

export default SvgComponent
