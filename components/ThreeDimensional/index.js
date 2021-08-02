import React, {Suspense, useState, useEffect, cloneElement} from 'react'
import dynamic from 'next/dynamic'

import {useThree} from '@react-three/fiber'
import {useProgress} from '@react-three/drei'

const Sus = process.browser ? Suspense : ({children}) => <>{children}</>

import Lazy from '@/components/Lazy'

import {threeDimensional, threeDimensionalLoading} from './styles'

function Helper({frameloop}){
  const set = useThree(state => state.set)

  useEffect(() => {
    set({frameloop: frameloop ? 'demand' : 'never'})
  }, [frameloop])

  return null
}

const Inner = ({inView, _ref, children: child, alt, canvasProps={}, ...props}) => {
  const [display, setDisplay] = useState(false)
  const [frameloop, setFrameloop] = useState(false)

  const [ready, setReady] = useState(false)

  const {progress} = useProgress()

  useEffect(() => {
    setReady(progress === 100)
  }, [progress])

  useEffect(() => {
    setDisplay(inView || display)
    setFrameloop(inView)
  }, [inView])

  console.log({inView, display, frameloop, ready})

  const canvas = display && cloneElement(child, {
      frameloop: frameloop ? 'demand' : 'never',
      mode: "concurrent",
      dpr: window.devicePixelRatio,
      Helper: () => <Helper frameloop={frameloop} />,
      ...canvasProps
    }
  )


  const loading = (
    <span className={threeDimensionalLoading}>{alt}</span>
  )

  return (
    <div className={threeDimensional} ref={_ref} aria-label={alt} {...props}>
      <Sus fallback={loading}>
        {!ready && loading}
        {display && canvas}
      </Sus>
    </div>
  )
}

const ThreeDimensional = outerProps => (
  <Lazy config={{triggerOnce: false}}>
    {lazyProps => <Inner {...lazyProps} {...outerProps}/>}
  </Lazy>
)

export default ThreeDimensional
