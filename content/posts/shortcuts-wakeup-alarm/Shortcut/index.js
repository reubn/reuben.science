import {shortcut, icon, shortcutsGroup} from './styles'

const gradient = colour => ({
  red: ['#F0595D', '#ED4249'],
  orange1: ['#FD7759', '#FC6642'],
  orange2: ['#F49E44', '#F39227'],
  yellow: ['#FACC0C', '#E5BB00'],
  green: ['#3FC455', '#13BB3D'],
  aqua: ['#00D6B5', '#00D1AC'],
  blue1: ['#00D2E6', '#00CAE0'],
  blue2: ['#00B5F7', '#00B1FF'],
  indigo: ['#4B68BD', '#3152B3'],
  purple1: ['#8559B9', '#7240AE'],
  purple2: ['#AB60DB', '#A750DE'],
  pink: ['#EC74C5', '#F26BC9'],
  grey1: ['#87929C', '#77828D'],
  grey2: ['#93A094', '#839285'],
  grey3: ['#9C908C', '#8E817C'],
}[colour])

const Icon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 86 97' {...props}>
    <path d="M53.873 3.364 80.651 21.23c5.513 3.679 7 11.13 3.321 16.643a12 12 0 0 1-3.31 3.313l-11.39 7.62 10.379 6.924c5.513 3.679 7 11.13 3.321 16.643a12 12 0 0 1-3.31 3.313L52.895 93.595a20 20 0 0 1-22.67-.295L5.07 75.51c-5.41-3.827-6.694-11.316-2.867-16.727a12 12 0 0 1 2.88-2.876l11.038-7.787-10.05-7.11C.66 37.183-.624 29.694 3.203 24.283a12 12 0 0 1 2.88-2.876l25.16-17.75a20 20 0 0 1 22.63-.293ZM10.272 63.26a3 3 0 0 0-.003 4.901l25.152 17.79a11 11 0 0 0 12.468.163l26.77-17.908a3 3 0 0 0 .688-.638l.139-.19a3 3 0 0 0-.83-4.161L61.171 54.22l-7.278 4.874a20 20 0 0 1-22.67-.295l-7.305-5.167-13.647 9.628Zm26.16-52.25-25.16 17.75a3 3 0 0 0-.003 4.901l25.152 17.79a11 11 0 0 0 12.468.163l26.77-17.908a3 3 0 0 0 .688-.638l.139-.19a3 3 0 0 0-.83-4.161L48.877 10.85a11 11 0 0 0-12.447.162Z" />
  </svg>
)

export default ({name, href, colour, ...props}) => {
  const [to, from] = gradient(colour)

  const style = {
    background: `radial-gradient(circle at top left, ${from}, ${to})`,
  }

  return (
    <a href={href} {...props}>
      <div className={shortcut} style={style}>
        <Icon className={icon} />
        <p>{name} ↗️</p>
      </div>
    </a>
  )
}

export const ShortcutsGroup = ({className, ...props}) => (
  <section className={`${shortcutsGroup} ${className}`} {...props} />
)