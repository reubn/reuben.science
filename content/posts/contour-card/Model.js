/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import card from './postFiles/card.glb'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(card)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['0'].geometry}
          material={materials.Yellow}
          position={[-33314.12, 21804.06, 6.84]}
          scale={[0.1, 0.1, 0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['1'].geometry}
          material={materials.Black}
          position={[-33314.12, 21804.06, 6.84]}
          scale={[0.1, 0.1, 0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['2'].geometry}
          material={materials.Purple}
          scale={[0.1, 0.1, 0.1]}
        />
      </group>
    </group>
  )
}

useGLTF.preload(card)
