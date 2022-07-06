import {useState} from 'react'

const LengthDisplay = ({readingTime: {mins, words}, locales, ...props}) => {
  const [minMode, setMinMode] = useState(true)

  const display = minMode
    ? (
      <time
       time={mins && `PD0T0H${mins}M`}
       aria-label="Reading Time">
         {mins || '???'} min{mins != 1 && 's'}
      </time>
    )
    : (
      <span>{new Intl.NumberFormat(locales).format(words)} words</span>
    )

  return (
    <span onClick={() => setMinMode(!minMode)} {...props}>
      {display}
    </span>
  )
}

export default LengthDisplay
