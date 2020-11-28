import {svg, re, ex, red, orange, yellow, green, blue, purple, dim} from './styles'

const rx = '20px'

export default ({className='', easterEggCallback, easterEggPass, ...props}) => {
  let easterEggString = ''
  const easterEgg = num => () => ((easterEggString += ('' + num)).endsWith(easterEggPass)) && (easterEggCallback(), easterEggString = '')

  return (
    <svg {...props} className={`${className} ${svg}`} viewBox="0 0 994 994">
      <defs>
          <linearGradient x1="0%" y1="0%" x2="99.9884439%" y2="99.9884439%" id="orange">
              <stop stopColor="#FF6638" offset="0.0115561319%"></stop>
              <stop stopColor="#FC9A27" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="yellow">
              <stop stopColor="#FCEE27" offset="0%"></stop>
              <stop stopColor="#FFE238" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="8.8817842e-14%" y1="8.8817842e-14%" x2="100%" y2="100%" id="red">
              <stop stopColor="#FF5252" offset="0%"></stop>
              <stop stopColor="#FC2727" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="blue">
              <stop stopColor="#0CE9E8" offset="0%"></stop>
              <stop stopColor="#04A5FB" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0%" y1="-1.77635684e-13%" x2="100%" y2="100%" id="purple">
              <stop stopColor="#5E52FF" offset="0%"></stop>
              <stop stopColor="#9F27FC" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="100%" y1="100%" x2="-7.10542736e-13%" y2="7.10542736e-13%" id="green">
              <stop stopColor="#5BFF52" offset="0%"></stop>
              <stop stopColor="#27FCAE" offset="100%"></stop>
          </linearGradient>
      </defs>
      <g>
          <g transform="translate(-565.000000, -233.000000)">
              <g transform="translate(1062.000000, 730.000000) rotate(-45.000000) translate(-1062.000000, -730.000000) translate(712.000000, 378.000000)">
                  <path d="M400,20.0660172 L400,230.066017 C400,241.111712 391.045695,250.066017 380,250.066017 L270,250.066017 C258.954305,250.066017 250,259.020322 250,270.066017 L250,280.066017 C250,291.111712 258.954305,300.066017 270,300.066017 L680,300.066017 C691.045695,300.066017 700,309.020322 700,320.066017 L700,680.066017 C700,691.111712 691.045695,700.066017 680,700.066017 L320,700.066017 C308.954305,700.066017 300,691.111712 300,680.066017 L300,620.066017 C300,609.020322 308.954305,600.066017 320,600.066017 L580,600.066017 C591.045695,600.066017 600,591.111712 600,580.066017 L600,570.066017 C600,559.020322 591.045695,550.066017 580,550.066017 L320,550.066017 C308.954305,550.066017 300,541.111712 300,530.066017 L300,470.066017 C300,459.020322 308.954305,450.066017 320,450.066017 L580,450.066017 C591.045695,450.066017 600,441.111712 600,430.066017 L600,420.066017 C600,409.020322 591.045695,400.066017 580,400.066017 L170,400.066017 C158.954305,400.066017 150,391.111712 150,380.066017 L150,170.066017 C150,159.020322 158.954305,150.066017 170,150.066017 L280,150.066017 C291.045695,150.066017 300,141.111712 300,130.066017 L300,120.066017 C300,109.020322 291.045695,100.066017 280,100.066017 L120,100.066017 C108.954305,100.066017 100,109.020322 100,120.066017 L100,380.066017 C100,391.111712 91.045695,400.066017 80,400.066017 L20,400.066017 C8.954305,400.066017 1.3527075e-15,391.111712 0,380.066017 L0,20.0660172 C-1.3527075e-15,9.02032218 8.954305,0.066017178 20,0.066017178 L380,0.066017178 C391.045695,0.066017178 400,9.02032218 400,20.0660172 Z" className={re}></path>
                  <g transform="translate(0.000000, 0.066017)">
                      <g transform="translate(449.933983, 0.000000)">
                          <rect className={`${ex} ${dim}`} x="0.066017178" y="0" rx={rx}></rect>
                          <rect className={`${ex} ${dim}`} x="2.84217094e-14" y="149.93" rx={rx}></rect>
                          <rect className={`${ex} ${dim}`} x="150" y="149.93" rx={rx}></rect>

                          <rect className={`${ex} ${red}`} onClick={easterEgg(0)} fill="url(#red)" x="0.066017178" y="0" rx={rx}></rect>
                          <rect className={`${ex} ${orange}`} onClick={easterEgg(1)} fill="url(#orange)" x="2.84217094e-14" y="149.93" rx={rx}></rect>
                          <rect className={`${ex} ${yellow}`} onClick={easterEgg(2)} fill="url(#yellow)" x="150" y="149.93" rx={rx}></rect>
                      </g>
                      <g transform="translate(0.000000, 452.933983)">
                          <rect className={`${ex} ${dim}`} x="5.68434189e-14" y="0.066017178" rx={rx}></rect>
                          <rect className={`${ex} ${dim}`} x="150.066017" y="1.13686838e-13" rx={rx}></rect>
                          <rect className={`${ex} ${dim}`} x="149.933983" y="149.996017" rx={rx}></rect>

                          <rect className={`${ex} ${green}`} onClick={easterEgg(3)} fill="url(#green)" x="5.68434189e-14" y="0.066017178" rx={rx}></rect>
                          <rect className={`${ex} ${blue}`} onClick={easterEgg(4)} fill="url(#blue)" x="150.066017" y="1.13686838e-13" rx={rx}></rect>
                          <rect className={`${ex} ${purple}`} onClick={easterEgg(5)} fill="url(#purple)" x="149.933983" y="149.996017" rx={rx}></rect>
                      </g>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  )
}
