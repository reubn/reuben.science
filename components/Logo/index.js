import {useState} from 'react'

import {svg, type, square, t1, t2, t3, b1, b2, b3, dim, active, locked, interactive} from './styles'

import * as classMap from './styles'

const rx = '20px'

export default ({className='', type: style, easterEgg, ...props}) => {
  const normalClass = classMap[style]
  console.log(classMap)

  const prefix = style.match(/^(dol)|(lod)|(auto)/)[0]
  const gradientClass = classMap[prefix + 'RainbowGradient']

  const {callback: easterEggCallback, pass: easterEggPass} = easterEgg || {}

  let [easterEggString, setEasterEggString] = useState('')
  const easterEggFn = num => e => {
    if(!easterEgg) return

    e.stopPropagation()

    const newAttempt = easterEggString + ('' + num)
    if(!easterEggPass.startsWith(newAttempt)) return setEasterEggString('')
    setEasterEggString(newAttempt)

    if(newAttempt === easterEggPass) {
      easterEggCallback()
      setEasterEggString('')
    }
  }


  return (
    <svg {...props} className={`${className} ${svg}`} viewBox="0 0 994 994">
      <defs>
          <linearGradient x1="0%" y1="0%" x2="99.9884439%" y2="99.9884439%" id="orange">
              <stop stopColor="hsl(14, 100%, 61%)" offset="0.0115561319%"></stop>
              <stop stopColor="hsl(32, 97%, 57%)" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="yellow">
              <stop stopColor="hsl(56, 97%, 57%)" offset="0%"></stop>
              <stop stopColor="hsl(51, 100%, 61%)" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="8.8817842e-14%" y1="8.8817842e-14%" x2="100%" y2="100%" id="red">
              <stop stopColor="hsl(0, 100%, 66%)" offset="0%"></stop>
              <stop stopColor="hsl(0, 97%, 57%)" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="blue">
              <stop stopColor="hsl(180, 90%, 48%)" offset="0%"></stop>
              <stop stopColor="hsl(201, 97%, 50%)" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0%" y1="-1.77635684e-13%" x2="100%" y2="100%" id="purple">
              <stop stopColor="hsl(244, 100%, 66%)" offset="0%"></stop>
              <stop stopColor="hsl(274, 97%, 57%)" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="100%" y1="100%" x2="-7.10542736e-13%" y2="7.10542736e-13%" id="green">
              <stop stopColor="hsl(117, 100%, 66%)" offset="0%"></stop>
              <stop stopColor="hsl(158, 97%, 57%)" offset="100%"></stop>
          </linearGradient>
      </defs>
      <g>
          <g transform="translate(-565.000000, -233.000000)">
              <g transform="translate(1062.000000, 730.000000) rotate(-45.000000) translate(-1062.000000, -730.000000) translate(712.000000, 378.000000)">
                  <path d="M400,20.0660172 L400,230.066017 C400,241.111712 391.045695,250.066017 380,250.066017 L270,250.066017 C258.954305,250.066017 250,259.020322 250,270.066017 L250,280.066017 C250,291.111712 258.954305,300.066017 270,300.066017 L680,300.066017 C691.045695,300.066017 700,309.020322 700,320.066017 L700,680.066017 C700,691.111712 691.045695,700.066017 680,700.066017 L320,700.066017 C308.954305,700.066017 300,691.111712 300,680.066017 L300,620.066017 C300,609.020322 308.954305,600.066017 320,600.066017 L580,600.066017 C591.045695,600.066017 600,591.111712 600,580.066017 L600,570.066017 C600,559.020322 591.045695,550.066017 580,550.066017 L320,550.066017 C308.954305,550.066017 300,541.111712 300,530.066017 L300,470.066017 C300,459.020322 308.954305,450.066017 320,450.066017 L580,450.066017 C591.045695,450.066017 600,441.111712 600,430.066017 L600,420.066017 C600,409.020322 591.045695,400.066017 580,400.066017 L170,400.066017 C158.954305,400.066017 150,391.111712 150,380.066017 L150,170.066017 C150,159.020322 158.954305,150.066017 170,150.066017 L280,150.066017 C291.045695,150.066017 300,141.111712 300,130.066017 L300,120.066017 C300,109.020322 291.045695,100.066017 280,100.066017 L120,100.066017 C108.954305,100.066017 100,109.020322 100,120.066017 L100,380.066017 C100,391.111712 91.045695,400.066017 80,400.066017 L20,400.066017 C8.954305,400.066017 1.3527075e-15,391.111712 0,380.066017 L0,20.0660172 C-1.3527075e-15,9.02032218 8.954305,0.066017178 20,0.066017178 L380,0.066017178 C391.045695,0.066017178 400,9.02032218 400,20.0660172 Z" className={`${type} ${normalClass}`}></path>
                  <g transform="translate(0.000000, 0.066017)">
                      <g transform="translate(449.933983, 0.000000)">
                        <rect className={`${square} ${normalClass} ${t1} ${dim}`} x="0.066017178" y="0" rx={rx}></rect>
                        <rect className={`${square} ${normalClass} ${t2} ${dim}`} x="2.84217094e-14" y="149.93" rx={rx}></rect>
                        <rect className={`${square} ${normalClass} ${t3} ${dim}`} x="150" y="149.93" rx={rx}></rect>

                        <rect className={`${square} ${gradientClass} ${t1} ${active} ${easterEgg ? interactive : ''} ${easterEgg && easterEggPass.startsWith(easterEggString) && easterEggString.includes(0) ? locked : ''}`} onClick={easterEggFn(0)} x="0.066017178" y="0" rx={rx}></rect>
                        <rect className={`${square} ${gradientClass} ${t2} ${active} ${easterEgg ? interactive : ''} ${easterEgg && easterEggPass.startsWith(easterEggString) && easterEggString.includes(1) ? locked : ''}`} onClick={easterEggFn(1)} x="2.84217094e-14" y="149.93" rx={rx}></rect>
                        <rect className={`${square} ${gradientClass} ${t3} ${active} ${easterEgg ? interactive : ''} ${easterEgg && easterEggPass.startsWith(easterEggString) && easterEggString.includes(2) ? locked : ''}`} onClick={easterEggFn(2)} x="150" y="149.93" rx={rx}></rect>

                      </g>
                      <g transform="translate(0.000000, 452.933983)">
                        <rect className={`${square} ${normalClass} ${b1} ${dim}`} x="5.68434189e-14" y="0.066017178" rx={rx}></rect>
                        <rect className={`${square} ${normalClass} ${b2} ${dim}`} x="150.066017" y="1.13686838e-13" rx={rx}></rect>
                        <rect className={`${square} ${normalClass} ${b3} ${dim}`} x="149.933983" y="149.996017" rx={rx}></rect>

                        <rect className={`${square} ${gradientClass} ${b1} ${active} ${easterEgg ? interactive : ''} ${easterEgg && easterEggPass.startsWith(easterEggString) && easterEggString.includes(3) ? locked : ''}`} onClick={easterEggFn(3)} x="5.68434189e-14" y="0.066017178" rx={rx}></rect>
                        <rect className={`${square} ${gradientClass} ${b2} ${active} ${easterEgg ? interactive : ''} ${easterEgg && easterEggPass.startsWith(easterEggString) && easterEggString.includes(4) ? locked : ''}`} onClick={easterEggFn(4)} x="150.066017" y="1.13686838e-13" rx={rx}></rect>
                        <rect className={`${square} ${gradientClass} ${b3} ${active} ${easterEgg ? interactive : ''} ${easterEgg && easterEggPass.startsWith(easterEggString) && easterEggString.includes(5) ? locked : ''}`} onClick={easterEggFn(5)} x="149.933983" y="149.996017" rx={rx}></rect>
                      </g>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  )
}
