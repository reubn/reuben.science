import {useEffect, useState} from 'react'

import {useInView} from 'react-intersection-observer'

const Lazy = ({children: Child, config}) => {

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if(!hydrated) setHydrated(true)
  }, [])

  const [_ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    ...config
  })

  if(hydrated) return <Child _ref={_ref} inView={inView} data-noscript="no" />

  return (
    <>
      <noscript>
        <style dangerouslySetInnerHTML={{__html: '[data-noscript="no"]{display: none!important}'}} />
        <Child _ref={_ref} inView={true} data-noscript="yes" />
      </noscript>
      <Child _ref={_ref} inView={inView} data-noscript="no" />
    </>
  )
}

export default Lazy
