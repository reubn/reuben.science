import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'

import {Vector3} from 'three'
import {useThree, Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import Model from './Model'

function Setup({frameloop}){
  const camera = useThree(state => state.camera)

  useEffect(() => {
    camera.position.set(100, 250, 0)
    camera.lookAt(0, 0, 0)
  }, [])

  return null
}

const intensity = 0.7
const radius = 250
const shadows = true
const shadowBias = 0
const config = {
    main: [-2, 4, 4],
    fill: [-1, 0.5, -1.5],
  }

const Contours3D = ({Helper, ...props}) => (
  <Canvas {...props}>
    <Helper />
    <Setup />
    <Model position={[0, 0, 0]} />

    <ambientLight intensity={intensity / 3} />
    <spotLight
      penumbra={1}
      position={[config.main[0] * radius, config.main[1] * radius, config.main[2] * radius]}
      intensity={intensity * 2}
      castShadow={shadows}
      shadow-bias={shadowBias}
    />
    <pointLight
      position={[config.fill[0] * radius, config.fill[1] * radius, config.fill[2] * radius]}
      intensity={intensity}
    />
    <OrbitControls target={new Vector3(0, 0, 0)} enablePan={false} enableZoom={false} maxPolarAngle={(Math.PI / 2) * 0.9} autoRotate screenSpacePanning />
  </Canvas>
)

export default Contours3D
