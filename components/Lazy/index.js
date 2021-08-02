import {useEffect, useState} from 'react'

import {useInView} from 'react-intersection-observer'

import {intersectionHandle} from './styles'

const Lazy = ({children: Child, config={}}) => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if(!hydrated) setHydrated(true)
  }, [])

  const effectiveConfig = {
    triggerOnce: true,
    ...config
  }

  const [topRef, topInView] = useInView(effectiveConfig)
  const [_ref, mainInView] = useInView(effectiveConfig)

  const inView = topInView || mainInView

  if(hydrated) return (
    <>
      <span ref={topRef} className={`${intersectionHandle} ${config.handleClass || ''}`} />
      <Child _ref={_ref} inView={inView} data-noscript="no" />
    </>
  )

  return (
    <>
      <noscript>
        <Child inView={true} data-noscript="yes" />
      </noscript>
      <span ref={topRef} className={`${intersectionHandle} ${config.handleClass || ''}`} data-noscript="no"/>
      <Child _ref={_ref} inView={inView} data-noscript="no" />
    </>
  )
}

export default Lazy
