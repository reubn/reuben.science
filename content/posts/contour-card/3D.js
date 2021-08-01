import React, {useState, useEffect, Suspense} from 'react'
import {Vector3} from 'three'

import {Canvas, useThree} from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'

import Model from './Model'

function Setup(){
  const camera = useThree(state => state.camera)

  useEffect(() => {
    camera.position.set(100, 250, 0)
    camera.lookAt(0, 0, 0)
  }, [])

  return null
}

const ThreeD = ({inView, _ref}) => {
  const [display, setDisplay] = useState(false)
  const [frameloop, setFrameloop] = useState(false)

  useEffect(() => {
    setDisplay(inView || display)
    setFrameloop(inView)
  }, [inView])

  console.log({inView, display, frameloop})

  return <span ref={_ref}>{
    display ? (
      <Canvas frameloop={frameloop ? "always" : "never"} mode="concurrent" dpr={window.devicePixelRatio}>
        <Setup />
        <Suspense fallback={null}>
          <Stage preset="upfront" environment="warehouse" intensity={0.001} contactShadowOpacity={0.6} contactShadowBlur={1} adjustCamera={false}>
            <Model position={[0, 0, 0]} />
          </Stage>
        </Suspense>
        <OrbitControls target={new Vector3(0, 0, 0)} enablePan={false} enableZoom={false} maxPolarAngle={(Math.PI / 2) * 0.9} autoRotate screenSpacePanning />
      </Canvas>
    ) : null
  }</span>
}

export default ThreeD
